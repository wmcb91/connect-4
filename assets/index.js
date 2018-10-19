
const app = {
  game: {
    player: 'yellow',
    board: []
  }
}

const onColumnMouseover = () => {
  console.log('in onColumnMouseover');
  let colId = $(event.target).closest('.col').attr('id').split('-')[1];
  $('.token').removeClass('red yellow')
  $(`#token-${colId}`).addClass(app.game.player);
}

const onColumnMouseout = () => {
  console.log('in onColumnMouseout');
}

const buildGameArea = () => {
  // Board has 7 columns and 6 rows
  let board = $('#board');
  let tokenHover = $('#token-hover-area');
  board.html('');
  for (let i = 0; i < 7; i++) {
    let column = $(`<div id="col-${i}" class="col"></div>`);
    for (let j = 0; j < 6; j++) {
      column.append(`<div id="${i}-${j}" class="slot"></div>`);
    }
    board.append(column);
    tokenHover.append(`<div id="token-${i}" class="token"></div>`)
  }

  $('.col').on('mouseover', onColumnMouseover);
  $('.col').on('mouseout', onColumnMouseout);
}

const startGame = (word) => {

  buildGameArea();
}

const endGame = (win) => {

}

const onPlayAgainClick = () => {

}

buildGameArea();

$('#change-player').on('click', () => {
  app.game.player = app.game.player == 'yellow' ? 'red': 'yellow';
});
