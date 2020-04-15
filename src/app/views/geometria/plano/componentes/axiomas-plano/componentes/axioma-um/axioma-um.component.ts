import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ponto } from '../../../../../ponto/componentes/construcao-ponto/ponto.model';

@Component({
  selector: 'app-axioma-um',
  templateUrl: './axioma-um.component.html',
  styleUrls: ['./axioma-um.component.scss']
})
export class AxiomaUmComponent implements OnInit {
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
    'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];
  public n = 0;
  public move = false;
  public xmouse: number;
  public ymouse: number;
  public pontosMesh: any;
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
    this.render();

  }
  render() {

    const self: AxiomaUmComponent = this;

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

        xDoMouse = (xDoMouse /  this.screen.width) * 2 - 1;
        yDoMouse = -(yDoMouse /  this.screen.width) * 2 + 1;
        let raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(xDoMouse, yDoMouse), this.camera);
        let intersects = raycaster.intersectObjects(this.pontosMesh);

        if (intersects.length === 0) {
          let p = '';
          if (Math.floor(this.n / 26) > 0) { p = Math.floor(this.n / 26) + '' }
          this.adicionaPonto((xDoMouse * 5) + this.camera.position.x, (yDoMouse * 5) + this.camera.position.y, this.alfabeto[this.n++] + p);
          if (this.n > 24) {
            this.n = 0;
          }
        }

      }
    }
  }
  @HostListener('document:mousedown', ['$event'])
  onmousedown(event) {
    if (event.toElement.tagName === 'CANVAS') {
      this.xmouse = event.offsetX;
      this.ymouse = event.offsetY;
      this.xmouse = (this.xmouse /  this.screen.width) * 2 - 1;
      this.ymouse = -(this.ymouse /  this.screen.width) * 2 + 1;
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
      xDoMouse = (xDoMouse /  this.screen.width) * 2 - 1;
      yDoMouse = -(yDoMouse /  this.screen.width) * 2 + 1;
      this.camera.position.x = (-xDoMouse * this.distanciaCamera) + this.xmouse;
      this.camera.position.y = (-yDoMouse * this.distanciaCamera) + this.ymouse;
    }
  }}
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
  }

}

