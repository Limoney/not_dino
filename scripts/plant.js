class Plant extends Actor
{
  constructor(xoffset,frameWidth=0,frameHeight=0,texture=null)
  {
    super(0,0,0,0,frameWidth=0,frameHeight=0,texture=null);
    this.xoffset = xoffset;
  }

  update()
  {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    if(this.position.x+this.size.x/2<0)
    {
      this.reset();
    }
  }
  reset()
  {
    this.position.x = this.xoffset;
    this.size = createVector(random(40,55),random(20,60));
    this.position.y = ground.position.y-this.size.y/2;
    console.log("res");
  }
}
