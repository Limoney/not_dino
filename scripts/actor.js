class Actor
{
  constructor(x,y,actorWidth,actorHeight,frameWidth=0,frameHeight=0,texture=null)
  {
    this.position = createVector(x,y);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.size = createVector(actorWidth,actorHeight);
    this.animation = new Animation(frameWidth,frameHeight,texture);
    this.isAboveGround = false;
  }

  applyForce(force)
  {
    this.acceleration.add(force);
  }

  isColliding(actor)
  {
    return (this.position.x+this.size.x/2 > actor.position.x-actor.size.x/2 &&
            this.position.x-this.size.x/2 < actor.position.x+actor.size.x/2 &&
            this.position.y+this.size.y/2 > actor.position.y-actor.size.y/2 &&
            this.position.y-this.size.y/2 < actor.position.y+actor.size.y/2);
  }
  show()
  {
    this.animation.show();
  }
  show_test()
  {
    fill(200,0,0);
    rect(this.position.x,
         this.position.y,
         this.size.x,this.size.y);
  }
}
