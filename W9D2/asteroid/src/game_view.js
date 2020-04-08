const Game = require("./game.js");

function GameView(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.drawing = this.game.draw(ctx);
}

GameView.prototype.start = function() {
    setInterval(function () {
        this.game.moveObjects();
        this.game.draw(this.ctx);
    }, 20);
}


module.exports = GameView;
//    setInterval(this._tick.bind(this), 1000);

