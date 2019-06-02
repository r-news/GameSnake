import Square from "./Square";

class Snake {

    constructor() {
        let face = new Square();
        let lengua = new Square();
        this.size = 10;
        this.body = new Array();
    }

    move(stepX, stepY) {
        let paso = {};
        paso.x = stepX;
        paso.y = stepY;
        this.body.push(paso);
    }
}

export default Snake;