import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
  Input,
  QueryList,
  ContentChildren
} from '@angular/core';
import * as THREE from 'three';
import "./js/EnableThreeExamples";
import "three/examples/js/controls/OrbitControls";
import "three/examples/js/loaders/ColladaLoader";
import { AbstractObject3D } from './directives/abstract/abstract-object-3d';
import { Scene, Line3 } from 'three';
import SpriteText from 'three-spritetext';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { start } from 'repl';

@Component({
  selector: 'geo-scene',
  templateUrl: './geo-scene.component.html',
  styleUrls: ['./geo-scene.component.scss']
})
export class GeoSceneComponent implements AfterViewInit {

  @Input('sharedData') data: any;

  @Input('pointsLimit') pointsLimit: any;

  @Input('hasPerspective') hasPerspective: any;

  @Input('hasOrbitControls') hasOrbitControls: any;

  @Input('hasClickHandler') hasClickHandler: any;

  @Input('hasLabel') hasLabel: boolean = false;

  @Input('hasPoint') hasPoint: boolean = false;

  @Input ('hasLine') hasLine: boolean = false;

  @Input('pointToDelete') pointsToDelete: number = 0;

  private labels : string = 'A';

  @ContentChildren(AbstractObject3D, {
    descendants: false
  })
  childNodes: QueryList<AbstractObject3D<THREE.Object3D>>;

  private renderer: THREE.WebGLRenderer;
  public camera: THREE.PerspectiveCamera;
  public cameraTarget: THREE.Vector3;
  public scene: THREE.Scene;

  public fieldOfView: number = 45;
  public nearClippingPane: number = 1;
  public farClippingPane: number = 1000;

  public controls: THREE.OrbitControls;

  private arrayLabel = [];

  public equation = [];

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  constructor() {

    this.data = {
      intersects: [],
      scene: {}
    }

    this.render = this.render.bind(this);
    this.onModelLoadingCompleted = this.onModelLoadingCompleted.bind(this);
  }

  public get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  public getCamera() : THREE.Camera {
    return this.camera;
  }

  private createScene() {
    this.scene = new THREE.Scene();
  }

  private onModelLoadingCompleted(collada) {
    let modelScene = collada.scene;
    this.scene.add(modelScene);
    this.render();
  }

  private createCamera() {
    let aspectRatio = this.getAspectRatio();

    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    );

    this.camera.position.set(0, 0, 100);
  }

  private getAspectRatio(): number {
    let height = this.canvas.clientHeight;

    if (height === 0) {
      return 0;
    }

    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private startRendering() {
    this.addControls();
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setClearColor(0xffffff, 1);
    this.renderer.autoClear = true;

    this.childNodes.forEach(child => {
      this.scene.add(child.getObject());
    });

    let component: GeoSceneComponent = this;

    (function render() {
      component.render();
    }());
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
  }

  public addControls() {
    if (this.hasPerspective && this.hasOrbitControls) {
      this.controls = new THREE.OrbitControls(this.camera, this.canvas);
      this.controls.rotateSpeed = 1.0;
      this.controls.zoomSpeed = 1.2;
      this.controls.addEventListener('change', this.render);
      this.controls.update();
      this.scene.add(new THREE.AxesHelper(200));
    }
  }

  public addPoint(pos) {
    const geometry = new THREE.CircleGeometry(1, 10);
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const circle = new THREE.Mesh(geometry, material);

    circle.position.copy(pos);

    this.scene.add(circle);
  }

  /**
   * função para achar equação geral da reta
   * @link https://mundoeducacao.bol.uol.com.br/matematica/equacao-fundamental-reta.htm
   * */
  public findEqByTwoPoints(x1 : number,x2 : number, y1 : number, y2 : number){
    let m : number = (y2 - y1) / (x2 - x1);
    let b : number = y1 - m*x1;
    this.equation[0] = m;
    this.equation[1] = b;
    return this.equation;
  }


  public setPointsToLine(m: number, b: number, x1 : number, x2 : number){
    m = this.equation[0];
    b = this.equation[1];
    let y1 = m*x1 + b;
    let y2 = m*x2 + b;
    let pointsY: number[] = [y1,y2];
    return pointsY;
  }

  //  public removePoints(geometryCircle,pointLimit){
  //    this.scene.remove(geometryCircle);
  //  }

  /* EVENTS */

  public onMouseDown(event: MouseEvent) {

    if (this.hasPoint == true) {
      this.needPoint(event);
    }

  }

  private findAllObjects(pred: THREE.Object3D[], parent: THREE.Object3D) {
    if (parent.children.length > 0) {
      parent.children.forEach((i) => {
        pred.push(i);
        this.findAllObjects(pred, i);
      });
    }
  }

  // @HostListener('window:resize', ['$event'])
  // public onResize(event: Event) {
  //   this.canvas.style.width = "100%";
  //   this.canvas.style.height = "100%";

  //   this.camera.aspect = this.getAspectRatio();
  //   this.camera.updateProjectionMatrix();
  //   this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
  //   this.render();
  // }

  private needPoint(event: MouseEvent) {

    this.deletePoints(this.pointsToDelete);

    event.preventDefault();

    let mouse = new THREE.Vector2();
    mouse.x = (event.offsetX / this.canvas.clientWidth) * 2 - 1;
    mouse.y = - (event.offsetY / this.canvas.clientHeight) * 2 + 1;

    let vector = new THREE.Vector3(
      mouse.x, mouse.y, 0.5
    );

    vector.unproject(this.camera);

    let direction = vector.sub(this.camera.position).normalize();
    let distance = - this.camera.position.z / direction.z;
    let pos = this.camera.position.clone().add(direction.multiplyScalar(distance));

    this.checkLabel(pos);

    let raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, this.camera);
    let intersects = raycaster.intersectObjects(this.scene.children);
    this.data.intersects = intersects;

    this.addPoint(pos);

    //Condição para inserir linha
    if (this.hasLine == true && this.scene.children.length > 4) {
      //Pontos passados pelo usuário
      let x1 = this.scene.children[3].position.x;
      let x2 = this.scene.children[5].position.x;
      let y1 = this.scene.children[3].position.y;
      let y2 = this.scene.children[5].position.y;

      this.findEqByTwoPoints(x1,x2,y1,y2);
      //Traçar reta onde os Xs dos pontos valem 200 para ficar maior que a cena
      let py1 = this.setPointsToLine(this.equation[0],this.equation[1],200,-200)[0];
      let py2 = this.setPointsToLine(this.equation[0],this.equation[1],200,-200)[1];
      let material = new THREE.LineBasicMaterial({
        color: 0xff0000
      });

      let geometry = new THREE.Geometry();

      geometry.vertices.push(
        new THREE.Vector3(200 , py1, 0 ),
        new THREE.Vector3(-200 , py2, 0)
      );
      let lineLabel = new SpriteText('r', 7, "blue");
      lineLabel.position.x = ((this.scene.children[3].position.x + this.scene.children[5].position.x) / 2) + 3;
      lineLabel.position.y = ((this.scene.children[3].position.y + this.scene.children[5].position.y) / 2) + 3;
      this.scene.add( lineLabel );
      let line = new THREE.Line( geometry, material );
      this.scene.add( line );
    }

    this.render();
  }

  public checkLabel(pos: any) {
    if (this.hasLabel == true) {
      // adiciona label ao ponto
      var label = new SpriteText(this.labels, 7, "blue");
      this.labels = String.fromCharCode(this.labels.charCodeAt(0) + 1);
      this.arrayLabel.push(label.text);
      label.position.x = pos.x;
      label.position.y = pos.y + 3;

      this.scene.add(label);
    }
  }

  public getArrayLabel(): any[] {
    return this.arrayLabel;
  }

  public deletePoints(pointsDel: number) {
    if (this.scene.children.length > this.pointsLimit) {
      let i: number;
      for (i = 0; i < pointsDel; i++) {
        this.scene.remove(this.scene.children[this.pointsLimit-i+1]);
      }
      this.labels = 'A';
    }
  }
  
  /* LIFECYCLE */
  ngAfterViewInit() {
    this.createScene();
    this.createCamera();
    this.startRendering();
    this.addControls();
    this.data.scene = this.scene;
  }

}
