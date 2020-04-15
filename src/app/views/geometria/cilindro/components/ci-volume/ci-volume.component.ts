import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { GeoSceneComponent } from "../../../shared/components/geo-scene/geo-scene.component";
import * as THREE from "three";
import SpriteText from "three-spritetext";

@Component({
  selector: "ifmath-ci-volume",
  templateUrl: "./ci-volume.component.html",
  styleUrls: ["./ci-volume.component.scss"]
})
export class CiVolumeComponent implements AfterViewInit {
  @ViewChild(GeoSceneComponent)
  public geoScene: GeoSceneComponent;

  public radius: number = 15;
  public height: number = 30;

  // Cores das linhas
  public red: any = 0xcc0000;
  public blue: any = 0x4683b4;
  public blueShadow: any = 0x3f76a2;
  public black: any = 0x000000;

  public errorInput = false;

  constructor() {}

  public makeElements() {
    //Tampa de cima
    const geometryCircunference = new THREE.CircleGeometry(this.radius, 92);
    const materialCircunference = new THREE.MeshBasicMaterial({
      color: this.blueShadow
    });

    const circunference = new THREE.Mesh(
      geometryCircunference,
      materialCircunference
    );
    circunference.position.set(0, this.height / 2 + 0.2, 0);
    circunference.rotateX(-Math.PI / 2);

    //Tampa de baixo
    const circunferenceBottom = new THREE.Mesh(
      geometryCircunference,
      materialCircunference
    );
    circunferenceBottom.position.set(0, -(this.height / 2 + 0.2), 0);
    circunferenceBottom.rotateX(+Math.PI / 2);

    this.geoScene.scene.add(circunference);
    this.geoScene.scene.add(circunferenceBottom);

    // Cilindro em si
    let material = new THREE.MeshBasicMaterial({
      color: this.blue
    });
    let cylinderGeometry = new THREE.CylinderGeometry(
      this.radius,
      this.radius,
      this.height,
      32
    );
    const cylinder = new THREE.Mesh(cylinderGeometry, material);
    this.geoScene.scene.add(cylinder);

    // Adicionando ponto central do círculo
    const centerPoint = new THREE.Mesh(
      new THREE.CircleGeometry(1, 30),
      new THREE.MeshBasicMaterial({
        color: this.black
      })
    );
    centerPoint.position.y = this.height / 2 + 1;
    centerPoint.rotateX(-Math.PI / 2);

    // Adicionando representação da medida do raio
    const radiusGeometry = new THREE.Geometry();
    radiusGeometry.vertices.push(
      new THREE.Vector3(0, this.height / 2 + 1, 0),
      new THREE.Vector3(this.radius, this.height / 2 + 1, 0)
    );
    const line = new THREE.Line(
      radiusGeometry,
      new THREE.LineBasicMaterial({
        color: this.red,
        linewidth: 2
      })
    );

    // Adicionando label do raio da circunferência
    const radiusLabel = new SpriteText("r", 5, "red");
    radiusLabel.position.x = this.radius / 2;
    radiusLabel.position.y = this.height / 2 + 5;

    this.geoScene.scene.add(line, centerPoint, radiusLabel);

    this.geoScene.render();
  }

  ngAfterViewInit() {
    this.geoScene.camera.position.set(100, 50, 50);
    this.geoScene.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.makeElements();
  }

  public alterCylinder() {
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

  changeRadius() {
    if (this.radius >= 5 && this.radius <= 41) {
      this.alterCylinder();
      this.errorInput = false;
    } else {
      this.errorInput = true;
    }
  }

  changeHeight() {
    if (this.height >= 5 && this.height <= 41) {
      this.alterCylinder();
      this.errorInput = false;
    } else {
      this.errorInput = true;
    }
  }
}
