class Boy{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,5,5,options);
        World.add(world,this.body);
        this.image = loadImage("boy.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,120,250);

    }
}