import { Input } from '@angular/core';
import * as THREE from 'three';
import { AbstractObject3D } from './abstract-object-3d';

export abstract class AbstractMesh extends AbstractObject3D<THREE.Mesh> {

  @Input()
  material: String;
  @Input()
  materialColor: number;

  constructor() {
    super();
  }

  public getMaterial(): THREE.MeshBasicMaterial {
    let appliedColor = 0xffff00;

    if (this.materialColor !== undefined) {
      appliedColor = this.materialColor * 1;
    }

    if (this.material === 'lamb') {
      return new THREE.MeshLambertMaterial({ color: appliedColor });
    } else {
      return new THREE.MeshBasicMaterial({ color: appliedColor });
    }
  }

}