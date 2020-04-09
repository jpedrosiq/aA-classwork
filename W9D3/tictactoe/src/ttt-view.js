class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el
  }

  bindEvents() {
    let liAll = $("li")
    let lis = Array.from(liAll);

    for (let i = 0; i < lis.length; i++) {
      
      $(lis[i]).on("click", () => {
        if (!this.game.isOver()) {
          this.game.playMove([Math.floor(i / 3), i % 3]);
          this.makeMove($(lis[i]))

          if (this.game.isOver()) {
            this.makeMove($(lis[i]))

            for (let i = 0; i < lis.length; i++){
              if ($(lis[i]).text() !== "") {
                if ($(lis[i]).text() === this.game.winner()) {
                  $(lis[i]).addClass("winner");
                } else {
                  $(lis[i]).addClass("loser");
                }
              }
            }
            setTimeout(() => { alert(`Congratulations ${this.game.winner()}`);}, 10);}
        }
      })
    }
  }

  
  makeMove($square) {
    $square.css("background-color", "white");
    $square.text(`${this.game.currentPlayer}`);
  }

  setupBoard() {
    let ul = $("<ul></ul>");
    for(let i = 0; i < 9; i++){
      let li = $("<li></li>");
      ul.append(li);
    }
    this.$el.append(ul);


  }
}

module.exports = View;
