import Area from './Area';
import Snake from "./Snake";

let x = 0, y = 0;
let contador = 0;

window.onload = function () {
    let area = new Area(0, 0, 1000, 1000);
    let snake = new Snake();

    let canva = document.getElementById("mycanvas");
    let ctx = canva.getContext('2d');
    ctx.fillStyle = "#908513";

    ctx.fillRect(area.x1, area.y1, area.x2, area.y2);
    Juego();
    let direccion;
    var pat;

    function Juego() {
        pat = ctx.createPattern(canva, "repeat");
        window.setInterval(dibujar, 500);
    }

    window.onkeydown = function (e) {
        controlTeclas(e, true);
    }
    window.onkeyup = function (event) {
        controlTeclas(event, false);
    }

    function dibujar() {

        if (contador === snake.size) {
            snake.body.splice(0, 1);
            contador = snake.size - 1;
        }
        if (contador < snake.size) {
            contador++;

            if (direccion === 0) {
                y += -10;
                snake.move(x, y);
            }
            if (direccion === 1) {
                x += 10;
                snake.move(x, y);
            }
            if (direccion === 2) {
                y += 10;
                snake.move(x, y);
            }
            if (direccion === 3) {
                x += -10;
                snake.move(x, y);
            }
        }

        ctx.fillStyle = pat;
        ctx.fillRect(area.x1, area.y1, area.x2, area.y2);
        ctx.fillStyle = "rgb(255,100,0)";
        ctx.beginPath();
        area.paintTerrain(ctx, area.x2, 0.5, area.y2, 100, "rgb(36,23,23)");

        for (let i = 0; i < snake.body.length; i++) {
            ctx.fillRect(snake.body[i].x, snake.body[i].y, 10, 10);
        }


    }

    function controlTeclas(event, valorB) {
        let clave = event.keyCode;
        if (clave === 38)
            direccion = 0;
        if (clave === 39)
            direccion = 1;
        if (clave === 40)
            direccion = 2;
        if (clave === 37)
            direccion = 3;
    }
}
