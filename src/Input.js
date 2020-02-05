export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          // touche flèche gauche
          paddle.moveLeft();
          break;
        case 39:
          // touche flèche droite
          paddle.moveRight();
          break;
        case 27:
          // touche escape
          game.togglePause();
          break;
        case 32:
          // touche barre espace
          game.start();
          break;
        default:
          return true;
      }
    });
    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          if (paddle.speed < 0) paddle.stop();
          break;
        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;
        default:
          return true;
      }
    });
  }
}
