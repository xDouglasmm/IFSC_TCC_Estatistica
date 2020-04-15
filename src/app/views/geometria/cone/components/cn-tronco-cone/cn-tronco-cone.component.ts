import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { GeoSceneComponent } from "../../../shared/components/geo-scene/geo-scene.component";
import * as THREE from "three";
import SpriteText from "three-spritetext";
import Fraction from "../../../shared/fixtures/fraction";
import { SquareRoot } from "../../../shared/fixtures/squareRoot";

@Component({
  selector: "ifmath-cn-tronco-cone",
  templateUrl: "./cn-tronco-cone.component.html",
  styleUrls: ["./cn-tronco-cone.component.scss"]
})
export class CnTroncoConeComponent implements AfterViewInit {
  @ViewChild(GeoSceneComponent)
  public geoScene: GeoSceneComponent;

  public errorInput: boolean = false;

  public radiusLarger: number = 30;
  public radiusSmaller: number = 10;
  public height: number = 30;
  public result: number =
    ((Math.PI * this.height) / 3) *
    (this.radiusLarger ** 2 +
      this.radiusLarger * this.radiusSmaller +
      this.radiusSmaller ** 2);
  public geratriz: number = Math.sqrt(
    Math.pow(this.radiusLarger, 2) + Math.pow(this.height, 2)
  );
  public resultAreaLateral: number;
  public isApprox: boolean;
  public insideRoot: number;
  public outsideRoot: number;
  public areaLateralApprox = true;
  public topFraction: number;
  public bottomFraction: number;
  public topFractionResult: number;
  public bottomFractionResult: number;
  public volumeApprox = true;

  //public equacao: string = `V = \\pi \\cdot \\color{red}{${this.radius}}^2 \\cdot \\color{red}{${this.height}}`;
  //public resultado: string = `V = ${3.14 * (this.radius ^ 2) * this.height}`;

  // Cores das linhas
  public red: any = 0xcc0000;
  public blue: any = 0x4683b4;
  public blueShadow: any = 0x3f76a2;
  public black: any = 0x000000;

  constructor() {
    const squareRoot = new SquareRoot(
      this.height ** 2 + this.radiusLarger ** 2,
      1
    );
    squareRoot.factoringRoot();
    [this.outsideRoot, this.insideRoot] = squareRoot.getTuple();
    const fraction = new Fraction(this.height, 3);
    [this.topFraction, this.bottomFraction] = fraction.factoredArray();
    const partialResult =
      this.height *
      (this.radiusLarger ** 2 +
        this.radiusLarger * this.radiusSmaller +
        this.radiusSmaller ** 2);
    const resultFraction = new Fraction(partialResult, 3);
    [
      this.topFractionResult,
      this.bottomFractionResult
    ] = resultFraction.factoredArray();

    this.calculateResultado();
    this.updateGeratriz();
    this.calculateResultAreaLateral();
  }

  public makeElements() {
    //Tampa de cima
    const geometryCircunference = new THREE.CircleGeometry(
      this.radiusSmaller,
      92
    );
    const materialCircunference = new THREE.MeshBasicMaterial({
      color: this.blueShadow,
      transparent: true,
      opacity: 0.5
    });

    const circunference = new THREE.Mesh(
      geometryCircunference,
      materialCircunference
    );
    circunference.position.set(0, this.height / 2 + 0.2, 0);
    circunference.rotateX(-Math.PI / 2);

    this.geoScene.scene.add(circunference);

    // Cone
    let material = new THREE.MeshBasicMaterial({
      color: this.blue,
      transparent: true,
      opacity: 0.5
    });
    let cylinderGeometry = new THREE.CylinderGeometry(
      this.radiusSmaller,
      this.radiusLarger,
      this.height,
      32
    );
    const cylinder = new THREE.Mesh(cylinderGeometry, material);
    cylinder.position.y = this.height / 2;
    this.geoScene.scene.add(cylinder);

    // Adicionando ponto central do círculo
    const centerPoint = new THREE.Mesh(
      new THREE.CircleGeometry(1, 30),
      new THREE.MeshBasicMaterial({
        color: this.black
      })
    );
    centerPoint.position.y = 0.1;
    centerPoint.rotateX(-Math.PI / 2);

    // Adicionando representação da medida do raio Menor
    const radiusGeometrySmaller = new THREE.Geometry();
    radiusGeometrySmaller.vertices.push(
      new THREE.Vector3(0, this.height + 0.5, 0),
      new THREE.Vector3(
        Math.cos(Math.PI / 4) * this.radiusSmaller,
        this.height + 0.5,
        Math.sin(Math.PI / 4) * this.radiusSmaller
      )
    );
    const lineSmaller = new THREE.Line(
      radiusGeometrySmaller,
      new THREE.LineBasicMaterial({
        color: this.red,
        linewidth: 2
      })
    );

    // Adicionando representação da medida do raio Maior
    const radiusGeometryLarger = new THREE.Geometry();
    radiusGeometryLarger.vertices.push(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(
        Math.cos(Math.PI / 4) * this.radiusLarger,
        0,
        Math.sin(Math.PI / 4) * this.radiusLarger
      )
    );
    const lineLarger = new THREE.Line(
      radiusGeometryLarger,
      new THREE.LineBasicMaterial({
        color: "limegreen",
        linewidth: 2
      })
    );

    // Adicionando label do raio menor da circunferência
    const radiusLabelSmaller = new SpriteText("r1", 5, "red");
    radiusLabelSmaller.position.x =
      (Math.cos(Math.PI / 4) * this.radiusSmaller) / 2;
    radiusLabelSmaller.position.y = this.height + 3;
    radiusLabelSmaller.position.z =
      (Math.sin(Math.PI / 4) * this.radiusSmaller) / 2;

    // Adicionando label do raio maior da circunferência
    const radiusLabelLarger = new SpriteText("r2", 5, "limegreen");
    radiusLabelLarger.position.x =
      (Math.cos(Math.PI / 4) * this.radiusLarger) / 2;
    radiusLabelLarger.position.y = 2;
    radiusLabelLarger.position.z =
      (Math.sin(Math.PI / 4) * this.radiusLarger) / 2;
      radiusLabelLarger.material.depthTest = false;

    // Gerando a base superior do cone
    const cylinderBaseTopGeometry = new THREE.CylinderGeometry(
      this.radiusSmaller,
      this.radiusSmaller,
      0.01,
      92
    );
    const cylinderBaseTopMaterial = new THREE.MeshBasicMaterial({
      color: this.blueShadow
    });
    const cylinderBaseTop = new THREE.Mesh(
      cylinderBaseTopGeometry,
      cylinderBaseTopMaterial
    );
    cylinderBaseTop.position.set(0, this.height, 0);

    // Gerando a base inferior do cone
    const cylinderBaseBottomGeometry = new THREE.CylinderGeometry(
      this.radiusLarger,
      this.radiusLarger,
      -0.01,
      92
    );
    const cylinderBaseBottomMaterial = new THREE.MeshBasicMaterial({
      color: this.blueShadow
    });
    const cylinderBaseBottom = new THREE.Mesh(
      cylinderBaseBottomGeometry,
      cylinderBaseBottomMaterial
    );
    cylinderBaseBottom.position.set(0, 0, 0);

    this.geoScene.scene.add(
      lineSmaller,
      lineLarger,
      centerPoint,
      radiusLabelLarger,
      radiusLabelSmaller,
      cylinderBaseTop,
      cylinderBaseBottom
    );

    this.geoScene.render();
  }

  ngAfterViewInit() {
    this.geoScene.camera.position.set(100, 90, 80);
    this.geoScene.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.makeElements();
    this.geratriz = Math.sqrt(
      Math.pow(this.radiusLarger, 2) + Math.pow(this.height, 2)
    );
    this.geratriz = Number.isInteger(this.geratriz)
      ? this.geratriz
      : parseFloat(this.geratriz.toFixed(2));
  }

  public alterCylinder() {
    const squareRoot = new SquareRoot(
      this.height ** 2 + this.radiusLarger ** 2,
      1
    );
    squareRoot.factoringRoot();
    [this.outsideRoot, this.insideRoot] = squareRoot.getTuple();

    const fraction = new Fraction(this.height, 3);
    [this.topFraction, this.bottomFraction] = fraction.factoredArray();

    const partialResult =
      this.height *
      (this.radiusLarger ** 2 +
        this.radiusLarger * this.radiusSmaller +
        this.radiusSmaller ** 2);
    const resultFraction = new Fraction(partialResult, 3);
    [
      this.topFractionResult,
      this.bottomFractionResult
    ] = resultFraction.factoredArray();

    // Remove todos os elementos da cena
    let sizeGeoChildren = this.geoScene.scene.children.length;
    const componentsToDelete = this.geoScene.scene.children.slice(
      1,
      sizeGeoChildren
    );
    componentsToDelete.forEach(element => {
      this.geoScene.scene.remove(element);
    });
    // Gera os elementos da cena com os novos valores
    this.makeElements();
    this.calculateResultado();
    this.updateGeratriz();
    this.calculateResultAreaLateral();
  }

  changeRadiusSmaller() {
    if (this.radiusSmaller >= 3 && this.radiusSmaller <= 15) {
      this.alterCylinder();
      this.errorInput = false;
    } else {
      this.errorInput = true;
    }
  }

  changeRadiusLarger() {
    if (this.radiusLarger >= 16 && this.radiusLarger <= 50) {
      this.alterCylinder();
      this.errorInput = false;
    } else {
      this.errorInput = true;
    }
  }

  changeHeight() {
    if (this.height >= 10 && this.height <= 50) {
      this.alterCylinder();
      this.errorInput = false;
    } else {
      this.errorInput = true;
    }
  }

  calculateResultado() {
    this.result =
      (this.height / 3) *
      (this.radiusLarger ** 2 +
        this.radiusLarger * this.radiusSmaller +
        this.radiusSmaller ** 2);
    this.result = Number.isInteger(this.result)
      ? this.result
      : parseFloat(this.result.toFixed(2));
    this.volumeApprox = !Number.isInteger(this.result) 
    ? true 
    : false;
  }

  updateGeratriz() {
    this.geratriz = Math.sqrt(
      Math.pow(this.radiusLarger, 2) + Math.pow(this.height, 2)
    );
    this.geratriz = Number.isInteger(this.geratriz)
      ? this.geratriz
      : parseFloat(this.geratriz.toFixed(2));
      this.isApprox = !Number.isInteger(this.geratriz)
      ? true
      : false;
  }

  calculateResultAreaLateral() {
    this.resultAreaLateral =
      (this.radiusLarger + this.radiusSmaller) * this.geratriz;
    this.resultAreaLateral = Number.isInteger(this.resultAreaLateral)
      ? this.resultAreaLateral
      : parseFloat(this.resultAreaLateral.toFixed(2));
    this.areaLateralApprox = !Number.isInteger(this.resultAreaLateral)
      ? true
      : false;
  }

  changeEqRe() {
    // this.equacao = `V = \\pi \\cdot \\color{red}{${this.radius}}^2 \\cdot \\color{red}{${this.height}}`;
    // this.resultado = `V = ${(Math.PI * (this.radius ^ 2) * this.height).toFixed(2)}`;
  }
}
