class Mango{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
        this.image = loadImage("mango.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,40,50);

    }
}