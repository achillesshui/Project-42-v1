class Umbrella {
    constructor() {
        var options = {
            isStatic: true,
            restitution: 0.5
        }
        this.body = Matter.Bodies.circle(100, 550, 25, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(manIMG, pos.x, pos.y, 350,350);
    }
}