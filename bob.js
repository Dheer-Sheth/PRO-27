class Bob
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			'restitution':1,
			'friction':0,
			'density':0.8
			
			}
		
		
		
		this.body=Bodies.circle(x,y,15, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;
			push()
			ellipseMode(RADIUS);
			fill(255,0,255)
			ellipse(pos.x, pos.y,15);
			pop()
			
	}

}