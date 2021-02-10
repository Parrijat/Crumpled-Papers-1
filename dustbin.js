class Dustbin{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body1 = Bodies.rectangle(900,420,20,100);
        this.body2 = Bodies.rectangle(700,420,20,100);
        this.body3 = Bodies.rectangle(800,460,181,20);
        World.add(world,this.body1);
        World.add(world,this.body2);
        World.add(world,this.body3);
    
    }
    display(){
        fill("white");
        rect(900,420,20,100);
        rect(700,420,20,100);
        rect(800,460,181,20);
    }
}