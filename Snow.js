class Snow{
    constructor(x,y,r){
    var options={
        restitution : 1,
        density : 0.4 
    }
    this.r=r;
    this.x=x;
    this.y=y;
    this.image=loadImage("snow4.webp");
    this.body=Bodies.circle(x,y,r,options);
    World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y); 
        rotate(angle);
        imageMode(CENTER) 
        image(this.image,0,0,200);
        pop(); 
    }
}