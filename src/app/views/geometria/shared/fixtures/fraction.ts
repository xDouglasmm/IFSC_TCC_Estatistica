
export default class Fraction {

    private numerator: number;
    private denominator: number;

    constructor(a: number, b: number) {
        this.numerator = a;
        this.denominator = b;
    }

    /**
     * @returns Retorna o valor decimal da fração.
     */
    public getDecimalValue(): number {
        return this.numerator / this.denominator;
    }

    /**
     * @returns Retorna um array [a, b] representando a fração a/b já fatorada.
     */
    public factoredArray(): number[] {
        let mdc = Fraction.getMDC(this.numerator, this.denominator);
        return [this.numerator / mdc, this.denominator / mdc];
    }

    /**
     * @returns Retorna o numerador fatorado a partir do MDC.
     */
    public getFactoredNumerator(): number {
        let mdc = Fraction.getMDC(this.numerator, this.denominator);
        return this.numerator / mdc;
    }

    /**
     * @returns Retorna o denominador fatorado a partir do MDC.
     */
    public getFactoredDenominator() {
        let mdc = Fraction.getMDC(this.numerator, this.denominator);
        return this.denominator / mdc;
    }

    /**
     * @returns Retorna o numerador da fração.
     */
    public getNumerator() {
        return this.numerator;
    }

    /**
     * @returns Retorna o denominador da fração.
     */
    public getDenominator() {
        return this.denominator;
    }

    public static getMDC(a: number, b: number): number {
        let ans : number;

        do {
            ans = a % b;
            a = b;
            b = ans;
        } while (ans != 0);

        return a;
    }

}