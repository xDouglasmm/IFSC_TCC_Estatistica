import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ponto } from '../../../ponto/componentes/construcao-ponto/ponto.model'

@Component({
  selector: 'app-medida-angulo',
  templateUrl: './medida-angulo.component.html',
  styleUrls: ['./medida-angulo.component.scss']
})
export class MedidaAnguloComponent implements OnInit {
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
  public alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];
  public n = -1;
  public linhaMovel;
  public cordCX = -3;
  public cordCY = 3;
  public intersected = false;
  public intersectedObject;
  public angulo: number;
  public linhaAngulo;
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
    //linhaBase
    let largura = this.distanciaCamera / 100;
    let spline = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, -0.1),
    new THREE.Vector3(3, 0, -0.1)]);
    let materialLinhadestaque = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
    let geometriaLinha = new THREE.TubeGeometry(spline, 1, largura, 3, false)
    const linha = new THREE.Mesh(geometriaLinha, materialLinhadestaque);
    this.scene.add(linha);
    //linhaMovel
    spline = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 3),
    new THREE.Vector3(0, 0)]);
    materialLinhadestaque = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
    geometriaLinha = new THREE.TubeGeometry(spline, 1, largura, 3, false)
    this.linhaMovel = new THREE.Mesh(geometriaLinha, materialLinhadestaque);
    this.linhaMovel.name = 'linhaMovel';
    this.scene.add(this.linhaMovel);
    //pontoCentral
    this.adicionaPonto(0, 0, 'O');
    this.adicionaPonto(3, 0, 'B');
    this.adicionaPonto(this.cordCX, this.cordCY, 'C');
    this.calcularAngulo();
    this.criarLinhaAngulo();
    this.render();

  }
  render() {

    const self: MedidaAnguloComponent = this;

    (function render() {
      requestAnimationFrame(render);
      self.renderer.render(self.scene, self.camera);

      self.animate();
    }());
  }

  public animate() {
    this.atualizarLinhaMovel();
    this.calcularAngulo();
    this.atualizarLinhaAngulo();
  }
  calcularAngulo() {
    this.angulo = (Math.acos(
      (this.cordCX * 3) /
      ((Math.sqrt(Math.pow(this.cordCX, 2) + Math.pow(this.cordCY, 2))) * (3))) * 180 / Math.PI);
    if (this.cordCY < 0) {
      this.angulo = 360 - this.angulo;
    }
  }
  atualizarLinhaMovel() {
    let largura = this.distanciaCamera / 100;
    this.scene.remove(this.linhaMovel);
    this.linhaMovel.geometry.dispose();
    let spline = new THREE.CatmullRomCurve3([new THREE.Vector3(this.cordCX, this.cordCY),
    new THREE.Vector3(0, 0)]);
    let materialLinhadestaque = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
    let geometriaLinha = new THREE.TubeGeometry(spline, 1, largura, 3, false)
    this.linhaMovel = new THREE.Mesh(geometriaLinha, materialLinhadestaque);
    this.linhaMovel.name = 'linhaMovel';
    this.scene.add(this.linhaMovel);
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
  public criarLinhaAngulo() {
    if (this.angulo <= 180) {
      let pc = [];
      let p =this.angulo/30;
      let a = this.angulo/30;
      
      for (let i = 30; i > 0; i--) {
        let x = Math.cos((a) / (180 / Math.PI));
        let y = Math.sin((a) / (180 / Math.PI));
        a+=p;
        pc.push(new THREE.Vector2(x,y));
      }
      let curva = new THREE.SplineCurve(pc);
      this.linhaAngulo= new THREE.Geometry().setFromPoints(curva.getPoints(30));
      let materialLinha = new THREE.LineBasicMaterial({ color: 0x0 });
      let curvaAngulo = new THREE.Line(this.linhaAngulo, materialLinha);
      this.scene.add(curvaAngulo);
    }
  }
  public atualizarLinhaAngulo(){
   
      let pc = [];
      let p =this.angulo/30;
      let a = this.angulo/30;
      pc.push(new THREE.Vector2(1,0));
      for (let i = 30; i > 0; i--) {
        let x = Math.cos((a) / (180 / Math.PI));
        let y = Math.sin((a) / (180 / Math.PI));
        a+=p;
        pc.push(new THREE.Vector2(x,y));
      }
      let curva = new THREE.SplineCurve(pc);
      this.linhaAngulo.setFromPoints(curva.getPoints(30));
      this.linhaAngulo.verticesNeedUpdate = true;
    
  }
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event) {

    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    if (event.buttons > 0) {
      let xDoMouse = event.offsetX;
      let yDoMouse = event.offsetY;

      xDoMouse = (xDoMouse / 600) * 2 - 1;
      yDoMouse = -(yDoMouse / 600) * 2 + 1;
      let raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(xDoMouse, yDoMouse), this.camera);
      let intersects = raycaster.intersectObjects([this.pontos[2].getMesh()]);

      if (intersects.length > 0) {
        this.intersected = true;
        this.intersectedObject = intersects[0].object;
      }
      if (this.intersected) {
        this.cordCX = xDoMouse * this.distanciaCamera;
        this.cordCY = yDoMouse * this.distanciaCamera;
        this.pontos[2].setCordinates(this.cordCX, this.cordCY);
      }
    } else {
      this.intersected = false;
    }
  }


}
