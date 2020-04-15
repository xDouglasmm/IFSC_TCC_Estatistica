
export class SquareRoot {

    private insideRoot: number;
    private outsideRoot: number;

    public constructor(a: number, b = 1) {
        this.insideRoot = a;
        this.outsideRoot = b;
    }

    public factoringRoot() {
        let d = 2;
        while (d**2 <= this.insideRoot) {
            if ((this.insideRoot % (d**2)) == 0) {
                this.insideRoot = this.insideRoot / d**2
                this.outsideRoot = this.outsideRoot * d
            } else {
                d++;
            }
        }
    }

    public getOutsideRoot() {
        return this.outsideRoot;
    }

    public getInsideRoot() {
        return this.insideRoot;
    }

    public getTuple() {
        return [this.outsideRoot, this.insideRoot];
    }

}