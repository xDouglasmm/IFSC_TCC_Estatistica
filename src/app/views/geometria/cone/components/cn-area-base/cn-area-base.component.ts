import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { GeoSceneComponent } from "../../../shared/components/geo-scene/geo-scene.component";
import * as THREE from "three";
import SpriteText from "three-spritetext";

@Component({
  selector: "ifmath-cn-area-base",
  templateUrl: "./cn-area-base.component.html",
  styleUrls: ["./cn-area-base.component.scss"]
})
export class CnAreaBaseComponent implements AfterViewInit {
  public radius = 25;

  @ViewChild(GeoSceneComponent)
  public geoScene: GeoSceneComponent;
  public errorInput: boolean = false;

  // Cores
  public red: any = 0xcc0000;
  public blue: any = 0x4683b4;
  public blueShadow: any = 0x3f76a2;
  public black: any = 0x000000;

  // Botoões de navegação
  buttons: Object[] = [
    { title: "Área da base", route: "cn_area_base" },
    { title: "Área lateral", route: "cn_area_lateral" },
    { title: "Área total", route: "cn_area_total" }
  ];

  constructor() {}

  makeElements() {
    // Cone
    const geometry = new THREE.ConeGeometry(this.radius, 50, 92);
    const material = new THREE.MeshBasicMaterial({
      color: this.blueShadow,
      transparent: true,
      opacity: 0.5
    });
    const cone = new THREE.Mesh(geometry, material);
    cone.position.copy(new THREE.Vector3(0, 50 / 2, 0));

    // Label do V
    const vLabel = new SpriteText("V", 2, "this.black");
    vLabel.position.y = 25 + 1;

    // Label do O
    const oLabel = new SpriteText("O", 2, "this.black");
    oLabel.position.copy(new THREE.Vector3(0, 1, 1));

    // Label do A
    const aLabel = new SpriteText("A", 2, "this.black");
    aLabel.position.copy(
      new THREE.Vector3(
        Math.cos(Math.PI / 4) * this.radius,
        1,
        Math.sin(Math.PI / 4) * this.radius
      )
    );

    // Label do r
    const rLabel = new SpriteText("r", 2, "red");
    rLabel.position.copy(
      new THREE.Vector3(
        (Math.cos(Math.PI / 4) * this.radius) / 2,
        1,
        (Math.sin(Math.PI / 4) * this.radius) / 2
      )
    );
    rLabel.material.depthTest = false;

    // Label do h
    const hLabel = new SpriteText("h", 2, "this.black");
    hLabel.position.copy(new THREE.Vector3(1, 25 / 2, 0));
    hLabel.material.depthTest = false;

    // Linha do raio
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

    // Linha da altura
    const materialHeight = new THREE.LineBasicMaterial({ color: this.black });
    const geometryHeight = new THREE.Geometry();
    geometryHeight.vertices.push(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 25, 0)
    );
    const height = new THREE.Line(geometryHeight, materialHeight);
    height.name = "reta-altura";
    height.material.depthTest = false;

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

  ngAfterViewInit() {
    this.geoScene.camera.position.set(100, 90, 80);
    this.geoScene.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.makeElements();
  }

  changeRadius() {
    if (this.radius > 4 && this.radius < 51) {
      this.alterCone();
      this.errorInput = false;
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

  public alterCone() {
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
  }
}
