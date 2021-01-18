class Bob {
    constructor(x, y,r) {
      var options = {
        'density':0.8,
        'friction': 0,
        'restitution':1,
        'isStatic':false
      }
      this.x = x;
      this.y = y;
      this.r = r;
     // this.image=loadImage("paper.png")
      this.body = Bodies.circle(this.x, this.y, (this.r)/2,options);
     // this.image=loadImage("sprites/base.png");
      
      World.add(world, this.body);
    };
    display(){
      var paperpos = this.body.position;
      //pos.x = mouseX;
      //pos.y = mouseY;
     // var angle = this.body.angle;
  
      push();
      translate(paperpos.x, paperpos.y);
    //  rotate(angle);
      strokeWeight(3);
     // stroke('blue')
      fill(255,0,255);
      rectMode(CENTER)
     ellipse( 0,0, this.r, this.r);
      pop();
    };
  };
  