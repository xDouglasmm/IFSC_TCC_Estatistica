import { Component, OnInit,OnDestroy, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lado-compreendido',
  templateUrl: './lado-compreendido.component.html',
  styleUrls: ['./lado-compreendido.component.scss']
})
export class LadoCompreendidoComponent implements OnInit,OnDestroy {

  public formModel: FormGroup = this.fb.group({
    anguloVerticeA: [45, [Validators.required, Validators.min(1)]],
    ladoB: [4, [Validators.required, Validators.min(1)]],
    ladoC: [6, [Validators.required, Validators.min(1)]],
    alturaVerticeA: [''],
    alturaVerticeB: [''],
    alturaVerticeC: [''],
    tipoLados: [''],
    tipoAngulos: [''],
    base: [0],
    altura: [0],
    ladoValor: [0],
    ladoLetra: [''],
    propriedade: [''],
    propriedadeDesenho: [''],
    tipoLadosIsosceles: [''],
    isTriangle: ['true'],
  });

  constructor(private fb: FormBuilder) { }

  @ViewChild('container') elementRef: ElementRef;
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  ladoA: number;
  ladoB: number;
  ladoC: number;
  informacaoEscolhida: Number;

  cordAX: number;
  cordAY: number;

  cordBX: number;
  cordBY: number;

  cordCX: number;
  cordCY: number;

  pontoA: number;
  pontoB: number;
  pontoC: number;

  distanciaCamera = 5;

  triangulo: THREE.Mesh;
  geom = new THREE.Geometry();
  a: THREE.Mesh;
  b: THREE.Mesh;
  c: THREE.Mesh;

  anguloVerticeA: any;
  anguloVerticeB: any;
  anguloVerticeC: any;

  retaBaseA: any;
  retaBaseB: any;
  retaBaseC: any;

  pontoRetaAAX: number;
  pontoRetaAAY: number;
  pontoRetaABX: number;
  pontoRetaABY: number;
  pontoRetaCAX: number;
  pontoRetaCAY: number;
  pontoRetaCBX: number;
  pontoRetaCBY: number;
  pontoRetaBAY: number;
  pontoRetaBBY: number;

  pontoRetaIntersecAX: number;
  pontoRetaIntersecAY: number;
  pontoRetaIntersecBX: number;
  pontoRetaIntersecBY: number;
  pontoRetaIntersecCX: number;
  pontoRetaIntersecCY: number;

  linhaRetaBaseA: THREE.Line;
  linhaRetaBaseB: THREE.Line;
  linhaRetaBaseC: THREE.Line;
  caminhoAlturaA: any;
  caminhoAlturaB: any;
  caminhoAlturaC: any;
  linhaAlturaA: THREE.Line;
  linhaAlturaB: THREE.Line;
  linhaAlturaC: THREE.Line;

  geometriaLinha: any;
  linhaDestaqueAB: THREE.Mesh;
  linhaDestaqueBC: THREE.Mesh;
  linhaDestaqueCA: THREE.Mesh;

  alturaVerticeA: number;
  alturaVerticeB: number;
  alturaVerticeC: number;
  area: number;
  areaTemplate: string;
  perimetro: number;
  perimetroTemplate: string;
  tipoLados: string;
  tipoAngulos: string;

  public equacaoArea: string;
  public equacaoArea2: string;
  public equacaoArea3: string;
  public equacaoBaseAltura: string;
  public equacaoBaseAltura2: string;
  public equacaoMedidaLados: string;
  public equacaoMedidaLados2: string;
  public equacaoPerimetro: string;
  public equacaoPerimetro2: string;
  public equacaoPerimetro3: string;
  public equacaoTipoLados: string;
  public equacaoTipoAngulos: string;

  letraA: THREE.Mesh;
  letraB: THREE.Mesh;
  letraC: THREE.Mesh;
  labelLadoA: THREE.Mesh;
  labelLadoB: THREE.Mesh;
  labelLadoC: THREE.Mesh;
  labelAltura: THREE.Mesh;
  stop = false;
  screen: any;
  notTriangle = '';

  ngOnInit() {
    this.container = this.elementRef.nativeElement;
    console.log(this.container);
    this.init();

    this.formModel.valueChanges.subscribe((value: any) => {
      this.animate();
    });
  }
  ngOnDestroy(){
    this.stop = true;
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
      
    }else {
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
    this.scene.background = new THREE.Color(0xffffff); // Cor de fundo canvas
    this.camera = new THREE.PerspectiveCamera(view.angle, view.aspect, view.near, view.far);
    this.renderer = new THREE.WebGLRenderer();
    this.scene.add(this.camera);
    this.camera.position.set(0, 0, this.distanciaCamera);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.container.appendChild(this.renderer.domElement);
    this.ladoA = 4;
    this.ladoB = 4;
    this.ladoC = 6;
    this.letraA = new THREE.Mesh();
    this.letraB = new THREE.Mesh();
    this.letraC = new THREE.Mesh();
    this.labelLadoA = new THREE.Mesh();
    this.labelLadoB = new THREE.Mesh();
    this.labelLadoC = new THREE.Mesh();
    this.labelAltura = new THREE.Mesh();
    this.a = new THREE.Mesh();
    this.b = new THREE.Mesh();
    this.c = new THREE.Mesh();
    this.achandoPontos();
    this.criaBaseAltura();
    this.criarTriangulo();
    this.scene.add(this.triangulo);
    this.moverCameraCentroTriangulo();
    this.adicionaLinhasTriangulo();
    this.formModel.get('propriedadeDesenho').setValue('BaseC');
    this.render();
  }

  render() {
    const self: LadoCompreendidoComponent = this;

    (function render() {
      if(!self.stop){
      requestAnimationFrame(render);
      self.renderer.render(self.scene, self.camera);
      self.animate();
      }
    }());
  }

  animate() {
    if (this.isTriangle()) {
      this.achandoPontos();
      this.atualizaBaseAltura();
      this.moverCameraCentroTriangulo();
      this.DesabilitaDestaque();
      this.calcularAngulos();
      this.calcularPerimetro();
      this.calcularArea();
      this.tipoTriangulos();
      this.CalcularAlturaVertices();
      this.Destaque();
      this.atualizarPontos();
      this.adicionaTexto('A', this.letraA, this.scene, this.distanciaCamera);
      this.adicionaTexto('B', this.letraB, this.scene, this.distanciaCamera);
      this.adicionaTexto('C', this.letraC, this.scene, this.distanciaCamera);
      this.adicionaTexto('a', this.labelLadoA, this.scene, this.distanciaCamera);
      this.adicionaTexto('b', this.labelLadoB, this.scene, this.distanciaCamera);
      this.adicionaTexto('c', this.labelLadoC, this.scene, this.distanciaCamera);
      this.adicionaTexto('h', this.labelAltura, this.scene, this.distanciaCamera);
      this.atualizaLabelVertices();
      this.atualizaLabelLados();
      this.atualizaLabelAltura();

      this.mostrarResultadoArea();
      this.mostrarResultadoBaseAltura();
      this.mostrarResultadoMedidaLados();
      this.mostrarResultadoPerimetro();
      this.formModel.get('isTriangle').setValue('true');
    } else {
      this.formModel.get('isTriangle').setValue('false');
      this.falseTriangle();
    }
  }

  isTriangle() {
    if (this.formModel.get('anguloVerticeA').value < 180) {
      this.notTriangle = '';
      this.formModel.get('isTriangle').setValue('true');
      return true;
    } else {
      this.notTriangle = 'O ângulo do vertice A deve ser maior que 0° e menor que 180°';
      this.formModel.get('isTriangle').setValue('false');
      return false;
    }
  }

  criarPonto(x: number, y: number) {
    const geometry = new THREE.CircleGeometry(this.distanciaCamera / 50, 10);
    const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const circle = new THREE.Mesh(geometry, material);
    circle.position.x = x;
    circle.position.y = y;
    return circle;
  }

  criarTriangulo() {
    this.geom = new THREE.Geometry();
    const v1 = new THREE.Vector3(this.cordAX, this.cordAY, 0);
    const v2 = new THREE.Vector3(this.cordBX, this.cordBY, 0);
    const v3 = new THREE.Vector3(this.cordCX, this.cordCY, 0);

    const triangle = new THREE.Triangle(v1, v2, v3);

    this.geom.vertices.push(triangle.a);
    this.geom.vertices.push(triangle.b);
    this.geom.vertices.push(triangle.c);

    this.geom.faces.push(new THREE.Face3(0, 1, 2));
    this.geom.verticesNeedUpdate = true;
    const mat = new THREE.MeshBasicMaterial({ color: 0x90EE90, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
    this.triangulo = new THREE.Mesh(this.geom, mat);
    this.geom.verticesNeedUpdate = true;
    this.triangulo.name = 'triangulo';
  }

  achandoPontos() {
    const a: number = this.formModel.get('anguloVerticeA').value;
    const b: number = this.formModel.get('ladoB').value;
    const c: number = this.formModel.get('ladoC').value;

    this.cordAX = 0;
    this.cordAY = 0;
    this.cordBX = c * 1;
    this.cordBY = 0;
    this.anguloVerticeA = a;

    const angulo = a * (Math.PI / 180);

    const x = Math.cos(angulo) * b;
    const y = Math.sin(angulo) * b;
    this.cordCX = x;
    this.cordCY = y;
    this.ladoA = (Math.sqrt(Math.pow(this.cordCY, 2) + Math.pow((this.cordBX - this.cordCX), 2)));
  }

  atualizarPontos() {
    this.scene.remove(this.a);
    this.scene.remove(this.b);
    this.scene.remove(this.c);
    this.a.geometry.dispose();
    this.b.geometry.dispose();
    this.c.geometry.dispose();
    this.a = this.criarPonto(this.cordAX, this.cordAY);
    this.a.name = `verticeA`;
    this.b = this.criarPonto(this.cordBX, this.cordBY);
    this.b.name = `verticeB`;
    this.c = this.criarPonto(this.cordCX, this.cordCY);
    this.c.name = `verticeC`;
    this.scene.add(this.a);
    this.scene.add(this.b);
    this.scene.add(this.c);
    this.a.position.x = this.cordAX;
    this.a.position.y = this.cordAY;
    this.b.position.x = this.cordBX;
    this.b.position.y = this.cordBY;
    this.c.position.x = this.cordCX;
    this.c.position.y = this.cordCY;

    // Atualiza Triangulo
    this.geom.verticesNeedUpdate = true;
    this.geom.vertices[0].set(this.a.position.x, this.a.position.y, 0);
    this.geom.vertices[1].set(this.b.position.x, this.b.position.y, 0);
    this.geom.vertices[2].set(this.c.position.x, this.c.position.y, 0);
  }

  moverCameraCentroTriangulo() {
    // e Escala
    let temp: number;
    let e: number = this.cordCY;
    if (this.cordCX >= this.cordAX && this.cordCX <= this.cordBX) {
      temp = this.cordBX;
      if (temp > e) {
        e = temp;
      }
    } else if (this.cordCX < this.cordAX) {
      temp = this.cordBX - this.cordCX;
      if (temp > e) {
        e = temp;
      }
    } else {
      temp = this.cordCX - this.cordAX;
      if (temp > e) {
        e = temp;
      }
    }

    this.camera.position.z = (e * 1.25) / 1.5;
    this.distanciaCamera = this.camera.position.z;
    // Centro triangulo
    const m: number = this.cordBX * 1;
    const f: number = this.cordCX;
    this.camera.position.x = (m + f) / 3;
    this.camera.position.y = (this.cordAY + this.cordBY + this.cordCY) / 3;
  }

  adicionaLinhasTriangulo() {
    // //Destaque
    // AB
    let spline = new THREE.CatmullRomCurve3([new THREE.Vector3(this.cordAX, this.cordAY),
    new THREE.Vector3(this.cordBX, this.cordBY)]);
    let materialLinhaDestaque = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
    this.geometriaLinha = new THREE.TubeGeometry(spline, 1, 0.05, 7, false);
    this.linhaDestaqueAB = new THREE.Mesh(this.geometriaLinha, materialLinhaDestaque);
    this.scene.add(this.linhaDestaqueAB);

    // BC
    spline = new THREE.CatmullRomCurve3([new THREE.Vector3(this.cordBX, this.cordBY),
    new THREE.Vector3(this.cordCX, this.cordCY)]);
    materialLinhaDestaque = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
    this.geometriaLinha = new THREE.TubeGeometry(spline, 1, 0.05, 7, false);
    this.linhaDestaqueBC = new THREE.Mesh(this.geometriaLinha, materialLinhaDestaque);
    this.scene.add(this.linhaDestaqueBC);

    // CA
    spline = new THREE.CatmullRomCurve3([new THREE.Vector3(this.cordAX, this.cordAY),
    new THREE.Vector3(this.cordCX, this.cordCY)]);
    materialLinhaDestaque = new THREE.MeshBasicMaterial({ color: 0x0000FF });
    this.geometriaLinha = new THREE.TubeGeometry(spline, 1, 0.05, 7, false);
    this.linhaDestaqueCA = new THREE.Mesh(this.geometriaLinha, materialLinhaDestaque);
    this.scene.add(this.linhaDestaqueCA);
  }

  atualizaLinhasTriangulo(opacidadeAB: number, opacidadeBC: number, opacidadeCA: number, ) {
    const largura = this.distanciaCamera / 100;
    this.scene.remove(this.linhaDestaqueAB);
    this.linhaDestaqueAB.geometry.dispose();
    let spline = new THREE.CatmullRomCurve3([new THREE.Vector3(this.cordAX, this.cordAY),
    new THREE.Vector3(this.cordBX, this.cordBY)]);
    let materialLinhaDestaque = new THREE.MeshBasicMaterial({ color: 0xFF0000, opacity: opacidadeAB });
    materialLinhaDestaque.transparent = true;
    const geometriaLinha = new THREE.TubeGeometry(spline, 1, largura, 7, false);
    this.linhaDestaqueAB = new THREE.Mesh(geometriaLinha, materialLinhaDestaque);
    this.linhaDestaqueAB.name = 'linhaDestaqueBC';
    this.scene.add(this.linhaDestaqueAB);

    this.scene.remove(this.linhaDestaqueBC);
    this.linhaDestaqueBC.geometry.dispose();
    spline = new THREE.CatmullRomCurve3([new THREE.Vector3(this.cordBX, this.cordBY),
    new THREE.Vector3(this.cordCX, this.cordCY)]);
    materialLinhaDestaque = new THREE.MeshBasicMaterial({ color: 0x00FF00, opacity: opacidadeBC });
    materialLinhaDestaque.transparent = true;
    const geometriaLinha2 = new THREE.TubeGeometry(spline, 1, largura, 7, false);
    this.linhaDestaqueBC = new THREE.Mesh(geometriaLinha2, materialLinhaDestaque);
    this.linhaDestaqueBC.name = 'linhaDestaqueAB';
    this.scene.add(this.linhaDestaqueBC);

    this.scene.remove(this.linhaDestaqueCA);
    this.linhaDestaqueCA.geometry.dispose();
    spline = new THREE.CatmullRomCurve3([new THREE.Vector3(this.cordAX, this.cordAY),
    new THREE.Vector3(this.cordCX, this.cordCY)]);
    materialLinhaDestaque = new THREE.MeshBasicMaterial({ color: 0x0000FF, opacity: opacidadeCA });
    materialLinhaDestaque.transparent = true;
    const geometriaLinha3 = new THREE.TubeGeometry(spline, 1, largura, 7, false);
    this.linhaDestaqueCA = new THREE.Mesh(geometriaLinha3, materialLinhaDestaque);
    this.linhaDestaqueCA.name = 'linhaDestaqueCA';
    this.scene.add(this.linhaDestaqueCA);
  }

  calcularAngulos() {
    const DAB = this.ladoA;
    const DBC = this.formModel.get('ladoB').value;
    const DCA = this.formModel.get('ladoC').value;
    this.anguloVerticeB = (Math.acos((Math.pow(DAB, 2) + Math.pow(DCA, 2) - Math.pow(DBC, 2)) /
      (2 * DAB * DCA)) * 180 / Math.PI).toFixed(2);
    this.anguloVerticeC = (Math.acos((Math.pow(DAB, 2) + Math.pow(DBC, 2) - Math.pow(DCA, 2)) /
      (2 * DAB * DBC)) * 180 / Math.PI).toFixed(2);
    // this.anguloVerticeA = (Math.acos((Math.pow(DBC, 2) + Math.pow(DCA, 2) - Math.pow(DAB, 2)) /
    // (2 * DBC * DCA)) * 180 / Math.PI).toFixed(2);
  }

  criaBaseAltura() {
    const distancia = this.camera.position.z * 2;
    let curva = new THREE.SplineCurve([new THREE.Vector2(-distancia, 0),
    new THREE.Vector2(distancia, 0)]);
    this.retaBaseB = new THREE.Geometry().setFromPoints(curva.getPoints(1));
    let materialLinha = new THREE.LineBasicMaterial({ color: 0x555555 });
    this.linhaRetaBaseA = new THREE.Line(this.retaBaseB, materialLinha);
    this.scene.add(this.linhaRetaBaseA);
    const AX = this.cordAX;
    const AY = this.cordAY;
    const BX = this.cordBX;
    const BY = this.cordBY;
    const CX = this.cordCX;
    const CY = this.cordCY;

    const mA = (CY - AY) / (CX - AX);
    const mB = (CY - BY) / (CX - BX);
    this.pontoRetaAAY = (mA * (this.distanciaCamera * 2 - AX)) + AY;
    this.pontoRetaABY = (mA * (-this.distanciaCamera * 2 - AX)) + AY;

    curva = new THREE.SplineCurve([new THREE.Vector2(this.camera.position.z * 2, this.pontoRetaAAY),
    new THREE.Vector2(-this.camera.position.z * 2, this.pontoRetaABY)]);
    this.retaBaseA = new THREE.Geometry().setFromPoints(curva.getPoints(1));
    materialLinha = new THREE.LineBasicMaterial({ color: 0x555555 });
    this.linhaRetaBaseB = new THREE.Line(this.retaBaseA, materialLinha);
    this.scene.add(this.linhaRetaBaseB);

    this.pontoRetaCAY = (mB * (this.distanciaCamera * 2 - BX)) + BY;
    this.pontoRetaCBY = (mB * (-this.distanciaCamera * 2 - BX)) + BY;

    curva = new THREE.SplineCurve([new THREE.Vector2(this.camera.position.z * 2, this.pontoRetaCAY),
    new THREE.Vector2(-this.camera.position.z * 2, this.pontoRetaCBY)]);
    this.retaBaseC = new THREE.Geometry().setFromPoints(curva.getPoints(1));
    materialLinha = new THREE.LineBasicMaterial({ color: 0x555555 });
    this.linhaRetaBaseC = new THREE.Line(this.retaBaseC, materialLinha);
    this.scene.add(this.linhaRetaBaseC);
    const mA2 = (-1 / mA);
    const mB2 = (-1 / mB);
    this.pontoRetaIntersecAX = ((-mA2 * BX) + BY + (mA * AX) - AY) / (-mA2 + mA);
    this.pontoRetaIntersecAY = ((mA2) * (this.pontoRetaIntersecAX - BX)) + BY;
    // linha da altura
    curva = new THREE.SplineCurve([new THREE.Vector2(CX, CY),
    new THREE.Vector2(CX, 0)]);
    this.caminhoAlturaC = new THREE.Geometry().setFromPoints(curva.getPoints(30));
    materialLinha = new THREE.LineBasicMaterial({ color: 0x0000CD });
    this.linhaAlturaC = new THREE.LineSegments(this.caminhoAlturaC, materialLinha);
    this.scene.add(this.linhaAlturaC);


    // linha da altura
    curva = new THREE.SplineCurve([new THREE.Vector2(BX, BY),
    new THREE.Vector2(this.pontoRetaIntersecAX, this.pontoRetaIntersecAY)]);
    this.caminhoAlturaA = new THREE.Geometry().setFromPoints(curva.getPoints(30));
    materialLinha = new THREE.LineBasicMaterial({ color: 0x0000CD });
    this.linhaAlturaB = new THREE.LineSegments(this.caminhoAlturaA, materialLinha);
    this.scene.add(this.linhaAlturaB);

    this.pontoRetaIntersecBX = ((-mB2 * AX) + AY + (mB * BX) - BY) / (-mB2 + mB);
    this.pontoRetaIntersecBY = ((mB2) * (this.pontoRetaIntersecBX - AX)) + AY;
    // linha da altura
    curva = new THREE.SplineCurve([new THREE.Vector2(AX, AY),
    new THREE.Vector2(this.pontoRetaIntersecBX, this.pontoRetaIntersecBY)]);
    this.caminhoAlturaB = new THREE.Geometry().setFromPoints(curva.getPoints(30));
    materialLinha = new THREE.LineBasicMaterial({ color: 0x0000CD });
    this.linhaAlturaA = new THREE.LineSegments(this.caminhoAlturaB, materialLinha);
    this.scene.add(this.linhaAlturaA);
  }

  atualizaBaseAltura() {
    let AX = this.cordAX;
    let AY = this.cordAY;
    let BX = this.cordBX;
    let BY = this.cordBY;
    let CX = this.cordCX;
    let CY = this.cordCY;
    let distancia = this.camera.position.z + 10;
    let curva;
    let mC = (BY - AY) / (BX - AX);
    let mB = (CY - BY) / (CX - BX);
    let mA = (CY - AY) / (CX - AX);
    let mA2 = (-1 / mA);
    let mB2 = (-1 / mB);
    let mC2 = (-1 / mC);

    if (BX === AX) {
      curva = new THREE.SplineCurve([new THREE.Vector2(AX, distancia),
      new THREE.Vector2(AX, -distancia)]);
    } else {
      this.pontoRetaBAY = (mC * (distancia - AX)) + AY;
      this.pontoRetaBBY = (mC * (-distancia - AX)) + AY;
      curva = new THREE.SplineCurve([new THREE.Vector2(-distancia, this.pontoRetaBBY),
      new THREE.Vector2(distancia, this.pontoRetaBAY)]);
    }
    this.retaBaseB.setFromPoints(curva.getPoints(1));
    this.retaBaseB.verticesNeedUpdate = true;
    if (CX === AX) {
      curva = new THREE.SplineCurve([new THREE.Vector2(AX, distancia),
      new THREE.Vector2(AX, -distancia)]);
    } else {
      this.pontoRetaAAY = (mA * ((distancia) - AX)) + AY;
      this.pontoRetaABY = (mA * ((-distancia) - AX)) + AY;
      curva = new THREE.SplineCurve([new THREE.Vector2(distancia, this.pontoRetaAAY),
      new THREE.Vector2(-distancia, this.pontoRetaABY)]);
    }
    this.retaBaseA.setFromPoints(curva.getPoints(1));
    this.retaBaseA.verticesNeedUpdate = true;

    if (CX === BX) {
      curva = new THREE.SplineCurve([new THREE.Vector2(BX, distancia),
      new THREE.Vector2(BX, -distancia)]);
    } else {
      this.pontoRetaCAY = (mB * (distancia - BX)) + BY;
      this.pontoRetaCBY = (mB * (-distancia - BX)) + BY;
      curva = new THREE.SplineCurve([new THREE.Vector2(distancia, this.pontoRetaCAY),
      new THREE.Vector2(-distancia, this.pontoRetaCBY)]);
    }
    this.retaBaseC.setFromPoints(curva.getPoints(1));
    this.retaBaseC.verticesNeedUpdate = true;

    // linha da altura
    if (BX === AX) {
      this.pontoRetaIntersecCX = AX;
      this.pontoRetaIntersecCY = CY;
    } else if (BY === AY) {
      this.pontoRetaIntersecCX = CX;
      this.pontoRetaIntersecCY = AY;
    } else {
      this.pontoRetaIntersecCX = ((-mC2 * CX) + CY + (mC * BX) - BY) / (-mC2 + mC);
      this.pontoRetaIntersecCY = ((mC2) * (this.pontoRetaIntersecCX - CX)) + CY;
    }
    curva = new THREE.SplineCurve([new THREE.Vector2(CX, CY),
    new THREE.Vector2(this.pontoRetaIntersecCX, this.pontoRetaIntersecCY)]);
    this.caminhoAlturaC.setFromPoints(curva.getPoints(30));
    this.caminhoAlturaC.verticesNeedUpdate = true;

    // linha da altura
    if (CX === AX) {
      this.pontoRetaIntersecAX = AX;
      this.pontoRetaIntersecAY = BY;
    } else if (CY === AY) {
      this.pontoRetaIntersecAX = BX;
      this.pontoRetaIntersecAY = AY;
    } else {
      this.pontoRetaIntersecAX = ((-mA2 * BX) + BY + (mA * AX) - AY) / (-mA2 + mA);
      this.pontoRetaIntersecAY = ((mA2) * (this.pontoRetaIntersecAX - BX)) + BY;
    }
    curva = new THREE.SplineCurve([new THREE.Vector2(BX, BY),
    new THREE.Vector2(this.pontoRetaIntersecAX, this.pontoRetaIntersecAY)]);
    this.caminhoAlturaA.setFromPoints(curva.getPoints(30));
    this.caminhoAlturaA.verticesNeedUpdate = true;

    // linha da altura
    if (CX === BX) {
      this.pontoRetaIntersecBX = BX;
      this.pontoRetaIntersecBY = AY;
    } else {
      this.pontoRetaIntersecBX = ((-mB2 * AX) + AY + (mB * BX) - BY) / (-mB2 + mB);
      this.pontoRetaIntersecBY = ((mB2) * (this.pontoRetaIntersecBX - AX)) + AY;
    }
    curva = new THREE.SplineCurve([new THREE.Vector2(AX, AY),
    new THREE.Vector2(this.pontoRetaIntersecBX, this.pontoRetaIntersecBY)]);
    this.caminhoAlturaB.setFromPoints(curva.getPoints(30));
    this.caminhoAlturaB.verticesNeedUpdate = true;
  }

  calcularPerimetro() {
    this.perimetro = this.ladoA + this.ladoB + this.ladoC;
  }

  calcularArea() {
    const ax = this.cordAX;
    const ay = this.cordAY;
    const bx = this.cordBX;
    const by = this.cordBY;
    const cx = this.cordCX;
    const cy = this.cordCY;
    this.area = (Math.abs((ax * by) + (ay * cx) + (bx * cy) - (by * cx) - (ax * cy) - (ay * bx)) * 0.5);
    this.areaTemplate = this.area.toFixed(2);
  }

  tipoTriangulos() {
    if (this.anguloVerticeA === 90 || this.anguloVerticeB === 90 || this.anguloVerticeC === 90) {
      this.formModel.get('tipoAngulos').setValue('Retângulo');
    } else if (this.anguloVerticeA > 90 || this.anguloVerticeB > 90 || this.anguloVerticeC > 90) {
      this.formModel.get('tipoAngulos').setValue('Obtusângulo');
    } else {
      this.formModel.get('tipoAngulos').setValue('Acutângulo');
    }
    const AB = this.formModel.get('ladoC').value;
    const BC = this.ladoA;
    const CA = this.formModel.get('ladoB').value;
    if (AB === BC && BC === CA) {
      this.formModel.get('tipoLados').setValue('Equilátero');
    } else if (AB !== BC && BC !== CA && CA !== AB) {
      this.formModel.get('tipoLados').setValue('Escaleno');
    } else {
      this.formModel.get('tipoLados').setValue('Isósceles');
      if (this.ladoA === this.formModel.get('ladoB').value) {
        this.formModel.get('tipoLadosIsosceles').setValue('O triângulo é isósceles porque o lado a e o lado b possuem as medidas iguais.');
      } else if (this.formModel.get('ladoB').value === this.formModel.get('ladoC').value) {
        this.formModel.get('tipoLadosIsosceles').setValue('O triângulo é isósceles porque o lado b e o lado c possuem as medidas iguais.');
      } else {
        this.formModel.get('tipoLadosIsosceles').setValue('O triângulo é isósceles porque o lado c e o lado a possuem as medidas iguais.');
      }
    }
  }

  CalcularAlturaVertices() {
    this.formModel.get('alturaVerticeA').setValue((this.area * 2) / this.ladoA);
    this.formModel.get('alturaVerticeB').setValue((this.area * 2) / this.formModel.get('ladoB').value);
    this.formModel.get('alturaVerticeC').setValue((this.area * 2) / this.formModel.get('ladoC').value);
  }

  DesabilitaDestaque() {
    this.atualizaLinhasTriangulo(0.2, 0.2, 0.2);
    this.linhaRetaBaseA.visible = false;
    this.linhaRetaBaseB.visible = false;
    this.linhaRetaBaseC.visible = false;
    this.linhaAlturaA.visible = false;
    this.linhaAlturaB.visible = false;
    this.linhaAlturaC.visible = false;
    this.triangulo.visible = false;
    this.labelAltura.visible = false;
  }

  Destaque() {
    const ep = this.formModel.get('propriedade').value; // Escolha Principal
    const es = this.formModel.get('propriedadeDesenho').value;  // Escolha Secundaria

    if (ep === 'area') {
      this.triangulo.visible = true;
      this.labelAltura.visible = true;
      if (es === 'BaseC') {
        this.linhaAlturaC.visible = true;
        this.linhaRetaBaseA.visible = true;
        this.atualizaLinhasTriangulo(1, 0.2, 0.2);
      } else if (es === 'BaseB') {
        this.linhaAlturaB.visible = true;
        this.linhaRetaBaseB.visible = true;
        this.atualizaLinhasTriangulo(0.2, 0.2, 1);
      } else {
        this.linhaAlturaA.visible = true;
        this.linhaRetaBaseC.visible = true;
        this.atualizaLinhasTriangulo(0.2, 1, 0.2);
      }
    } else if (ep === 'baseAltura') {
      this.labelAltura.visible = true;
      if (es === 'BaseC') {
        this.linhaAlturaC.visible = true;
        this.linhaRetaBaseA.visible = true;
        this.atualizaLinhasTriangulo(1, 0.2, 0.2);
      } else if (es === 'BaseB') {
        this.linhaAlturaB.visible = true;
        this.linhaRetaBaseB.visible = true;
        this.atualizaLinhasTriangulo(0.2, 0.2, 1);
      } else {
        this.linhaAlturaA.visible = true;
        this.linhaRetaBaseC.visible = true;
        this.atualizaLinhasTriangulo(0.2, 1, 0.2);
      }
    } else if (ep === 'medidaLados') {
      if (es === 'BaseC') {
        this.atualizaLinhasTriangulo(1, 0.2, 0.2);
      } else if (es === 'BaseB') {
        this.atualizaLinhasTriangulo(0.2, 0.2, 1);
      } else {
        this.atualizaLinhasTriangulo(0.2, 1, 0.2);
      }
    } else if (ep === 'perimetro') {
      this.atualizaLinhasTriangulo(1, 1, 1);
    } else if (ep === 'tipo') {
      this.atualizaLinhasTriangulo(1, 1, 1);
    }
  }

  adicionaTexto(valor: string, geom: THREE.Mesh, scene: any, size: number) {
    const material = new THREE.MeshPhongMaterial({ color: 0x000000 });
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

  atualizaLabelVertices() {
    let x, y, mx, my;
    const ed = 20; // divisor
    // A
    mx = (this.cordBX + this.cordCX) / 2;
    my = (this.cordBY + this.cordCY) / 2;
    if (this.cordAX > mx) {
      x = this.cordAX + this.distanciaCamera / (ed / 2);
    } else {
      x = this.cordAX - this.distanciaCamera / (ed / 2);
    } if (this.cordAY > my) {
      y = this.cordAY + this.distanciaCamera / (ed / 2);
    } else {
      y = this.cordAY - this.distanciaCamera / (ed / 2);
    }

    this.letraA.position.x = x;
    this.letraA.position.y = y;
    // B
    mx = (this.cordAX + this.cordCX) / 2;
    my = (this.cordAY + this.cordCY) / 2;
    if (this.cordBX > mx) {
      x = this.cordBX + this.distanciaCamera / (ed / 2);
    } else {
      x = this.cordBX - this.distanciaCamera / (ed / 2);
    } if (this.cordBY > my) {
      y = this.cordBY + this.distanciaCamera / (ed / 2);
    } else {
      y = this.cordBY - this.distanciaCamera / (ed / 2);
    }
    this.letraB.position.x = x;
    this.letraB.position.y = y;
    // C
    mx = (this.cordBX + this.cordAX) / 2;
    my = (this.cordBY + this.cordAY) / 2;
    if (this.cordCX > mx) {
      x = this.cordCX + this.distanciaCamera / (ed / 2);
    } else {
      x = this.cordCX - this.distanciaCamera / (ed / 2);
    } if (this.cordCY > my) {
      y = this.cordCY + this.distanciaCamera / (ed / 2);
    } else {
      y = this.cordCY - this.distanciaCamera / (ed / 2);
    }
    this.letraC.position.x = x;
    this.letraC.position.y = y;
  }

  atualizaLabelLados() {
    const centrox = (this.cordAX + this.cordBX + this.cordCX) / 3;
    const centroy = (this.cordAY + this.cordBY + this.cordCY) / 3;
    let x, y, mx, my;
    const ed = 20; // divisor
    // A
    mx = (this.cordBX + this.cordCX) / 2;
    my = (this.cordBY + this.cordCY) / 2;
    if (mx > centrox) {
      x = mx + this.distanciaCamera / (ed / 2);
    } else {
      x = mx - this.distanciaCamera / (ed / 2);
    } if (my > centroy) {
      y = my + this.distanciaCamera / (ed / 2);
    } else {
      y = my - this.distanciaCamera / (ed / 2);
    }

    this.labelLadoA.position.x = x;
    this.labelLadoA.position.y = y;
    // B
    mx = (this.cordAX + this.cordCX) / 2;
    my = (this.cordAY + this.cordCY) / 2;
    if (mx > centrox) {
      x = mx + this.distanciaCamera / (ed / 2);
    } else {
      x = mx - this.distanciaCamera / (ed / 2);
    } if (my > centroy) {
      y = my + this.distanciaCamera / (ed / 2);
    } else {
      y = my - this.distanciaCamera / (ed / 2);
    }
    this.labelLadoB.position.x = x;
    this.labelLadoB.position.y = y;
    // C
    mx = (this.cordBX + this.cordAX) / 2;
    my = (this.cordBY + this.cordAY) / 2;
    if (mx > centrox) {
      x = mx + this.distanciaCamera / (ed / 2);
    } else {
      x = mx - this.distanciaCamera / (ed / 2);
    } if (my > centroy) {
      y = my + this.distanciaCamera / (ed / 2);
    } else {
      y = my - this.distanciaCamera / (ed / 2);
    }
    this.labelLadoC.position.x = x;
    this.labelLadoC.position.y = y;
  }

  atualizaLabelAltura() {
    const es = this.formModel.get('propriedadeDesenho').value;  // Escolha Secundaria
    if (es === 'BaseC') {
      this.labelAltura.position.x = this.cordCX;
      this.labelAltura.position.y = this.cordCY / 2;
    } else if (es === 'BaseB') {
      this.labelAltura.position.x = (this.cordBX + this.pontoRetaIntersecAX) / 2;
      this.labelAltura.position.y = (this.cordBY + this.pontoRetaIntersecAY) / 2;
    } else {
      this.labelAltura.position.x = (this.cordAX + this.pontoRetaIntersecBX) / 2;
      this.labelAltura.position.y = (this.cordAY + this.pontoRetaIntersecBY) / 2;
    }
  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:touch', ['$event'])
  onMouseClick(event) {
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    let xDoMouse = event.offsetX;
    let yDoMouse = event.offsetY;

    xDoMouse = (xDoMouse / this.screen.width) * 2 - 1;
    yDoMouse = -(yDoMouse / this.screen.width) * 2 + 1;
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(xDoMouse, yDoMouse), this.camera);
    const intersects = raycaster.intersectObjects([this.linhaDestaqueAB, this.linhaDestaqueBC, this.linhaDestaqueCA]);

    if (intersects.length > 0) {
      const intersectedObject = intersects[0].object;

      if (intersectedObject.name === 'linhaDestaqueAB') {
        this.formModel.get('propriedadeDesenho').setValue('BaseA');
      } else
        if (intersectedObject.name === 'linhaDestaqueBC') {
          this.formModel.get('propriedadeDesenho').setValue('BaseC');
        } else
          if (intersectedObject.name === 'linhaDestaqueCA') {
            this.formModel.get('propriedadeDesenho').setValue('BaseB');
          }
    }
  }

  public onSetArea(): void {
    this.formModel.get('propriedade').setValue('area');
  }

  public onSetBaseAltura(): void {
    this.formModel.get('propriedade').setValue('baseAltura');
  }

  public onSetMedidaLados(): void {
    this.formModel.get('propriedade').setValue('medidaLados');
  }

  public onSetPerimetro(): void {
    this.formModel.get('propriedade').setValue('perimetro');
  }

  public onSetTipoLados(): void {
    this.formModel.get('propriedade').setValue('tipoLados');
  }

  public onSetTipoAngulos(): void {
    this.formModel.get('propriedade').setValue('tipoAngulos');
  }

  public onSetMedidaAngulos(): void {
    this.formModel.get('propriedade').setValue('medidaAngulos');
  }

  public mostrarResultadoArea(): void {

    const selecionado = this.formModel.get('propriedadeDesenho').value;
    let base: any;
    let altura: number;
    let letraBase: string;

    if (selecionado === 'BaseA') {
      base = this.ladoA.toFixed(2);
      altura = (this.formModel.get('alturaVerticeA').value).toFixed(2);
      letraBase = 'a';
    } else if (selecionado === 'BaseB') {
      base = this.formModel.get('ladoB').value;
      altura = (this.formModel.get('alturaVerticeB').value).toFixed(2);
      letraBase = 'b';
    } else if (selecionado === 'BaseC') {
      base = this.formModel.get('ladoC').value;
      altura = (this.formModel.get('alturaVerticeC').value).toFixed(2);
      letraBase = 'c';
    }

    this.equacaoArea = 'A = \\frac{' + letraBase + '\\times h }{2}';
    this.equacaoArea2 = 'A = \\frac{' + base.toFixed(2)
      + '\\times' + altura + '}{2}';
    this.equacaoArea3 = 'A = ' + this.areaTemplate + 'u.a.';
  }

  public mostrarResultadoBaseAltura(): void {
    const selecionado = this.formModel.get('propriedadeDesenho').value;

    if (selecionado === 'BaseA') {
      this.formModel.get('base').setValue(this.ladoA.toFixed(2));
      this.formModel.get('altura').setValue((this.formModel.get('alturaVerticeA').value).toFixed(2));
    } else if (selecionado === 'BaseB') {
      this.formModel.get('base').setValue(this.formModel.get('ladoB').value.toFixed(2));
      this.formModel.get('altura').setValue((this.formModel.get('alturaVerticeB').value).toFixed(2));
    } else if (selecionado === 'BaseC') {
      this.formModel.get('base').setValue(this.formModel.get('ladoC').value.toFixed(2));
      this.formModel.get('altura').setValue((this.formModel.get('alturaVerticeC').value).toFixed(2));
    }
  }

  public mostrarResultadoMedidaLados(): void {
    const selecionado = this.formModel.get('propriedadeDesenho').value;

    if (selecionado === 'BaseA') {
      this.formModel.get('ladoValor').setValue(this.ladoA.toFixed(2));
      this.formModel.get('ladoLetra').setValue('a');
    } else if (selecionado === 'BaseB') {
      this.formModel.get('ladoValor').setValue(this.formModel.get('ladoB').value.toFixed(2));
      this.formModel.get('ladoLetra').setValue('b');
    } else if (selecionado === 'BaseC') {
      this.formModel.get('ladoValor').setValue(this.formModel.get('ladoC').value.toFixed(2));
      this.formModel.get('ladoLetra').setValue('c');
    }
  }

  public mostrarResultadoPerimetro(): void {
    this.equacaoPerimetro = 'P = a + b + c';
    this.equacaoPerimetro2 = 'P =' + this.ladoA.toFixed(2) +
      '+' + this.formModel.get('ladoB').value.toFixed(2) +
      '+' + this.formModel.get('ladoC').value.toFixed(2);
    this.equacaoPerimetro3 = 'P =' + this.perimetro.toFixed(2) + ' u.m.';
    this.perimetroTemplate = this.perimetro.toFixed(2);
  }
  falseTriangle(){
    this.camera.position.x = -300;
    this.camera.position.y = -300;
    this.camera.position.z = 5;

  }


  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    if (event.target.innerWidth > 1200) {
      this.screen.width = event.target.innerWidth / 2.5;
      this.screen.height = event.target.innerWidth / 2.5;
    } else if (event.target.innerWidth > 769) {
      this.screen.width = event.target.innerWidth / 1.5;
      this.screen.height = event.target.innerWidth / 1.5; 
    }else {
      this.screen.width = event.target.innerWidth * 0.9;
      this.screen.height =event.target.innerWidth * 0.9;
    }
    this.renderer.setSize(this.screen.width,this.screen.height)
  }
}
