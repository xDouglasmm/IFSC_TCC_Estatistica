import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { GeoSceneComponent } from "../../../shared/components/geo-scene/geo-scene.component";
import * as THREE from "three";
import Fraction from "../../../shared/fixtures/fraction";
import SpriteText from 'three-spritetext';

@Component({
  selector: "ifmath-es-cunha-esferica",
  templateUrl: "./es-cunha-esferica.component.html",
  styleUrls: ["./es-cunha-esferica.component.scss"]
})
export class EsCunhaEsfericaComponent implements AfterViewInit {
  buttons: Object[] = [
    { title: "Cunha esférica", route: "es_cunha_esferica" },
    { title: "Fuso esférico", route: "es_fuso_esferico" },
    { title: "Calota", route: "es_calota" }
  ];
  @ViewChild(GeoSceneComponent)
  public geoScene: GeoSceneComponent;

  public PI: number = Math.PI;
  public angle: number = 45;
  public radians: number = (Math.PI * this.angle) / 180;
  public radius: number = 30;

  public topFraction: number;
  public bottomFraction: number;
  public isApprox: boolean = false;
  public result: number;

  public errorInput: boolean = false;

  // Cores
  public red: any = 0xcc0000;
  public blue: any = 0x4683b4;
  public blueShadow: any = 0x3f76a2;
  public black: any = 0x000000;

  constructor() {
    const fraction = new Fraction(this.radius ** 3 * this.angle, 270);
    [this.topFraction, this.bottomFraction] = fraction.factoredArray();

    this.result = (this.radius ** 3 * this.angle) / 270;
    this.result = Number.isInteger(this.result)
      ? this.result
      : parseFloat(this.result.toFixed(2));
    this.isApprox = !Number.isInteger(this.result) ? true : false;
  }

  makeElements() {
    // Esfera
    const geometrySphere = new THREE.SphereGeometry(this.radius, 90, 90);
    const materialSphere = new THREE.MeshBasicMaterial({
      color: this.blue,
      transparent: true,
      opacity: 0.5
    });
    const sphere = new THREE.Mesh(geometrySphere, materialSphere);

    // Fuso esférico
    const radialSegments = 192;
    const materialHemiSphere = new THREE.MeshStandardMaterial({
      emissive: this.blueShadow,
      roughness: 0.0,
      side: THREE.DoubleSide
    });

    // Label do ângulo
    const labelAngle = new SpriteText(`α`, 2, 'black');
    labelAngle.position.set(-Math.cos(this.radians / 2) * (this.radius + 2.5),
      0,
      Math.sin(this.radians / 2) * (this.radius + 2.5)); // posição da label

    // Criando reta OA
    const vectorOA = new THREE.Geometry();
    vectorOA.vertices.push(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(-this.radius - 5, 0, 0)
    );
    const lineOA = new THREE.Line(vectorOA, new THREE.LineBasicMaterial({ color: this.black, linewidth: 2 }));

    // Criando reta OB
    const vectorOB = new THREE.Geometry();
    vectorOB.vertices.push(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(-Math.cos(this.radians) * (this.radius + 5), 0, Math.sin(this.radians) * (this.radius + 5))
    );
    const lineOB = new THREE.Line(vectorOB, new THREE.LineBasicMaterial({ color: this.black, linewidth: 2 }));

    const hemiSphereGeom = new THREE.SphereBufferGeometry(
      this.radius + 0.05,
      radialSegments,
      Math.round(radialSegments / 4),
      0,
      this.radians,
      0,
      Math.PI
    );
    const hemiSphere = new THREE.Mesh(hemiSphereGeom, materialHemiSphere);

    const cylinderGeometry = new THREE.CylinderGeometry(
      this.radius,
      this.radius,
      0.01,
      32,
      1,
      false,
      0,
      Math.PI
    );
    const cylinderMaterial = new THREE.MeshBasicMaterial({ color: this.blue });
    const cylinderBack = new THREE.Mesh(cylinderGeometry, cylinderMaterial);

    cylinderBack.rotateX(-Math.PI / 2);
    cylinderBack.rotateZ((2 * Math.PI) / 2);

    const cylinderFront = new THREE.Mesh(cylinderGeometry, cylinderMaterial);

    cylinderFront.rotateX(-Math.PI / 2);
    cylinderFront.rotateZ(this.radians + Math.PI);

    this.geoScene.scene.add(
      sphere,
      hemiSphere,
      cylinderBack,
      cylinderFront,
      labelAngle,
      lineOA,
      lineOB);

    this.geoScene.render();
  }

  ngAfterViewInit() {
    this.geoScene.camera.position.set(100, 90, 80);
    this.geoScene.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.makeElements();
  }

  changeRadius() {
    if (this.radius >= 5 && this.radius <= 50) {
      this.errorInput = false;

      let sizeGeoChildren = this.geoScene.scene.children.length;
      const componentsToDelete = this.geoScene.scene.children.slice(
        1,
        sizeGeoChildren
      );
      componentsToDelete.forEach(element => {
        this.geoScene.scene.remove(element);
      });

      const fraction = new Fraction(this.radius ** 3 * this.angle, 270);
      [this.topFraction, this.bottomFraction] = fraction.factoredArray();

      this.result = (this.radius ** 3 * this.angle) / 270;
      this.result = Number.isInteger(this.result)
        ? this.result
        : parseFloat(this.result.toFixed(2));
      this.isApprox = !Number.isInteger(this.result) ? true : false;

      this.makeElements();
    } else {
      this.errorInput = true;
    }
  }

  changeAngle() {
    this.radians = (Math.PI * this.angle) / 180;
    let sizeGeoChildren = this.geoScene.scene.children.length;
    const componentsToDelete = this.geoScene.scene.children.slice(
      1,
      sizeGeoChildren
    );
    componentsToDelete.forEach(element => {
      this.geoScene.scene.remove(element);
    });

    const fraction = new Fraction(this.radius ** 3 * this.angle, 270);
    [this.topFraction, this.bottomFraction] = fraction.factoredArray();

    this.result = (this.radius ** 3 * this.angle) / 270;
    this.result = Number.isInteger(this.result)
      ? this.result
      : parseFloat(this.result.toFixed(2));
    this.isApprox = !Number.isInteger(this.result) ? true : false;

    this.makeElements();
  }
}
