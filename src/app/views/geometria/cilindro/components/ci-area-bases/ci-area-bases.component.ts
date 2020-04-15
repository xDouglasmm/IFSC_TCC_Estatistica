import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GeoSceneComponent } from '../../../shared/components/geo-scene/geo-scene.component';
import SpriteText from 'three-spritetext';

@Component({
  selector: 'ifmath-ci-area-bases',
  templateUrl: './ci-area-bases.component.html',
  styleUrls: ['./ci-area-bases.component.scss']
})
export class CiAreaBasesComponent implements AfterViewInit {

  buttons: Object[] = [
    { title: "Área das bases", route: "ci_area_bases" },
    { title: "Área lateral", route: "ci_area_lateral" },
    { title: "Área total", route: "ci_area_total" }
  ];

  @ViewChild(GeoSceneComponent)
  public geoScene: GeoSceneComponent;

  // Cores das linhas
  public blue: any = 0x4683B4;
  public blueShadow: any = 0x3f76a2;
  public black: any = 0x000000;

  // Raio da base
  public radius: number = 30;
  public PI: number = Math.PI;

  public errorInput = false;

  public isApprox = true;

  constructor() { }

  makeElements() {
    // Cilindro
    const geometryCylinder = new THREE.CylinderGeometry(this.radius, this.radius, 50, 32);
    const materialCylinder = new THREE.MeshBasicMaterial({ color: this.blue });
    const cylinder = new THREE.Mesh(geometryCylinder, materialCylinder);
    cylinder.position.copy(new THREE.Vector3(-60, 0, 0));
    cylinder.name = "cilindro";

    // Parte de cima do cilindro
    const geometryCircunferenceTop = new THREE.CircleGeometry(this.radius, 90, 10);
    const materialCircunferenceTop = new THREE.MeshBasicMaterial({ color: this.blueShadow });
    const circunferenceTop = new THREE.Mesh(geometryCircunferenceTop, materialCircunferenceTop);
    circunferenceTop.position.set(-60, 25.01, 0);
    circunferenceTop.rotateX(-Math.PI / 2);
    circunferenceTop.name = "base-superior";

    // Parte de baixo do cilindro
    const geometryCircunferenceBottom = new THREE.CircleGeometry(this.radius, 90, 10);
    const materialCircunferenceBottom = new THREE.MeshBasicMaterial({ color: this.blueShadow });
    const circunferenceBottom = new THREE.Mesh(geometryCircunferenceBottom, materialCircunferenceBottom);
    circunferenceBottom.position.set(-60, -25.01, 0);
    circunferenceBottom.rotateX(Math.PI / 2);
    circunferenceBottom.name = "base-inferior";

    // Linha do raio
    const materialRadius = new THREE.LineBasicMaterial({ color: this.black });
    const geometryRadius = new THREE.Geometry();
    geometryRadius.vertices.push(
      new THREE.Vector3(-60, 25.01, 0),
      new THREE.Vector3(this.radius - 60, 25.01, 0)
    );
    const radius = new THREE.Line(geometryRadius, materialRadius);
    radius.name = "reta-raio";

    // Label do raio
    const labelRadius = new SpriteText('r', 6, 'black');
    labelRadius.position.x = (this.radius / 2) - 60;
    labelRadius.position.y = 29;
    labelRadius.name = "label-raio";

    // Label da borda
    const labelBorder = new SpriteText('A', 6, 'red');
    labelBorder.position.x = this.radius - 60;
    labelBorder.position.y = 29;
    labelBorder.name = "label-a";

    // Label do centro
    const labelCenter = new SpriteText('O', 6, 'red');
    labelCenter.position.x = -1 - 60;
    labelCenter.position.y = 29;
    labelCenter.name = "label-o";

    // Gerando as bases do cilindro
    const cylinderBaseTopGeometry = new THREE.CircleGeometry(this.radius, 90, 10);
    const cylinderBaseTopMaterial = new THREE.MeshBasicMaterial({ color: this.blueShadow });
    const cylinderBaseTop = new THREE.Mesh(cylinderBaseTopGeometry, cylinderBaseTopMaterial);
    cylinderBaseTop.position.set(60, 25.001, 0);

    const cylinderBaseTop2 = cylinderBaseTop.clone();

    cylinderBaseTop.rotateX(-Math.PI / 2);
    cylinderBaseTop.name = "base-superior-exemplo";
    cylinderBaseTop2.rotateX(Math.PI / 2);
    cylinderBaseTop2.name = "base-superior2-exemplo";

    const cylinderBaseBottomGeometry = new THREE.CircleGeometry(this.radius, 90, 10);
    const cylinderBaseBottomMaterial = new THREE.MeshBasicMaterial({ color: this.blueShadow });
    const cylinderBaseBottom = new THREE.Mesh(cylinderBaseBottomGeometry, cylinderBaseBottomMaterial);
    cylinderBaseBottom.position.set(60, -25.001, 0);

    const cylinderBaseBottom2 = cylinderBaseBottom.clone();

    cylinderBaseBottom.rotateX(-Math.PI / 2);
    cylinderBaseBottom.name = "base-inferior-exemplo";
    cylinderBaseBottom2.rotateX(Math.PI / 2);
    cylinderBaseBottom2.name = "base-inferior2-exemplo";

    this.geoScene.scene.add(
      cylinder,
      circunferenceTop,
      circunferenceBottom,
      radius,
      labelRadius,
      labelBorder,
      labelCenter,
      cylinderBaseTop,
      cylinderBaseTop2,
      cylinderBaseBottom,
      cylinderBaseBottom2
    );
    this.geoScene.render();
  }

  removeElements() {
    // Remove todos os elementos da cena
    const sizeGeoChildren = this.geoScene.scene.children.length;
    const componentsToDelete = this.geoScene.scene.children.slice(1,sizeGeoChildren);

    componentsToDelete.forEach(element => {
      this.geoScene.scene.remove(element);
    });
  }

  changeRadius() {
    if (this.radius >=5 && this.radius <= 50) {
      this.removeElements();
      this.makeElements();
      this.geoScene.render();
      this.errorInput = false;
    } else {
      this.errorInput = true;
    }
  }

  ngAfterViewInit() {
    this.geoScene.camera.position.set(0, 80, 160);
    this.geoScene.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.makeElements();
  }

}
