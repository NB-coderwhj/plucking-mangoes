class Stone{
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution:0.2,
            friction:0.5
           
        }
        this.body = Bodies.rectangle(x,y,60,50,options);
        World.add(world,this.body);
        this.image = loadImage("stone.png");
    }

    hasCollided(bodyA){
        if(this.body.position.x - bodyA.x < this.body.width + bodyA.width &&
            bodyA.x -  this.body.position.x < this.body.width + bodyA.width &&
            this.body.position.y - bodyA.y < this.body.width + bodyA.width &&
            bodyA.y -  this.body.position.y < this.body.width + bodyA.width  ){
                return true
            }else{
                return false
            }
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,60,50);

    }
}