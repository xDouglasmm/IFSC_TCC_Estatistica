import { Component, AfterViewInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GeoSceneComponent } from '../../../shared/components/geo-scene/geo-scene.component';
import SpriteText from 'three-spritetext';

@Component({
  selector: 'ifmath-es-area',
  templateUrl: './es-area.component.html',
  styleUrls: ['./es-area.component.scss']
})
export class EsAreaComponent implements AfterViewInit {

  buttons: Object[] = [
    { title: "Área da esfera", route: "es_area"},
    { title: "Volume da esfera", route: "es_volume" }
  ];

  @ViewChild(GeoSceneComponent)
  public geoScene: GeoSceneComponent;

  public radius: number = 40;
  public PI: number = Math.PI;
  public errorInput: boolean = false;

  // Cores das linhas
  public red: any = 0xCC0000;
  public blue: any = 0x4683B4;
  public blueShadow: any = 0x3f76a2;
  public black: any = 0x000000;

  constructor() { }

  ngAfterViewInit() {
    this.geoScene.camera.position.set(100, 90, 80);
    this.geoScene.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.makeElements();
  }

  makeElements() {
    // ---------------- Esfera ----------------

    // Esfera
    const geometrySphere = new THREE.SphereGeometry(this.radius, 90, 90);
    const materialSphere = new THREE.MeshBasicMaterial({ color: this.blue, transparent: true, opacity: 0.5 });
    const sphere = new THREE.Mesh(geometrySphere, materialSphere);

    // Ponto do centro da esfera
    const geometryCenterPoint = new THREE.SphereGeometry(.5, 90, 90);
    const materialCenterPoint = new THREE.MeshBasicMaterial({ color: this.black });
    const centerPoint = new THREE.Mesh(geometryCenterPoint, materialCenterPoint);

    // Label do ponto central
    // TODO: consertar o bug de transparencia do label da origem da esfera
    const labelCenterPoint = new SpriteText(`O`, 2, 'black');
    labelCenterPoint.position.set(-1.5, 1.5, -1); // posição da label

    // Linha do raio
    const radiusGeometry = new THREE.Geometry();
    radiusGeometry.vertices.push(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(Math.cos(Math.PI/4) * this.radius, Math.sin(Math.PI/4) * this.radius, 0)
    );
    const line = new THREE.Line(radiusGeometry, new THREE.LineBasicMaterial({ color: this.black, linewidth: 2 }));

    // Ponto final da linha do raio
    const pointFinalRadius = centerPoint.clone();
    pointFinalRadius.position.set(
      Math.cos(Math.PI/4) * this.radius,
      Math.sin(Math.PI/4) * this.radius,
      0
    );

    // Label do ponto final do raio
    const labelFinalRadius = new SpriteText(`A`, 2, 'black');
    labelFinalRadius.position.set(
      Math.cos(Math.PI/4) * this.radius + 1,
      Math.cos(Math.PI/4) * this.radius + 1,
      -1 // posição da label
      );

    // ---------------- Adicionando na cena ----------------
    this.geoScene.scene.add(
      // --- Esfera ---
      labelCenterPoint,
      sphere,
      centerPoint,
      line,
      pointFinalRadius,
      labelFinalRadius
    );
    this.geoScene.render();
  }

  changeRadius() {
    if (this.radius >= 5 && this.radius <= 50) {
      this.alterSphere();
      this.errorInput = false;
    } else {
      this.errorInput = true;
    }
  }

  public alterSphere() {
    // Remove todos os elementos da cena
    let sizeGeoChildren = this.geoScene.scene.children.length;
    const componentsToDelete = this.geoScene.scene.children.slice(1, sizeGeoChildren);
    componentsToDelete.forEach(element => {
      this.geoScene.scene.remove(element);
    });
    // Gera os elementos da cena com os novos valores
    this.makeElements();
  }

}
