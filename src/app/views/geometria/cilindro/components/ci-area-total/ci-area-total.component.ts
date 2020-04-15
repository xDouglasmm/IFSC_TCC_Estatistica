import { Component, AfterViewInit, ViewChild } from "@angular/core";

import * as THREE from "three";
import { GeoSceneComponent } from "../../../shared/components/geo-scene/geo-scene.component";
import SpriteText from "three-spritetext";
@Component({
  selector: "ifmath-ci-area-total",
  templateUrl: "./ci-area-total.component.html",
  styleUrls: ["./ci-area-total.component.scss"]
})
export class CiAreaTotalComponent implements AfterViewInit {
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
  public height: number = 10;
  public PI: number = Math.PI;

  public errorInput: boolean = false;

  public resultado: number =
    2 * Math.PI * this.radius * (this.radius + this.height);
  public areaTotal: number = Number.isInteger(this.resultado)
    ? this.resultado
    : parseFloat(this.resultado.toFixed(2));

  constructor() {}

  makeElements() {
    // ---------------- Cilindro aberto ----------------

    // Label do exemplo cilindro
    const labelTitle = new SpriteText(`Cilindro aberto`, 2, "black");
    labelTitle.position.set(20, this.height + 5, 0); // posição do label

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
    rectangle.position.set(20, 0, -5);

    // Base de cima do cilindro
    const geometryCircunferenceTop = new THREE.CylinderGeometry(
      this.radius,
      this.radius,
      0.15,
      90
    );
    const materialCircunferenceTop = new THREE.MeshBasicMaterial({
      color: this.blueShadow
    });
    const circunferenceTop = new THREE.Mesh(
      geometryCircunferenceTop,
      materialCircunferenceTop
    );
    circunferenceTop.position.set(20, this.height + 0.1, 0);
    circunferenceTop.rotateY(-Math.PI / 2);

    // Base de baixc do cilindro
    const geometryCircunferenceBottom = new THREE.CylinderGeometry(
      this.radius,
      this.radius,
      0.15,
      90
    );
    const materialCircunferenceBottom = new THREE.MeshBasicMaterial({
      color: this.blueShadow
    });
    const circunferenceBottom = new THREE.Mesh(
      geometryCircunferenceBottom,
      materialCircunferenceBottom
    );
    circunferenceBottom.position.set(20, -this.height + 0.1, 0);
    circunferenceBottom.rotateY(-Math.PI / 2);

    // Linha 2πR
    const geometryLine = new THREE.PlaneGeometry(
      2 * Math.PI * this.radius,
      0.1,
      32
    );
    const materialLine = new THREE.MeshBasicMaterial({
      color: this.black,
      side: THREE.DoubleSide
    });
    const line = new THREE.Mesh(geometryLine, materialLine);
    line.position.set(20, 0.05 - this.height / 2, -4.9); // posição da linha

    // Label 2πR
    const labelWidth = new SpriteText(`2π${this.radius}`, 2, "black");
    labelWidth.position.set(20, -(this.height / 2) + 2, -3.0); // posição da label da linha

    // ---------------- Exemplo da esquerda ----------------

    // Label do exemplo cilindro
    const labelTitleEx = new SpriteText(`Cilindro fechado`, 2, "black");
    labelTitleEx.position.set(-20, this.height + 5, 0); // posição do label

    // Cilindro
    const geometryCylinder = new THREE.CylinderGeometry(
      this.radius,
      this.radius,
      this.height + this.height,
      32
    );
    const materialCylinder = new THREE.MeshBasicMaterial({ color: this.blue });
    const cylinderEx = new THREE.Mesh(geometryCylinder, materialCylinder);
    cylinderEx.position.x = -20;

    // Parte de cima do exemplo do cilindro
    const circunferenceTopEx = circunferenceTop.clone();
    circunferenceTopEx.position.set(-20, this.height + 0.01, 0); // Posição da parte de cima do exemplo do cilindro
    // Parte de baixo do exemplo do cilindro
    const circunferenceBottomEx = circunferenceBottom.clone();
    circunferenceBottomEx.position.set(-20, -this.height - 0.01, 0); // Posição da parte de baixo do exemplo do cilindro

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
    cylinderRingEx.position.x = -20;
    cylinderRingEx.position.y = -(this.height / 2) + 0.05;

    // Label do anel em volta do cilindro
    const labelRingEx = labelWidth.clone();
    labelRingEx.position.set(-18, -(this.height / 2) + 3, this.radius + 2); // posição da label do anel do cilindro

    // ---------------- Adicionando na cena ----------------

    this.geoScene.scene.add(
      // Cilindro do exemplo
      labelTitleEx,
      cylinderEx,
      circunferenceTop,
      circunferenceBottom,
      cylinderRingEx,
      labelRingEx,
      // Cilindro aberto
      labelTitle,
      rectangle,
      circunferenceTopEx,
      circunferenceBottomEx,
      line,
      labelWidth
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
    if (this.radius >= 5 && this.radius <= 9) {
      this.removeElements();
      this.makeElements();
      this.areaTotal = 2 * Math.PI * this.radius * (this.radius + this.height);
      this.areaTotal = Number.isInteger(this.areaTotal)
        ? this.areaTotal
        : parseFloat(this.areaTotal.toFixed(2));
      this.geoScene.render();
      this.errorInput = false;
    } else {
      this.errorInput = true;
    }
  }

  changeHeight() {
    if (this.height >= 5 && this.height <= 18) {
      this.removeElements();
      this.makeElements();
      this.areaTotal = 2 * Math.PI * this.radius * (this.radius + this.height);
      this.areaTotal = Number.isInteger(this.areaTotal)
        ? this.areaTotal
        : parseFloat(this.areaTotal.toFixed(2));
      this.geoScene.render();
      this.errorInput = false;
    } else {
      this.errorInput = true;
    }
  }

  ngAfterViewInit() {
    this.geoScene.camera.position.set(0, 20, 50);
    this.geoScene.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.makeElements();
  }
}
