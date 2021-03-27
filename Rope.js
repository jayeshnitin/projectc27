class Rope{
    constructor(bodyA, pointB) {

        //bodyA bob hai jo ki nicha latka hua hai
        //pointB vo point hai jaha se rope roof sai judi hui hai

        var options={

            bodyA:bodyA,
             pointB:pointB,
             isStatic:true

        };
        /* 1 whenever there is a case of bodyA and pointB in constrained bodies, you need to define the point inside the constructor ==>
         like this.pointB= pointB;
           2 OR whenever there is a case of pointA and bodyB in constrained bodies, you need to define the point inside the constructor ==> 
           like this.pointA= pointA;
           3 WHEN there is a case of bodyA and bodyB in constrained bodies, you do not need to define anything inside the constructor.
        */

           this.pointB = pointB; 

        this.rope = Constraint.create(options);
       World.add(world, this.rope);

    }

    display(){

        /* 1 Now we need to make a black color or any color line between bodyA (which is gonna be bob) and pointB 
        (which is the point where my rope is attached to the roof).
           
          2 You can give color to the line via stroke("color") command and thickness of the line can be defined by strokeWeight(number);

          3 A line is always drawn between 2 points. Ek point jo hai vo bob se judaa rhega. toh namespacing (short form banana) kr lete hain. 
          var pointX = this.rope.bodyA.position
          var pointY = this.pointB;

            line(pointX.x, pointX.y, pointY.x, pointY.y);

            line(x1, y1, x2, y2); where x1,y1 are the coordinates of 1st point and x2,y2 are coordinates of 2nd point.
             ALWAYS REMEMBER, A LINE IS DRAWN B/W 2 POINTS


        */

            var point1 = this.rope.bodyA.position; //name spacing
            var point2 = this.pointB; //name spacing

            strokeWeight(2);
            stroke("black");
  
              line(point1.x, point1.y, point2.x, point2.y);

    }
}