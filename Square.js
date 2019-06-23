class Square {

    constructor(x, y, ancho, altura) {
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.altura = altura;
    }

    draw(ctx, x, y, ancho, altura, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x , y , ancho, altura);
    }
}

export default Square;