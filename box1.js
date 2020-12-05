class Box1
{
    constructor(){

        var box_options = {
            restitution : 1.0
        }

        this.body = Bodies.rectangle(200,100,50,50,box_options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.body.width,this.body.height);
    }
}