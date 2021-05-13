class Drop{
    constructor(x, y){
        var options={
           restitution: 0.4,
           friction: 0.1
        }
        this.body = Bodies.circle(x, y, 5,options);       
        World.add(world, this.body);
    }

    update(){
      if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0, 500), y:random(0, 650)});
      }
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill("cyan")
        ellipseMode(RADIUS);
        ellipse(0, 0, 4,4);
        pop();  
    }
}