'use strict';

class Point {
    constructor() {

    }

    putPixel(ctx, x, y, value) {
        ctx.fillStyle = value;
        ctx.fillRect(x, y, 1, 1);
    }
}
module.exports.Point = Point;