class Tree{
    constructor(x,y){
        var options = {
            isStatic:true,
            density:1
        }
        this.body= Bodies.rectangle(x,y,20,40,options);
        this.image = loadImage("tree.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,200,400);
       /* rectMode(CENTER);
        rect(pos.x,pos.y,200,400)*/

    }
}