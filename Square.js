class Square {

    constructor(x, y, ancho, altura) {
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.altura = altura;
    }

    draw(ctx, x, y, ancho, altura, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x + 2.5, y + 2.5, ancho, altura);
    }
}

export default Square;