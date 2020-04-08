const Asteroid = require('./asteroid.js');

const DIM_X = 1000;
const DIM_Y = 600;
const NUM_ASTEROIDS = 50;

function Game() {
    this.asteroids = [];
    this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
    for (let i = 0; i < NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid({ pos: this.randomPosition()}))
    }
}

Game.prototype.randomPosition = function() {
    let x = Math.floor(Math.random() * DIM_X);
    let y = Math.floor(Math.random() * DIM_Y);
    return [x,y];
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y); //why??
    // ctx.fillStyle = 'black';
    // ctx.fillRect(0, 0, DIM_X, DIM_Y);
    this.asteroids.forEach(el => el.draw(ctx));
}

Game.prototype.moveObjects = function() {
    this.asteroids.forEach(el => el.move());
}

module.exports = Game;