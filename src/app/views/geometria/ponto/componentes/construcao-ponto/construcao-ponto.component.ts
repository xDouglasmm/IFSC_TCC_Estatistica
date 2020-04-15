import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ponto } from '../../componentes/construcao-ponto/ponto.model'
import { Path } from 'three';
@Component({
  selector: 'app-construcao-ponto',
  templateUrl: './construcao-ponto.component.html',
  styleUrls: ['./construcao-ponto.component.scss']
})
export class ConstrucaoPontoComponent implements OnInit {


  public formModel: FormGroup = this.fb.group({

  });
  constructor(private fb: FormBuilder) { }

  @ViewChild('container') elementRef: ElementRef;
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  public distanciaCamera = 5;
  public pontos: any;
  public pontosMesh: any;
  public material = new THREE.MeshPhongMaterial({ color: 0x000000 });
  public alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  public n = 0;


  ngOnInit() {
    this.container = this.elementRef.nativeElement;
    console.log(this.container);
    this.init();

    this.formModel.valueChanges.subscribe((value: any) => {
      this.animate();
    });
  }

  init() {
    const screen = {
      width: 600,
      height: 600
    },
      view = {
        angle: 90,
        aspect: screen.width / screen.height,
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

    this.renderer.setSize(screen.width, screen.height);
    this.container.appendChild(this.renderer.domElement);
    this.pontos = [];
    this.pontosMesh = [];
    this.render();

  }
  render() {

    const self: ConstrucaoPontoComponent = this;

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
    this.pontosMesh.push(ponto.getMesh());
    this.pontos.push(ponto);
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
            //bevelEnabled: true,
            //bevelThickness: 10,
            //bevelSize: 8,
            //bevelSegments: 5
          }
        );
        geom.geometry.dispose();
        geom.geometry = geometry;
        geom.material = material;
        scene.add(geom);
      }
    );
  }
  limpar() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xEEEEEE); // Cor de fundo canvas
    this.scene.add(this.camera);
    this.n = 0;
  }
  @HostListener('document:click', ['$event'])
  @HostListener('document:touch', ['$event'])
  onMouseClick(event) {
    if (event.toElement.tagName === 'CANVAS') {
      // calculate mouse position in normalized device coordinates
      // (-1 to +1) for both components
      let xDoMouse = event.offsetX;
      let yDoMouse = event.offsetY;

      xDoMouse = (xDoMouse / 600) * 2 - 1;
      yDoMouse = -(yDoMouse / 600) * 2 + 1;
      let raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(xDoMouse, yDoMouse), this.camera);
      let intersects = raycaster.intersectObjects(this.pontosMesh);

      if (intersects.length === 0) {
        let p = '';
        if (Math.floor(this.n / 26) > 0) { p = Math.floor(this.n / 26) + '' }
        this.adicionaPonto(xDoMouse * 5, yDoMouse * 5, this.alfabeto[this.n % 26] + p);
        this.n++
      }


    }
  }
}
