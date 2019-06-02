import {Point} from './Point';

window.onload = function () {

    class Line {

        drawline(g, x0, y0, x1, y1, value) {
            var dx, dy, de, dne, d, x, y;
            var stepX = 0;
            var stepY = 0;
            x = x0;
            y = y0;
            let dxx;
            dx = x1 - x0;
            dy = y1 - y0;
            dxx = dx;
            if (dx === 0)
                dxx = 1;
            var m = dy / dxx;
            if (dx >= 0 && dy >= 0) {
                stepX = 1;
                stepY = 1;
                if (m < 1) {
                    d = 2 * dy - dx;
                    de = 2 * dy;
                    dne = 2 * (dy - dx);
                    this.iteracionEnX(g, x1, x, y, d, de, dne, stepY, stepX, value);
                } else {
                    d = dy + (2 * (-dx));
                    de = 2 * (-dx);
                    dne = 2 * (dy - dx);
                    de = -de;
                    dne = -dne;
                    this.iteracionEnY(g, y1, x, y, d, de, dne, stepY, stepX, value);
                }
            } else {
                if (dx >= 0 && dy < 0) {
                    stepX = 1;
                    stepY = -1;
                    if (m > -1) {
                        d = 2 * dy + dx;
                        de = 2 * (dy);
                        dne = 2 * (dy + dx);
                        de = -de;
                        dne = -dne;
                        this.iteracionEnX(g, x1, x, y, d, de, dne, stepY, stepX, value);
                    } else {
                        d = dy + 2 * (dx);
                        de = 2 * (dx);
                        dne = 2 * (dx + dy);
                        this.iteracionEnY(g, y1, x, y, d, de, dne, stepY, stepX, value);
                    }
                } else {
                    if (dx < 0 && dy <= 0) {
                        stepX = -1;
                        stepY = -1;
                        if (m < 1) {
                            d = -2 * (dy) + dx;
                            dne = 2 * (-dy + dx);
                            de = 2 * (-dy);
                            this.iteracionEnX(g, x1, x, y, d, de, dne, stepY, stepX, value);
                        } else {
                            d = (-dy) + 2 * dx;
                            dne = 2 * (-dy + dx);
                            de = 2 * dx;
                            dne = -dne;
                            de = -de;
                            this.iteracionEnY(g, y1, x, y, d, de, dne, stepY, stepX, value);
                        }
                    } else {
                        if (dx < 0 && dy > 0) {
                            stepX = -1;
                            stepY = 1;

                            if (m > -1) {
                                d = (-2 * dy) - dx;
                                de = 2 * (-dy);
                                dne = 2 * (-dy - dx);
                                dne = -dne;
                                de = -de;
                                this.iteracionEnX(g, x1, x, y, d, de, dne, stepY, stepX, value);
                            } else {
                                d = (-2 * dx) - dy;
                                dne = 2 * (-dy - dx);
                                de = 2 * (-dx);
                                this.iteracionEnY(g, y1, x, y, d, de, dne, stepY, stepX, value);
                            }
                        }

                    }
                }

            }
        }

        iteracionEnX(g, x1, x, y, d, de, dne, stepY, stepX, value) {
            let point = new Point();
            point.putPixel(g, x, y, value);
            while (x !== x1) {
                if (d <= 0) {
                    d = d + de;
                    x = x + stepX;
                } else {
                    d = d + dne;
                    x = x + stepX;
                    y = y + stepY;
                }
                Point.putPixel(g, x, y, value);
            }
        }

        iteracionEnY(g, y1, x, y, d, de, dne, stepY, stepX, value) {
            let point = new Point();
            point.putPixel(g, x, y, value);
            while (y !== y1) {
                if (d <= 0) {
                    d = d + de;
                    y = y + stepY;
                } else {
                    d = d + dne;
                    x = x + stepX;
                    y = y + stepY;
                }
                point.putPixel(g, x, y, value);
            }
        }
    }

    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext("2d");
    let point = new Line();
    point.drawline(ctx, 10, 10, 100, 100, 'red');
    point.drawline(ctx, 100, 100, 10, 10, 'blue');
    point.drawline(ctx, 100, 10, 10, 100, 'black');
}

