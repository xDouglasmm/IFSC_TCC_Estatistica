import { Component, AfterViewInit, ViewChild } from "@angular/core";
import { GeoSceneComponent } from "../../../shared/components/geo-scene/geo-scene.component";
import * as THREE from "three";
import SpriteText from "three-spritetext";

@Component({
  selector: "ifmath-es-calota",
  templateUrl: "./es-calota.component.html",
  styleUrls: ["./es-calota.component.scss"]
})
export class EsCalotaComponent implements AfterViewInit {
  buttons: Object[] = [
    { title: "Cunha esférica", route: "es_cunha_esferica" },
    { title: "Fuso esférico", route: "es_fuso_esferico" },
    { title: "Calota", route: "es_calota" }
  ];

  constructor() {
    const volResult = 1/3 * Math.PI * this.height ** 2 * (3 * this.radius - this.height);
    this.isApprox = (Number.isInteger(volResult)) ? false : true;
  }

  ngOnInit() {}

  @ViewChild(GeoSceneComponent)
  public geoScene: GeoSceneComponent;
  public radius: number = 30;
  public height: number = 5;

  public isApprox: boolean;

  public errorInput: boolean = false;

  // Cores
  public red: any = 0xcc0000;
  public blue: any = 0x4683b4;
  public blueShadow: any = 0x3f76a2;
  public black: any = 0x000000;

  makeElements() {
    const radialSegments = 92;

    // -------------------------- Esfera --------------------------------

    // Esfera
    const materialSphere = new THREE.MeshBasicMaterial({
      color: this.blue,
      transparent: true,
      opacity: 0.5,
      side: THREE.FrontSide
    });
    const geomSphere = new THREE.SphereGeometry(this.radius, 90, 90);
    const sphere = new THREE.Mesh(geomSphere, materialSphere);

    // Ponto do centro do raio da esfera
    const materialRadiusPointCenter = new THREE.MeshStandardMaterial({
      emissive: this.black,
      side: THREE.DoubleSide
    });
    const geomRadiusPointCenter = new THREE.SphereBufferGeometry(
      this.radius / 20, //radius
      radialSegments, //widthSegments
      Math.round(radialSegments / 4), // heightSegments
      0, // phiStart
      Math.PI * 2, // phiLength
      0, // thetaStart
      4 // thetaLength
    );
    const pointCenterRadius = new THREE.Mesh(
      geomRadiusPointCenter,
      materialRadiusPointCenter
    );

    // Linha do raio da esfera
    const radiusGeometry = new THREE.Geometry();
    radiusGeometry.vertices.push(
      new THREE.Vector3(0, 0, 0), // Ponto inicial
      new THREE.Vector3(
        Math.cos(Math.PI / 4) * this.radius,
        Math.sin(Math.PI / 4) * this.radius,
        0
      ) // Ponto final
    );
    const lineRadius = new THREE.Line(
      radiusGeometry,
      new THREE.LineBasicMaterial({ color: this.black, linewidth: 2 })
    );

    // Ponto final da linha do raio da esfera
    const pointFinalRadius = pointCenterRadius.clone();
    pointFinalRadius.position.set(
      Math.cos(Math.PI / 4) * this.radius,
      Math.sin(Math.PI / 4) * this.radius,
      0
    );

    // Label do raio da esfera
    // TODO: consertar o bug de transparencia do label da origem da esfera
    const labelRadiusSphere = new SpriteText(
      `R = ${this.radius}`,
      2.5,
      "black"
    );
    labelRadiusSphere.position.set(
      Math.cos(Math.PI / 3.5) * this.radius, //x
      Math.sin(Math.PI / 10) * this.radius, //y
      0 //z
    );

    // -------------------------- Calota --------------------------------

    // Calota
    const materialCalotte = new THREE.MeshStandardMaterial({
      //transparent: true,
      opacity: 0.5,
      emissive: this.blueShadow,
      side: THREE.DoubleSide
    });
    const geomCalotte = new THREE.SphereBufferGeometry(
      this.radius + 0.05, // radius
      radialSegments, // widthSegments
      Math.round(radialSegments / 4), // heightSegments
      0, // phiStart
      Math.PI * 2, // phiLength
      0, // thetaStart
      (this.height * Math.PI) / (2 * this.radius) // thetaLength
    );
    const calotte = new THREE.Mesh(geomCalotte, materialCalotte);

    // Ponto do centro do raio da calota
    const materialPointCalotte = new THREE.MeshStandardMaterial({
      emissive: this.red,
      side: THREE.DoubleSide
    });
    const pointCalotaGeom = new THREE.SphereBufferGeometry(
      this.radius / 20, // radius
      radialSegments, // widthSegments
      Math.round(radialSegments / 4), // heightSegments
      0, // phiStart
      Math.PI * 2, // phiLength
      0, // thetaStart
      4 // thetaLength
    );
    const pointCenterCalotte = new THREE.Mesh(
      pointCalotaGeom,
      materialPointCalotte
    );
    pointCenterCalotte.position.set(
      0, // x
      Math.cos( (this.height * Math.PI) / (2*this.radius) ) * this.radius, // y
      0 // z
    );

    // Linha do raio da calota
    const radiusCalotteGeometry = new THREE.Geometry();
    radiusCalotteGeometry.vertices.push(
      new THREE.Vector3( // Inicio da linha
        0, // x
        Math.cos( (this.height * Math.PI) / (2*this.radius) ) * this.radius, // y
        0), // z
      new THREE.Vector3( // final da linha
        -Math.sin( (this.height * Math.PI) / (2*this.radius) ) * this.radius, // x
        Math.cos( (this.height * Math.PI) / (2*this.radius) ) * this.radius, // y
        0) // z
    );
    const lineRadiusCalotte = new THREE.Line(
      radiusCalotteGeometry,
      new THREE.LineBasicMaterial({
        color: this.red,
        linewidth: 2
      })
    );

    // Ponto final da linha do raio da calota
    const pointFinalCalotte = pointCenterCalotte.clone();
    pointFinalCalotte.position.set(
      -Math.sin( (this.height * Math.PI) / (2*this.radius) ) * this.radius, // x
      Math.cos( (this.height * Math.PI) / (2*this.radius) ) * this.radius, // y
      0 // z
    );

    // Label do raio da calota
    // TODO: consertar o bug de transparencia do label
    const labelRadiusCalotte = new SpriteText(
      `r = ${(
        Math.sin((this.height * Math.PI) / this.radius) * this.radius
      ).toFixed(2)}`,
      2.5,
      "red"
    );
    labelRadiusCalotte.position.set(
      -(Math.sin((this.height * Math.PI) / this.radius) * this.radius) / 2, // x
      Math.cos((this.height * Math.PI) / this.radius) * this.radius - 2, // y
      0 // z
    );

    // ---------------- Adicionando na cena ----------------
    this.geoScene.scene.add(
      // Esfera
      sphere,
      pointCenterRadius,
      lineRadius,
      pointFinalRadius,
      labelRadiusSphere,
      // Calota
      calotte,
      pointCenterCalotte,
      lineRadiusCalotte,
      pointFinalCalotte,
      labelRadiusCalotte
    );

    this.geoScene.render();
  }

  ngAfterViewInit() {
    this.geoScene.camera.position.set(100, 90, 80);
    this.geoScene.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.makeElements();
  }

  changeRadius() {
    const volResult = 1/3 * Math.PI * this.height ** 2 * (3 * this.radius - this.height);
    this.isApprox = (Number.isInteger(volResult)) ? false : true;
    
    if (this.radius >= 5 && this.radius <= 50) {
      let sizeGeoChildren = this.geoScene.scene.children.length;
      const componentsToDelete = this.geoScene.scene.children.slice(
        1,
        sizeGeoChildren
      );
      componentsToDelete.forEach(element => {
        this.geoScene.scene.remove(element);
      });
      this.makeElements();
      this.errorInput = false;
    } else {
      this.errorInput = true;
    }
  }

  changeHeight() {
    const volResult = 1/3 * Math.PI * this.height ** 2 * (3 * this.radius - this.height);
    this.isApprox = (Number.isInteger(volResult)) ? false : true;
    if (this.height >= 1 && this.height <= this.radius * 2) {
      let sizeGeoChildren = this.geoScene.scene.children.length;
      const componentsToDelete = this.geoScene.scene.children.slice(
        1,
        sizeGeoChildren
      );
      componentsToDelete.forEach(element => {
        this.geoScene.scene.remove(element);
      });
      this.makeElements();
      this.errorInput = false;
    } else {
      this.errorInput = true;
    }
  }
}
