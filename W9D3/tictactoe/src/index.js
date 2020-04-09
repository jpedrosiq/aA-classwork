const View = require ("./ttt-view.js")
const Game = require("./game.js")

$(() => {
  let game = new Game();

  let el = $(".ttt");
  let $el = $(el);
  
  let view = new View(game, $el);
  view.setupBoard();
  view.bindEvents();

  
  


});
