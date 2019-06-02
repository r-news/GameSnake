import Point from './Point';

class Area {
    constructor(x, y, width, height) {
        this.area = new Array();
        this.n = 100;
        this.x1 = x;
        this.x2 = width;
        this.y1 = y;
        this.y2 = height;
        this.terrain = new Array(width / this.n, height / this.n);


        var returnedArray = [];
        for(var i=0; i<width; i++) {
            returnedArray[i] = new Array(width/this.n);
        }
        console.log('SISI ',returnedArray,returnedArray);

        this.area[0] = new Point(this.x1, this.y1);
        this.area[1] = new Point(this.x2, this.y1);
        this.area[2] = new Point(this.x2, this.y2);
        this.area[3] = new Point(this.x1, this.y2);
    }

    paintTerrain(ctx, x2, fill, y2, sub, color) {
        ctx.fillStyle = color;
        for (let x = 0; x < y2; x = x + y2 / sub) {
            ctx.fillRect(0, x, x2, fill);
        }

        for (let x = 0; x < x2; x = x + x2 / sub) {
            ctx.fillRect(x, 0, fill, 1000);
        }
    }

}

export default Area;

