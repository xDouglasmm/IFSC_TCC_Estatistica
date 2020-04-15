import {
  AfterViewInit,
  OnChanges,
  ContentChildren,
  QueryList,
  Input,
  SimpleChanges
} from '@angular/core';

import * as THREE from 'three';

export abstract class AbstractObject3D < T extends THREE.Object3D > implements AfterViewInit, OnChanges {

  @ContentChildren(AbstractObject3D, {
    descendants: false
  })
  childNodes: QueryList < AbstractObject3D < THREE.Object3D >> ;

  @Input()
  rotateX: number;

  @Input()
  rotateY: number;

  @Input()
  rotateZ: number;

  @Input()
  translateX: number;
  @Input()
  translateY: number;
  @Input()
  translateZ: number;

  private object: T;

  protected renderer() {
    // TODO: implement renderer function
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (!this.object)
      return;

    let mustRenderer = false;

    if (['rotateX', 'rotateY', 'rotateZ'].some(propName => propName in changes)) {
      this.applyRotation();
      mustRenderer = true;
    }

    if (['translateX', 'translateY', 'translateZ'].some(propName => propName in changes)) {
      this.applyTranslation();
      mustRenderer = true;
    }

    if (mustRenderer)
      this.renderer();

  }

  public ngAfterViewInit(): void {
    this.object = this.newObject3DInstance();

    this.applyTranslation();
    this.applyRotation();

    if (this.childNodes !== undefined && this.childNodes.length > 1) {
      this.childNodes.filter(i => i !== this && i.getObject() !== undefined)
          .forEach(i => {
            this.addChild(i.getObject());
          });
    }

    this.afterInit();
  }

  private applyRotation(): void {
    const angles = [
      this.rotateX,
      this.rotateY,
      this.rotateZ
    ].map(angle => angle || 0);

    this.object.rotation.set(
      this.rotateX || 0,
      this.rotateY || 0,
      this.rotateZ || 0,
      'XYZ'
    );
  }

  private applyTranslation(): void {
    this.object.position.set(
      this.translateX || 0,
      this.translateY || 0,
      this.translateZ || 0
    );
  }

  protected addChild(object: THREE.Object3D): void {
    this.object.add(object);
  }

  protected removeChild(object: THREE.Object3D): void {
    this.object.remove(object);
  }

  public getObject(): T {
    return this.object;
  }

  protected abstract newObject3DInstance(): T;

  protected abstract afterInit(): void;

}
