class Player extends Actor
{
  constructor(x,y,actorWidth,actorHeight,frameWidth=0,frameHeight=0,texture=null)
  {
    super(x,y,actorWidth,actorHeight,frameWidth,frameHeight,texture);
    this.animation.setDrawSize(createVector(actorWidth/2,actorHeight/2));
    this.currentHeight = this.size.y;
  }
  update()
  {
    if(keyIsDown(32) && !this.isAboveGround)
    {
      this.applyForce(createVector(0,-15));
    }
    else
    {
      this.currentHeight = this.size.y;
      this.animation.setRow(0);
    }
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    if(this.isColliding(ground))
    {
      this.position.y=ground.position.y-this.size.y/2;
      this.velocity.mult(0);
      this.acceleration.mult(0);
      this.isAboveGround = false;
      this.animation.setRow(0);
      this.animation.loopRowOnce(false);
    }
    else
    {
        this.applyForce(gravity);
        this.isAboveGround = true;
        this.animation.loopRowOnce(true);
        this.animation.setRow(1);
    }
    this.animation.update(this.position);
  }
}
