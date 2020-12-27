class mango{
    constructor(x,y,r) {

        var options={
            
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage("images/mango.png")
        this.body=bodies.circle(this.x,thisy,this.r,options)
        World.add(world,this.body);
    }
}