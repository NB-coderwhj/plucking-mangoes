class Ground{
    constructor(y,width){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(width/2,y,width,20,options);
        World.add(world,this.body);
        this.width = width;
        this.height = 20;

    }
    display(){
        var loc = this.body.position;
        rectMode(CENTER);
        fill(102,52,12);
        rect(loc.x,loc.y,this.width,this.height)
    }
}