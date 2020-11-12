class Thrower {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.thrower = Constraint.create(options);
        World.add(world, this.thrower);
    }
fly(){
    this.thrower.bodyA=null;
    
}
attach(body){
    this.thrower.bodyA=body;
   }
    display(){
        if(this.thrower.bodyA){
         
        
        var pointA = this.thrower.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}