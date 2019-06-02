var app = angular.module("myApp", []);
app.directive("drawOnCanva", function () {
    return {
        restrict: 'A',
        link: function link($scope, $element, $attr) {
            var canva, int, nuevo = 0;
            canvas = $element[0];
            ctx = canvas.getContext("2d");
            ctx.fillStyle = "#11e01c";
            var vertx=$element[0].getBoundingClientRect().width;
            var verty=    $element[0].getBoundingClientRect().height;
            ctx.fillRect(0, 0, vertx, verty);

            x = movimiento = y = 0;
            dir = -1;
            camino = new Array();
            area = new Array();
            area[0] = new Punto(0, 0);
            area[1] = new Punto(vertx, 0);
            area[2] = new Punto(vertx, verty);
            area[3] = new Punto(0, verty);

            direccion = new Array(false, false, false, false);


            window.onkeydown = function (e) {
                dibujar();
                controlTeclas(e, true);
            };
            var pat = ctx.createPattern(canvas, "repeat");

            window.onkeyup = function (event) {
                controlTeclas(event, false);
            }

            function Punto(x, y) {
                this.x = x;
                this.y = y;
            }

            function dibujar() {
                var i, j;
                console.log('HRHR');
                movimiento = 0;
                od = dir;
                for (i in direccion) {
                    if (direccion[i]) {
                        dir = Number(i);
                        movimiento = 1;
                    }
                }
                if (movimiento) {
                    if (!revisarLinea(area, x, y)) {
                        if ((od + 1) % 4 == dir || od == (dir + 1) % 4) {
                            camino.push(new Punto(x, y))
                        }
                    }
                }

                if (movimiento == 1) {
                    ox = x;
                    oy = y;
                    if (dir == 0)
                        y += -4;
                    if (dir == 1)
                        x += 4;
                    if (dir == 2)
                        y += 4;
                    if (dir == 3)
                        x += -4;

                }
                ctx.fillStyle = pat;
                ctx.strokeStyle = "red";
                dibujarArea(area);

                ctx.beginPath()			//linea trazada
                for (cam in camino) {
                    ctx.lineTo(camino[cam].x, camino[cam].y)
                }
                ctx.lineTo(x, y)
                ctx.stroke()

                ctx.fillStyle = "rgb(0,0,0)";
                ctx.beginPath();
                ctx.fillRect(x, y, 10, 10);
                ctx.closePath();
                ctx.fill();
            }

            function controlTeclas(event, valorB) {//fechas del teclado
                var clave = event.keyCode;
                if (clave == 38)
                    direccion[0] = valorB;
                if (clave == 39)
                    direccion[1] = valorB;
                if (clave == 40)
                    direccion[2] = valorB;
                if (clave == 37)
                    direccion[3] = valorB;
            }

            function dibujarArea(area) {
                ctx.beginPath();
                for (i in area) {
                    ctx.lineTo(area[i].x, area[i].y);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }

            function revisarLinea(area, x, y) {
                var i;
                ax = area[area.length - 1].x;
                ay = area[area.length - 1].y;
                for (i in area) {
                    bx = area[i].x;
                    by = area[i].y;
                    ax = bx;
                    ay = by;
                }
                return false;
            }
        }
    }

});

