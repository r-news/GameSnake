import Point from './Point';

class Area {
    constructor(x, y, width, height) {
        this.area = new Array();
        this.n = 50;
        this.x1 = x;
        this.x2 = width;
        this.y1 = y;
        this.y2 = height;
        this.matrix=new Array(this.x2/(width / this.n));
        //[][this.y2/(height / this.n)];
        console.log('ChEVEre '+this.matrix);

        var returnedArray = [];
        for(var i=0; i<width; i++) {
            returnedArray[i] = new Array(width/this.n);
        } 

        this.area[0] = new Point(this.x1, this.y1);
        this.area[1] = new Point(this.x2, this.y1);
        this.area[2] = new Point(this.x2, this.y2);
        this.area[3] = new Point(this.x1, this.y2);


    }

    drawObjects(ctx){
ctx.fillStyle = "#908513";

    ctx.fillRect(this.x1, this.y1, this.x2, this.y2);
    }

    paintTerrain(ctx, x2, y2, color) {
        const fill=1.0;
        ctx.fillStyle = color;
        for (let x = 0; x < y2; x = x + y2 / this.n) {
            ctx.fillRect(0, x, x2, fill);
        }

        for (let x = 0; x < x2; x = x + x2 / this.n) {
            ctx.fillRect(x, 0, fill, x2);
        }
    }

}

export default Area;

