const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

const COLOR = 'red';
const RADIUS = 8;

function Asteroid(options) {
    options.color = COLOR;
    options.radius = RADIUS;
    options.vel = Util.randomVec(3);
    MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);
module.exports = Asteroid;

