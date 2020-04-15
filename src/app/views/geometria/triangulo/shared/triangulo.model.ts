
export class Triangulo {
    public perimetro: number;

    public calcularPerimetro(ladoA: number, ladoB: number, ladoC: number): void {
        this.perimetro = ladoA + ladoB + ladoC;
    }
}
