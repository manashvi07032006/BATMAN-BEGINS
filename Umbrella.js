class Umbrella{
    constructor(x, y){
        var options={
           isStatic: true
        }
        this.body = Bodies.circle(x, y, 60,options);     
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y + 70, 10); 
    }
}