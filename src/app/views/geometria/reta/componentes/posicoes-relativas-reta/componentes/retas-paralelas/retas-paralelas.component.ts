
import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ponto } from '../../../../../ponto/componentes/construcao-ponto/ponto.model';

@Component({
  selector: 'app-retas-paralelas',
  templateUrl: './retas-paralelas.component.html',
  styleUrls: ['./retas-paralelas.component.scss']
})
export class RetasParalelasComponent implements OnInit {
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
  public material = new THREE.MeshPhongMaterial({ color: 0x000000 });
  public alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  public alfabetoMinusculo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  public n = -1;
  public m = 0;


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
    this.render();

  }
  render() {

    const self: RetasParalelasComponent = this;

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
    this.pontos.push(ponto);
  }
  adicionaReta(a: Ponto, b: Ponto, label: string) {
    const AX = a.getMesh().position.x;
    const AY = a.getMesh().position.y;
    const BX = b.getMesh().position.x;
    const BY = b.getMesh().position.y;
    const m = (BY - AY) / (BX - AX);

    const pontoRetaY = (m * (this.distanciaCamera - AX)) + AY;
    const pontoRetaY2 = (m * (-this.distanciaCamera - AX)) + AY;

    const curva = new THREE.SplineCurve([new THREE.Vector2(this.distanciaCamera, pontoRetaY),
    new THREE.Vector2(-this.distanciaCamera, pontoRetaY2)]);
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
    if (this.n < 0) {
      this.n++;
    } else if (this.n < 2) {
      // calculate mouse position in normalized device coordinates
      // (-1 to +1) for both components
      let xDoMouse = event.offsetX;
      let yDoMouse = event.offsetY;

      xDoMouse = (xDoMouse / 600) * 2 - 1;
      yDoMouse = -(yDoMouse / 600) * 2 + 1;
      this.adicionaPonto(xDoMouse * 5, yDoMouse * 5, this.alfabeto[this.n % 26]);

      if ((this.n % 2) != 0) {
        this.adicionaReta(this.pontos[this.n - 1], this.pontos[this.n], this.alfabetoMinusculo[0]);

      }
      this.n++;

    } else {
      let xDoMouse = event.offsetX;
      let yDoMouse = event.offsetY;

      xDoMouse = (xDoMouse / 600) * 2 - 1;
      yDoMouse = -(yDoMouse / 600) * 2 + 1;
      const m = (this.pontos[0].getMesh().position.y - this.pontos[1].getMesh().position.y) / (this.pontos[0].getMesh().position.x - this.pontos[1].getMesh().position.x);
      const pontoRetaY = (m * (xDoMouse * 5 - this.pontos[0].getMesh().position.x)) + this.pontos[0].getMesh().position.y;
      this.adicionaPonto(xDoMouse * 5, pontoRetaY, this.alfabeto[this.n % 26]);
      this.n++;
    }
  }


}



