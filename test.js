class Ball {
    constructor(x, y, radius, speed) {
        let _x = x,
            _y = y,
            _radius = radius,
            _speed = speed;

        this.getX = function () {
            return _x;
        }

        this.getY = function () {
            return _y;
        }

        this.getRadius = function () {
            return _radius;
        }

        this.setRadius = function (radius) {
            _radius = radius;
        }

        this.getSpeed = function () {
            return _speed;
        }

        this.setSpeed = function (speed) {
            _speed = speed;
        }
    }

    changeSpeedDiractions() {
        let speed = this.getSpeed();

        this.setSpeed(-speed);
    }
}

let ball = new Ball(30, 30, 0, 0.5);

createElem(ball);

function draw(ball) {
    let elem = $('circle'),
        speed = ball.getSpeed(),
        radius = ball.getRadius();

    elem.attr('r', radius + speed);

    ball.setRadius(radius + speed);

    if (ball.getRadius() >= 30 || ball.getRadius() <= 0) {
        ball.changeSpeedDiractions();
    }
}

function createElem(ball) {
    let elem = document.createElementNS("http://www.w3.org/2000/svg", 'circle'),
        x = ball.getX(),
        y = ball.getY(),
        radius = ball.getRadius();

    elem.setAttribute("cx", x);
    elem.setAttribute("cy", y);
    elem.setAttribute("r", radius);

    $('#test').append(elem);
}

let RequestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };

function Tick() {
    draw(ball);
    PlanNextTick();
}

function PlanNextTick() {
    RequestAnimationFrame(Tick);
}

PlanNextTick();