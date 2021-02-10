class Dustbin{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body1 = Bodies.rectangle(900,440,20,100);
        this.body2 = Bodies.rectangle(700,440,20,100);
        this.body3 = Bodies.rectangle(800,480,181,20);
        World.add(world,this.body1);
        World.add(world,this.body2);
        World.add(world,this.body3);
    
    }
    display(){
        rect(900,430,20,100);
        rect(700,430,20,100);
        rect(800,470,181,20);
    }
}