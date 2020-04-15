
import * as THREE from 'three';
export class Ponto {
    public label: string;
    geometry = new THREE.CircleGeometry(0.10, 10);
    material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    circle: THREE.Mesh;
    texto: THREE.Mesh;

    constructor(x: number, y:number, label: string){
        this.circle =  new THREE.Mesh(this.geometry, this.material);
        this.circle.position.x = x;
        this.circle.position.y = y;
        this.label = label;
        this.texto = new THREE.Mesh();
        this.texto.position.x = x+0.25;
        this.texto.position.y = y+0.25;
    }
    public getLabel(): string{
        return this.label;
    }
    public setCordinates(x: number, y:number):void{
        this.circle.position.x = x;
        this.circle.position.y = y;
        this.texto.position.x = x+0.25;
        this.texto.position.y = y+0.25;
    }
    public setLabel(label: string):void{
        this.label = label;
    }
    public setTexto(texto: THREE.Mesh): void{
        this.texto= texto;
    }
    public getTexto(): THREE.Mesh{
        return this.texto;
    }
    public getMesh():THREE.Mesh{
        return this.circle;
    }
}