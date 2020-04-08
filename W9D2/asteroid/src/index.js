console.log("Webpack is working!")
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

window.MovingObject = MovingObject;

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    console.log('is it working?');

    const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
    });

    mo.draw(ctx);

    const a = new Asteroid({ pos: [60, 60] });
    a.draw(ctx);

    const game = new Game();
    // game.draw(ctx);
    // game.moveObjects();

    new GameView(game, ctx).start();

});

