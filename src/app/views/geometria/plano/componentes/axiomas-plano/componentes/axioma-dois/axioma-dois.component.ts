
import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ponto } from '../../../../../ponto/componentes/construcao-ponto/ponto.model';

@Component({
  selector: 'app-axioma-dois',
  templateUrl: './axioma-dois.component.html',
  styleUrls: ['./axioma-dois.component.scss']
})
export class AxiomaDoisComponent implements OnInit {
  public formModel: FormGroup = this.fb.group({
    axioma: [''],
  });
  constructor(private fb: FormBuilder) { }

  @ViewChild('container') elementRef: ElementRef;
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  public distanciaCamera = 5;
  public pontos: any;
  public material = new THREE.MeshPhongMaterial({ color: 0x000000 });
  public alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  public alfabetoMinusculo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  public n = 0;
  public m = 0;
  public move = false;
  public xmouse: number;
  public ymouse: number;
  public pontosMesh: any;
  public ponto1: THREE.Mesh;
  public ponto2: THREE.Mesh;
  public click = 0;
  public retas;
  public screen;


  ngOnInit() {
    this.container = this.elementRef.nativeElement;
    console.log(this.container);
    this.init();

    this.formModel.valueChanges.subscribe((value: any) => {
      this.animate();
    });
  }

  init() {
    if (window.innerWidth > 1200) {
      this.screen = {
        width: window.innerWidth / 2.5,
        height: window.innerWidth / 2.5
      }
    } else if (window.innerWidth > 769) {
      this.screen = {
        width: window.innerWidth / 1.5,
        height: window.innerWidth / 1.5
      }

    } else {
      this.screen = {
        width: window.innerWidth * 0.9,
        height: window.innerWidth * 0.9
      }
    }

    const view = {
      angle: 90,
      aspect: this.screen.width / this.screen.height,
      near: 0.1,
      far: 1000
    };

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xEEEEEE); // Cor de fundo canvas
    this.camera = new THREE.PerspectiveCamera(view.angle, view.aspect, view.near, view.far);
    this.renderer = new THREE.WebGLRenderer();

    this.scene.add(this.camera);

    this.camera.position.set(0, 0, this.distanciaCamera);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.renderer.setSize(this.screen.width, this.screen.height);
    this.container.appendChild(this.renderer.domElement);
    this.pontos = [];
    this.pontosMesh = [];
    this.retas = [];
    this.render();

  }
  render() {

    const self: AxiomaDoisComponent = this;

    (function render() {
      requestAnimationFrame(render);
      self.renderer.render(self.scene, self.camera);

      self.animate();
    }());
  }

  public animate() {


  }
  adicionaPonto(x: number, y: number, label: string) {
    let ponto = new Ponto(x, y, label);
    this.camera.add(ponto.getMesh());
    this.adicionarTexto(label, ponto.getTexto(), this.scene, 5, this.material);
    ponto.setCordinates(x, y);
    this.scene.add(ponto.getMesh());
    ponto.getMesh().name = this.n + '';
    this.pontosMesh.push(ponto.getMesh());
    this.pontos.push(ponto);
    return ponto.getMesh();
  }
  adicionaReta(a: THREE.Mesh, b: THREE.Mesh, label: string) {
    this.retas.push(a.name + '-' + b.name);
    this.retas.push(b.name + '-' + a.name);
    const AX = a.position.x;
    const AY = a.position.y;
    const BX = b.position.x;
    const BY = b.position.y;
    const m = (BY - AY) / (BX - AX);

    const pontoRetaY = (m * (this.distanciaCamera * 1000 - AX)) + AY;
    const pontoRetaY2 = (m * (-this.distanciaCamera * 1000 - AX)) + AY;

    const curva = new THREE.SplineCurve([new THREE.Vector2(this.distanciaCamera * 1000, pontoRetaY),
    new THREE.Vector2(-this.distanciaCamera * 1000, pontoRetaY2)]);
    const linhaReta = new THREE.Geometry().setFromPoints(curva.getPoints(1));
    const materialLinha = new THREE.LineBasicMaterial({ color: 0x0 });
    const reta = new THREE.Line(linhaReta, materialLinha);
    this.scene.add(reta);
    const mesh = new THREE.Mesh;
    mesh.position.x = (AX + BX) / 2;
    mesh.position.y = (AY + BY) / 2;
    this.adicionarTexto(label, mesh, this.scene, 5, this.material);
  }
  public adicionarTexto(valor: string, geom: THREE.Mesh, scene: any, size: number, material: THREE.MeshPhongMaterial) {
    const loader = new THREE.FontLoader();
    loader.load('https://raw.githubusercontent.com/rollup/three-jsnext/master/examples/fonts/helvetiker_regular.typeface.json',
      function (font) {
        const geometry = new THREE.TextGeometry(valor,
          {
            font: font,
            size: size / 15,
            height: 0.0001,
            curveSegments: 12,
          }
        );
        geom.geometry.dispose();
        geom.geometry = geometry;
        geom.material = material;
        scene.add(geom);
      }
    );
  }
  @HostListener('document:click', ['$event'])
  @HostListener('document:touch', ['$event'])
  onMouseClick(event) {
    if (event.toElement.tagName === 'CANVAS') {
      if (this.move) {
        this.move = false;
      } else {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        let xDoMouse = event.offsetX;
        let yDoMouse = event.offsetY;

        xDoMouse = (xDoMouse / this.screen.width) * 2 - 1;
        yDoMouse = -(yDoMouse / this.screen.width) * 2 + 1;
        let raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(xDoMouse, yDoMouse), this.camera);
        let intersects = raycaster.intersectObjects(this.pontosMesh);

        if (intersects.length === 0) {
          let p = '';
          if (Math.floor(this.n / 26) > 0) { p = Math.floor(this.n / 26) + '' }
          if ((this.click % 2) === 0) {
            this.ponto1 = this.adicionaPonto((xDoMouse * 5) + this.camera.position.x, (yDoMouse * 5) + this.camera.position.y, this.alfabeto[this.n % 26] + p);
          } else {
            this.ponto2 = this.adicionaPonto((xDoMouse * 5) + this.camera.position.x, (yDoMouse * 5) + this.camera.position.y, this.alfabeto[this.n % 26] + p);
          }
          this.n++;
        } else {
          if ((this.click % 2) === 0) {
            this.ponto1 = this.pontosMesh[+intersects[0].object.name];
          } else {
            this.ponto2 = this.pontosMesh[+intersects[0].object.name];
          }
        }
        if ((this.click % 2) != 0 && (this.ponto1 != this.ponto2)) {
          let existsReta = false;
          this.retas.forEach(element => {
            if (element === (this.ponto1.name + '-' + this.ponto2.name)) existsReta = true;
          });
          if (!existsReta) {
            let p = '';
            if (Math.floor(this.m / 26) > 0) { p = Math.floor(this.m / 26) + '' }
            this.adicionaReta(this.ponto1, this.ponto2, this.alfabetoMinusculo[this.m % 26] + p);
            this.m++;
          }
        }
        this.click++;
      }
    }
  }
  @HostListener('document:mousedown', ['$event'])
  onmousedown(event) {
    if (event.toElement.tagName === 'CANVAS') {
      this.xmouse = event.offsetX;
      this.ymouse = event.offsetY;
      this.xmouse = (this.xmouse / this.screen.width) * 2 - 1;
      this.ymouse = -(this.ymouse / this.screen.width) * 2 + 1;
      this.xmouse = this.camera.position.x + (this.xmouse * 5);
      this.ymouse = this.camera.position.y + (this.ymouse * 5);
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event) {
    if (event.toElement.tagName === 'CANVAS') {
      // calculate mouse position in normalized device coordinates
      // (-1 to +1) for both components
      if (event.buttons > 0) {
        this.move = true;
        let xDoMouse = event.offsetX;
        let yDoMouse = event.offsetY;
        xDoMouse = (xDoMouse / this.screen.width) * 2 - 1;
        yDoMouse = -(yDoMouse / this.screen.width) * 2 + 1;
        this.camera.position.x = (-xDoMouse * this.distanciaCamera) + this.xmouse;
        this.camera.position.y = (-yDoMouse * this.distanciaCamera) + this.ymouse;
      }
    }
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    if (event.target.innerWidth > 1200) {
      this.screen.width = event.target.innerWidth / 2.5;
      this.screen.height = event.target.innerWidth / 2.5;
    } else if (event.target.innerWidth > 769) {
      this.screen.width = event.target.innerWidth / 1.5;
      this.screen.height = event.target.innerWidth / 1.5;
    } else {
      this.screen.width = event.target.innerWidth * 0.9;
      this.screen.height = event.target.innerWidth * 0.9;
    }
    this.renderer.setSize(this.screen.width, this.screen.height)
  }
  limpar() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xEEEEEE); // Cor de fundo canvas
    this.scene.add(this.camera);
    this.pontosMesh = [];
    this.n = -1;
    this.click = -1;
    this.m = 0;
  }

}

