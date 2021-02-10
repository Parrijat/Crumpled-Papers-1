class Ground{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(675,480,1350,20, options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("yellow")
        rect(675,480,1350,20);
    }
}