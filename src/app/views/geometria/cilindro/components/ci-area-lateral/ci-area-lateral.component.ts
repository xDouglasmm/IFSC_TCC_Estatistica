import { HttpErrorResponse } from "@angular/common/http";
import { Component, AfterViewInit, ViewChild } from "@angular/core";

import * as THREE from "three";
import { GeoSceneComponent } from "../../../shared/components/geo-scene/geo-scene.component";
import SpriteText from "three-spritetext";
@Component({
  selector: "ifmath-ci-area-lateral",
  templateUrl: "./ci-area-lateral.component.html",
  styleUrls: ["./ci-area-lateral.component.scss"]
})
export class CiAreaLateralComponent implements AfterViewInit {
  buttons: Object[] = [
    { title: "Área das bases", route: "ci_area_bases" },
    { title: "Área lateral", route: "ci_area_lateral" },
    { title: "Área total", route: "ci_area_total" }
  ];

  @ViewChild(GeoSceneComponent)
  public geoScene: GeoSceneComponent;

  // Cores das linhas
  public red: any = 0xcc0000;
  public blue: any = 0x4683b4;
  public blueShadow: any = 0x3f76a2;
  public black: any = 0x000000;

  // Raio da base
  public radius: number = 5;
  public height: number = 7;
  public PI: number = Math.PI;

  public errorInput: boolean = false;

  // Variável de controle
  public deslocXRectangle: number = 20;
  public deslocXExample: number = -(this.deslocXRectangle + 10);

  constructor() {}

  makeElements() {
    // ---------------- Lateral do cilindro ----------------

    // Label do exemplo cilindro
    const labelTitle = new SpriteText(`Lateral do cilindro aberta`, 2, "black");
    labelTitle.position.set(this.deslocXRectangle, this.height + 5, 0); // posição do label

    // Retângulo
    const geometryRectangle = new THREE.PlaneGeometry(
      2 * Math.PI * this.radius,
      this.height + this.height,
      32
    );
    const materialrectangle = new THREE.MeshBasicMaterial({
      color: this.blue,
      side: THREE.DoubleSide
    });
    const rectangle = new THREE.Mesh(geometryRectangle, materialrectangle);
    rectangle.position.set(this.deslocXRectangle, 0, 0);

    // Linha 2πR (largura do retângulo)
    const geometryLineWidth = new THREE.PlaneGeometry(
      2 * Math.PI * this.radius,
      0.1,
      32
    );
    const materialLineWidth = new THREE.MeshBasicMaterial({
      color: this.black,
      side: THREE.DoubleSide
    });
    const lineWidth = new THREE.Mesh(geometryLineWidth, materialLineWidth);
    lineWidth.position.set(this.deslocXRectangle, -this.height - 2, 0); // posição da linha

    // Linha vertical da esquerda |---------
    const geometryLineWidthLeft = new THREE.PlaneGeometry(0.1, 3, 32);
    const materialLineWidthLeft = new THREE.MeshBasicMaterial({
      color: this.black,
      side: THREE.DoubleSide
    });
    const lineWidthLeft = new THREE.Mesh(
      geometryLineWidthLeft,
      materialLineWidthLeft
    );
    lineWidthLeft.position.set(
      -(Math.PI * this.radius) + this.deslocXRectangle,
      -this.height - 2,
      0
    ); // posição da linha

    // Linha vertical da direita ---------|
    const lineWidthRight = lineWidthLeft.clone();
    lineWidthRight.position.set(
      Math.PI * this.radius + this.deslocXRectangle,
      -this.height - 2,
      0
    ); // posição da linha

    // Label 2πR
    const labelWidth = new SpriteText(`2π${this.radius}`, 2, "black");
    labelWidth.position.set(this.deslocXRectangle, -this.height - 2 + 1, 0); // posição da label da linha

    // Linha horizontal (altura do retângulo)
    const geometryLineHeight = new THREE.PlaneGeometry(
      this.height + this.height,
      0.1,
      32
    );
    const materialLineHeight = new THREE.MeshBasicMaterial({
      color: this.black,
      side: THREE.DoubleSide
    });
    const lineHeight = new THREE.Mesh(geometryLineHeight, materialLineHeight);
    lineHeight.position.set(
      Math.PI * this.radius + 2 + this.deslocXRectangle,
      0,
      0
    ); // posição da label da linha
    lineHeight.rotateZ(-Math.PI / 2);

    // Linha horizontal (topo da linha da orientação da altura)
    const lineHeightTop = lineWidthRight.clone();
    lineHeightTop.position.set(
      Math.PI * this.radius + 2 + this.deslocXRectangle,
      this.height,
      0
    ); // posição da label da linha
    lineHeightTop.rotateZ(-Math.PI / 2);

    // Linha horizontal (pé da linha da orientação da altura)
    const lineHeightBottom = lineWidthRight.clone();
    lineHeightBottom.position.set(
      Math.PI * this.radius + 2 + this.deslocXRectangle,
      -this.height,
      0
    ); // posição da label da linha
    lineHeightBottom.rotateZ(-Math.PI / 2);

    // Label h (altura)
    const labelHeight = new SpriteText(`h = ${this.height}`, 2, "black");
    labelHeight.position.set(
      Math.PI * this.radius + 5 + this.deslocXRectangle,
      1.3,
      0
    ); // posição da label da linha

    // ---------------- Exemplo da esquerda ----------------

    // Label do exemplo cilindro
    const labelTitleEx = new SpriteText(`Cilindro fechado`, 2, "black");
    labelTitleEx.position.set(this.deslocXExample, this.height + 5, 0); // posição do label

    // Cilindro
    const geometryCylinder = new THREE.CylinderGeometry(
      this.radius,
      this.radius,
      this.height + this.height,
      32
    );
    const materialCylinder = new THREE.MeshBasicMaterial({ color: this.blue });
    const cylinderEx = new THREE.Mesh(geometryCylinder, materialCylinder);
    cylinderEx.position.x = this.deslocXExample;

    // Parte de cima do exemplo do cilindro
    const geometryCircunferenceTop = new THREE.CylinderGeometry(
      this.radius,
      this.radius,
      0.15,
      90
    );
    const materialCircunferenceTop = new THREE.MeshBasicMaterial({
      color: this.blueShadow
    });
    const circunferenceTopEx = new THREE.Mesh(
      geometryCircunferenceTop,
      materialCircunferenceTop
    );
    circunferenceTopEx.position.set(this.deslocXExample, this.height + 0.01, 0); // Posição da parte de cima do exemplo do cilindro

    // Parte de baixo do exemplo do cilindro
    const circunferenceBottomEx = circunferenceTopEx.clone();
    circunferenceBottomEx.position.set(
      this.deslocXExample,
      -this.height - 0.01,
      0
    ); // Posição da parte de baixo do exemplo do cilindro

    // Anel em volta do cilindro de exemplo
    const geometryCylinderRingEx = new THREE.CylinderGeometry(
      this.radius + 0.2,
      2,
      0,
      32
    );
    const materialCylinderRingEx = new THREE.MeshBasicMaterial({
      color: this.black
    });
    const cylinderRingEx = new THREE.Mesh(
      geometryCylinderRingEx,
      materialCylinderRingEx
    );
    cylinderRingEx.position.x = this.deslocXExample;
    cylinderRingEx.position.y = -(this.height / 2) + 0.05;

    // Label do anel em volta do cilindro
    const labelRingEx = labelWidth.clone();
    labelRingEx.position.set(
      this.deslocXExample + 2,
      -(this.height / 2) + 3,
      this.radius + 2
    ); // posição da label do anel do cilindro

    // ---------------- Adicionando na cena ----------------

    this.geoScene.scene.add(
      // --- Cilindro do exemplo ---
      labelTitleEx,
      cylinderEx,
      circunferenceTopEx,
      circunferenceBottomEx,
      cylinderRingEx,
      labelRingEx,
      // --- Cilindro aberto ---
      labelTitle,
      rectangle,
      // Largura
      lineWidth,
      lineWidthLeft,
      lineWidthRight,
      labelWidth,
      // Altura
      lineHeight,
      lineHeightTop,
      lineHeightBottom,
      labelHeight
    );
    this.geoScene.render();
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

  changeRadius() {
    if (this.radius >= 3 && this.radius <= 9) {
      this.removeElements();
      this.makeElements();
      this.geoScene.render();
      this.errorInput = false;
    } else {
      this.errorInput = true;
    }
  }

  changeHeight() {
    if (this.height >= 3 && this.height <= 14) {
      this.removeElements();
      this.makeElements();
      this.geoScene.render();
      this.errorInput = false;
    } else {
      this.errorInput = true;
    }
  }

  ngAfterViewInit() {
    this.geoScene.camera.position.set(0, 32, 62);
    this.geoScene.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.makeElements();
  }
}
