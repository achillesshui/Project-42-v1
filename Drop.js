class Drop {
    constructor(x,y) {
        var options = {
            restitution: 0.1,
            friction: 0.001
        }
        this.body = Matter.Bodies.rectangle(x, y, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        fill("blue");
        ellipse(pos.x, pos.y, 30,30);
    }

    resetDrop() {
        if(this.body.position.y>800) {
            console.log(this.body.position.y);
            Body.setPosition(this.body, {x:random(0,400), y:0})
        }
    }
}