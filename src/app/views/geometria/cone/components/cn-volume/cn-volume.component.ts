import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { GeoSceneComponent } from "../../../shared/components/geo-scene/geo-scene.component";
import * as THREE from "three";
import SpriteText from "three-spritetext";

@Component({
  selector: "ifmath-cn-volume",
  templateUrl: "./cn-volume.component.html",
  styleUrls: ["./cn-volume.component.scss"]
})
export class CnVolumeComponent implements AfterViewInit {
  public radius = 20; // Valor do raio da base do cone
  public height = 40; // Valor da altura do cone
  public geratriz = Math.sqrt(
    Math.pow(this.radius, 2) + Math.pow(this.height, 2)
  );
  public equation = `g = ${this.geratriz} u.c.`;
  public isApprox = false;

  public result: number = (this.radius ** 2 * this.height) / 3;

  @ViewChild(GeoSceneComponent)
  public geoScene: GeoSceneComponent;

  public errorInput: boolean = false;

  // Cores
  public blue: any = 0x4683b4;
  public blueShadow: any = 0x3f76a2;
  public black: any = 0x000000;

  constructor() {}

  /**
   * @description Função para gerar os elementos da cena
   */
  makeElements() {
    // Criação da geometria do cone
    const geometry = new THREE.ConeGeometry(this.radius, this.height, 92);
    const material = new THREE.MeshBasicMaterial({
      color: this.blueShadow,
      transparent: true,
      opacity: 0.5
    });
    const cone = new THREE.Mesh(geometry, material);
    cone.position.copy(new THREE.Vector3(0, this.height / 2, 0));

    // Label para o ponto V
    const vLabel = new SpriteText("V", 5, "black");
    vLabel.position.y = this.height + 1;

    // Label para o ponto central da base 'O'
    const oLabel = new SpriteText("O", 5, "black");
    oLabel.position.copy(new THREE.Vector3(0, 2, 1));

    // Label para o ponto A
    const aLabel = new SpriteText("A", 5, "black");
    aLabel.position.copy(
      new THREE.Vector3(
        Math.cos(Math.PI / 4) * this.radius,
        2,
        Math.sin(Math.PI / 4) * this.radius
      )
    );

    // Label para o raio da base r
    const rLabel = new SpriteText("r", 5, "blue");
    rLabel.position.copy(
      new THREE.Vector3(
        (Math.cos(Math.PI / 4) * this.radius) / 2,
        2,
        (Math.sin(Math.PI / 4) * this.radius) / 2
      )
    );
    rLabel.material.depthTest = false;

    // Label para a altura h
    const hLabel = new SpriteText("h", 5, "red");
    hLabel.position.copy(new THREE.Vector3(1, this.height / 2, 0));
    hLabel.material.depthTest = false;

    // Reta que representa o raio da base r
    const materialRadius = new THREE.LineBasicMaterial({ color: this.black });
    const geometryRadius = new THREE.Geometry();
    geometryRadius.vertices.push(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(
        Math.cos(Math.PI / 4) * this.radius,
        0,
        Math.sin(Math.PI / 4) * this.radius
      )
    );
    const radius = new THREE.Line(geometryRadius, materialRadius);
    radius.name = "reta-raio";

    // Reta para representar a altura h
    const materialHeight = new THREE.LineBasicMaterial({ color: this.black });
    const geometryHeight = new THREE.Geometry();
    geometryHeight.vertices.push(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, this.height, 0)
    );
    const height = new THREE.Line(geometryHeight, materialHeight);
    height.name = "reta-altura";
    height.material.depthTest = false;

    // Geometria para a base do cone
    const baseGeometry = new THREE.CylinderGeometry(
      this.radius,
      this.radius,
      -0.01,
      92
    );
    const baseMaterial = new THREE.MeshBasicMaterial({
      color: this.blueShadow
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);

    this.geoScene.scene.add(
      cone,
      vLabel,
      oLabel,
      aLabel,
      rLabel,
      radius,
      base,
      height,
      hLabel
    );
    this.geoScene.render();
  }

  /**
   * @description Função para alterar os elementos e as fórmulas resultantes confome
   * o usuário altera os valores de h (altura) ou r (raio da base) do cone.
   */
  changeCone() {
    if (
      (this.height >= 5 && this.height <= 50) &&
      (this.radius >= 5 && this.radius <= 50)
    ) {
      this.errorInput = false;
      this.removeElements();
      this.makeElements();
      // Valor da geratriz utilizado
      this.geratriz = Math.sqrt(
        Math.pow(this.radius, 2) + Math.pow(this.height, 2)
      );
      // Equação da geratriz
      this.equation = `g = ${this.geratriz} u.c.`;
      this.calculateResult();
    } else {
      this.errorInput = true;
    }
  }

  removeElements() {
    // Remove todos os elementos da cena
    const sizeGeoChildren = this.geoScene.scene.children.length;
    const componentsToDelete = this.geoScene.scene.children.slice(
      1,
      sizeGeoChildren
    );

    componentsToDelete.forEach(element => {
      this.geoScene.scene.remove(element);
    });
  }

  calculateResult() {
    // Calcula o resultado
    this.result = (this.radius ** 2 * this.height) / 3;
    // Verifica se há necessidade de arredondamento
    this.result = Number.isInteger(this.result)
      ? this.result
      : parseFloat(this.result.toFixed(2));
    // Verifica se é um valor aproximado
    this.isApprox = !Number.isInteger(this.result) ? true : false;
  }

  ngAfterViewInit() {
    // Altera a posição da câmera
    this.geoScene.camera.position.set(100, 90, 80);
    this.geoScene.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.makeElements();
    // Gera o valor para a geratriz
    this.geratriz = Math.sqrt(
      Math.pow(this.radius, 2) + Math.pow(this.height, 2)
    );
    // Armazena em uma equação Latex
    this.equation = `g = ${this.geratriz} u.c.`;

    // Calcula os resultados iniciais
    this.calculateResult();
    this.geoScene.render();
  }
}
