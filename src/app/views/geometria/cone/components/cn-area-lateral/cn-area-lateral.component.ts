import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GeoSceneComponent } from '../../../shared/components/geo-scene/geo-scene.component';
import * as THREE from 'three';
import SpriteText from 'three-spritetext';
import { SquareRoot } from '../../../shared/fixtures/squareRoot';

@Component({
  selector: 'ifmath-cn-area-lateral',
  templateUrl: './cn-area-lateral.component.html',
  styleUrls: ['./cn-area-lateral.component.scss']
})
export class CnAreaLateralComponent implements AfterViewInit {

  public radius: number = 25;
  public height: number = 40;
  public geratriz: number = Math.sqrt(Math.pow(this.radius, 2) + Math.pow(this.height, 2));
  public outsideRoot: number;
  public insideRoot: number;
  public isApprox = true;
  public errorInput: boolean = false;

  @ViewChild(GeoSceneComponent)
  public geoScene: GeoSceneComponent;

  // Cores
  public blue: any = 0x4683B4;
  public blueShadow: any = 0x3f76a2;
  public black: any = 0x000000;

  buttons: Object[] = [
    { title: "Área da base", route: "cn_area_base" },
    { title: "Área lateral", route: "cn_area_lateral" },
    { title: "Área total", route: "cn_area_total" }
  ];

  constructor() {
    const squareRoot = new SquareRoot((this.height ** 2) + (this.radius ** 2), 1);
    squareRoot.factoringRoot();
    [this.outsideRoot, this.insideRoot] = squareRoot.getTuple();
  }

  makeElements() {
    const geometry = new THREE.ConeGeometry(this.radius, this.height, 92);
    const material = new THREE.MeshBasicMaterial({ color: this.blueShadow, transparent: true, opacity: 0.5 });
    const cone = new THREE.Mesh(geometry, material);
    cone.position.copy(new THREE.Vector3(0, this.height / 2, 0));

    const vLabel = new SpriteText('V', 2, 'black');
    vLabel.position.y = this.height + 1;

    const oLabel = new SpriteText('O', 2, 'black');
    oLabel.position.copy(new THREE.Vector3(0, 1, 1));

    const aLabel = new SpriteText('A', 2, 'black');
    aLabel.position.copy(new THREE.Vector3(Math.cos(Math.PI / 4) * this.radius, 1, Math.sin(Math.PI / 4) * this.radius));

    const rLabel = new SpriteText('r', 2, 'blue');
    rLabel.position.copy(new THREE.Vector3(Math.cos(Math.PI / 4) * this.radius / 2, 1, Math.sin(Math.PI / 4) * this.radius / 2));
    rLabel.material.depthTest = false;

    const hLabel = new SpriteText('h', 2, 'red');
    hLabel.position.copy(new THREE.Vector3(1, this.height / 2, 0));
    hLabel.material.depthTest = false;

    const materialRadius = new THREE.LineBasicMaterial({ color: this.black });
    const geometryRadius = new THREE.Geometry();
    geometryRadius.vertices.push(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(Math.cos(Math.PI / 4) * this.radius, 0, Math.sin(Math.PI / 4) * this.radius)
    );
    const radius = new THREE.Line(geometryRadius, materialRadius);
    radius.name = "reta-raio";

    const materialHeight = new THREE.LineBasicMaterial({ color: this.black });
    const geometryHeight = new THREE.Geometry();
    geometryHeight.vertices.push(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, this.height, 0)
    );
    const height = new THREE.Line(geometryHeight, materialHeight);
    height.name = "reta-altura";
    height.material.depthTest = false

    const baseGeometry = new THREE.CylinderGeometry(this.radius, this.radius, -0.01, 92);
    const baseMaterial = new THREE.MeshBasicMaterial({ color: this.blueShadow });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);

    this.geoScene.scene.add(cone, vLabel, oLabel, aLabel, rLabel, radius, base, height, hLabel);
    this.geoScene.render();
  }

  changeInputs() {
    if (this.radius > 4 && this.radius < 51 && this.height > 4 && this.height < 51) {
      this.changeCone();
      this.errorInput = false;
    } else {
      this.errorInput = true;
    }
  }

  changeCone() {
    this.removeElements();
    this.makeElements();
    this.geratriz = Math.sqrt(Math.pow(this.radius, 2) + Math.pow(this.height, 2));
    const squareRoot = new SquareRoot((this.height ** 2) + (this.radius ** 2), 1);
    squareRoot.factoringRoot();
    [this.outsideRoot, this.insideRoot] = squareRoot.getTuple();
    // Verifica se há necessidade de arredondamento
    this.geratriz = (Number.isInteger(this.geratriz)) ? this.geratriz : parseFloat(this.geratriz.toFixed(2));
    // Verifica se é um valor aproximado
    this.isApprox = (!Number.isInteger(this.geratriz)) ? true : false;
  }

  removeElements() {
    // Remove todos os elementos da cena
    const sizeGeoChildren = this.geoScene.scene.children.length;
    const componentsToDelete = this.geoScene.scene.children.slice(1, sizeGeoChildren);

    componentsToDelete.forEach(element => {
      this.geoScene.scene.remove(element);
    });
  }

  ngAfterViewInit() {
    this.geoScene.camera.position.set(100, 90, 80);
    this.geoScene.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.makeElements();
    this.geratriz = Math.sqrt(Math.pow(this.radius, 2) + Math.pow(this.height, 2));
    // Verifica se há necessidade de arredondamento
    this.geratriz = (Number.isInteger(this.geratriz)) ? this.geratriz : parseFloat(this.geratriz.toFixed(2));
    // Verifica se é um valor aproximado
    this.isApprox = (!Number.isInteger(this.geratriz)) ? true : false;
  }

}
