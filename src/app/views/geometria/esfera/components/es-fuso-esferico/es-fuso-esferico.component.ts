import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { GeoSceneComponent } from '../../../shared/components/geo-scene/geo-scene.component';
import * as THREE from 'three';
import Fraction from '../../../shared/fixtures/fraction';
import SpriteText from 'three-spritetext';


@Component({
  selector: 'ifmath-es-fuso-esferico',
  templateUrl: './es-fuso-esferico.component.html',
  styleUrls: ['./es-fuso-esferico.component.scss']
})
export class EsFusoEsfericoComponent implements AfterViewInit {

  buttons: Object[] = [
    { title: "Cunha esférica", route: "es_cunha_esferica" },
    { title: "Fuso esférico", route: "es_fuso_esferico" },
    { title: "Calota", route: "es_calota" }
  ];

  @ViewChild(GeoSceneComponent)
  public geoScene: GeoSceneComponent;

  public radius: number = 30;
  public PI: number = Math.PI;
  public angle: number = 45;
  public radians: number = (Math.PI * this.angle)/180;
  public topFraction: number;
  public bottomFraction: number;
  public result: number;
  public isApprox: boolean;
  public errorInput = false;

  // Cores
  public red: any = 0xCC0000;
  public blue: any = 0x4683B4;
  public blueShadow: any = 0x3f76a2;
  public black: any = 0x000000;

  constructor() {
    const fraction = new Fraction(this.radius ** 2 * this.angle, 90);
    [this.topFraction, this.bottomFraction] = fraction.factoredArray();

    this.result = ((this.radius ** 2) * this.angle) / 90;
    this.result = (Number.isInteger(this.result)) ? this.result : parseFloat(this.result.toFixed(2));
    this.isApprox = (!Number.isInteger(this.result)) ? true : false;
  }

  makeElements() {

    // Esfera
    const geometrySphere = new THREE.SphereGeometry(this.radius, 90, 90);
    const materialSphere = new THREE.MeshBasicMaterial({ color: this.blue, transparent: true, opacity: 0.5 });
    const sphere = new THREE.Mesh(geometrySphere, materialSphere);

    // Fuso esférico
    const radialSegments = 192;
    const materialHemiSphere = new THREE.MeshStandardMaterial({
      emissive: this.blueShadow,
      roughness: 0.0,
      side: THREE.DoubleSide
    });

    const hemiSphereGeom = new THREE.SphereBufferGeometry( this.radius + 0.05, radialSegments, Math.round(radialSegments / 4), 0, this.radians, 0, Math.PI );
    const hemiSphere = new THREE.Mesh(hemiSphereGeom, materialHemiSphere);

    // Label do ângulo
    const labelAngle = new SpriteText(`α`, 2, 'black');
    labelAngle.position.set(-Math.cos(this.radians/2) * (this.radius + 2.5), 0, Math.sin(this.radians/2) * (this.radius + 2.5)); // posição da label

    // Criando reta OA
    const vectorOA = new THREE.Geometry();
    vectorOA.vertices.push(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(-this.radius-5, 0, 0)
    );
    const lineOA = new THREE.Line(vectorOA, new THREE.LineBasicMaterial({ color: this.black, linewidth: 2 }));

    // Criando reta OB
    const vectorOB = new THREE.Geometry();
    vectorOB.vertices.push(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(-Math.cos(this.radians) * (this.radius + 5), 0, Math.sin(this.radians) * (this.radius + 5))
    );
    const lineOB = new THREE.Line(vectorOB, new THREE.LineBasicMaterial({ color: this.black, linewidth: 2 }));

    this.geoScene.scene.add(
      sphere,
      hemiSphere,
      lineOA,
      lineOB,
      labelAngle
    );

    this.geoScene.render();
  }

  ngAfterViewInit() {
    this.geoScene.camera.position.set(100, 90, 80);
    this.geoScene.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.makeElements();
  }

  changeRadius() {
    if (this.radius >= 5 && this.radius <= 50) {
      let sizeGeoChildren = this.geoScene.scene.children.length;
      const componentsToDelete = this.geoScene.scene.children.slice(1, sizeGeoChildren);
      componentsToDelete.forEach(element => {
        this.geoScene.scene.remove(element);
      });

      const fraction = new Fraction(this.radius ** 2 * this.angle, 90);
      [this.topFraction, this.bottomFraction] = fraction.factoredArray();

      this.result = ((this.radius ** 2) * this.angle) / 90;
      this.result = (Number.isInteger(this.result)) ? this.result : parseFloat(this.result.toFixed(2));
      this.isApprox = (!Number.isInteger(this.result)) ? true : false;

      this.makeElements();
      this.errorInput = false;
    } else {
      this.errorInput = true;
    }
  }

  changeAngle() {
    if (this.angle >= 1 && this.angle <= 360) {
      this.radians = (Math.PI * this.angle)/180;
      let sizeGeoChildren = this.geoScene.scene.children.length;
      const componentsToDelete = this.geoScene.scene.children.slice(1, sizeGeoChildren);
      componentsToDelete.forEach(element => {
        this.geoScene.scene.remove(element);
      });

      const fraction = new Fraction(this.radius ** 2 * this.angle, 90);
      [this.topFraction, this.bottomFraction] = fraction.factoredArray();

      this.result = ((this.radius ** 2) * this.angle) / 90;
      this.result = (Number.isInteger(this.result)) ? this.result : parseFloat(this.result.toFixed(2));
      this.isApprox = (!Number.isInteger(this.result)) ? true : false;

      this.makeElements();

      this.errorInput = false;
    } else {
      this.errorInput = true;
    }
  }

}
