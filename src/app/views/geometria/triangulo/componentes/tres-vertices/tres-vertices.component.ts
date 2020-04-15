import { Component, OnInit,OnDestroy, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-tres-vertices',
  templateUrl: './tres-vertices.component.html',
  styleUrls: ['./tres-vertices.component.scss']
})
export class TresVerticesComponent implements OnInit,OnDestroy {
  public formModel: FormGroup = this.fb.group({
    cordAX: [0, Validators.required],
    cordAY: [0, Validators.required],
    cordBX: [2, Validators.required],
    cordBY: [0, Validators.required],
    cordCX: [0, Validators.required],
    cordCY: [4, Validators.required],
    tipoLados: [''],
    tipoAngulos: [''],
    base: [0],
    altura: [0],
    ladoValor: [0],
    ladoLetra: [''],
    alturaVerticeA: [''],
    alturaVerticeB: [''],
    alturaVerticeC: [''],
    propriedade: [''],
    propriedadeDesenho: [''],
    tipoLadosIsosceles: [''],
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
  linhadestaqueAB: THREE.Mesh;
  linhadestaqueBC: THREE.Mesh;
  linhadestaqueCA: THREE.Mesh;

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

  public equacao = '2 \\times 2';

  letraA: THREE.Mesh;
  letraB: THREE.Mesh;
  letraC: THREE.Mesh;
  labelLadoA: THREE.Mesh;
  labelLadoB: THREE.Mesh;
  labelLadoC: THREE.Mesh;
  labelAltura: THREE.Mesh;
  ladoATemplate;
  ladoBTemplate;
  ladoCTemplate;
  intersected = false;
  intersectedObject: any;
  needScaleUpdate: boolean;
  pontoRetaBAY: number;
  pontoRetaBBY: number;
  stop = false;
  screen: any;

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
    this.acharPontos();
    this.calcularDistanciaPontos();
    this.criarBaseAltura();
    this.criarTriangulo();
    this.scene.add(this.triangulo);
    this.adicionarLinhasTriangulo();
    this.needScaleUpdate = true;
    this.formModel.get('propriedadeDesenho').setValue('BaseC');
    this.render();
  }

  render() {

    const self: TresVerticesComponent = this;

    (function render() {
      if(!self.stop){
      requestAnimationFrame(render);
      self.renderer.render(self.scene, self.camera);
      self.animate();
      }
    }());
  }

  public animate() {
    // if (this.isTriangle()) {
    this.acharPontos();
    this.calcularDistanciaPontos();
    this.atualizarBaseAltura();
    this.moverCameraCentroTriangulo();
    this.desabilitardestaque();
    this.calcularAngulos();
    this.calcularPerimetro();
    this.calcularArea();
    this.tipoTriangulos();
    this.calcularAlturaVertices();
    this.destaque();
    this.atualizarPontos();
    this.adicionarTexto('A', this.letraA, this.scene, this.distanciaCamera);
    this.adicionarTexto('B', this.letraB, this.scene, this.distanciaCamera);
    this.adicionarTexto('C', this.letraC, this.scene, this.distanciaCamera);
    this.adicionarTexto('a', this.labelLadoA, this.scene, this.distanciaCamera);
    this.adicionarTexto('b', this.labelLadoB, this.scene, this.distanciaCamera);
    this.adicionarTexto('c', this.labelLadoC, this.scene, this.distanciaCamera);
    this.adicionarTexto('h', this.labelAltura, this.scene, this.distanciaCamera);
    this.atualizarLabelVertices();
    this.atualizarLabelLados();
    this.atualizarLabelAltura();


    this.mostrarResultadoArea();
    this.mostrarResultadoBaseAltura();
    this.mostrarResultadoMedidaLados();
    this.mostrarResultadoPerimetro();
    // } else {
    //   console.log('Não é um triângulo');
    // }
  }

  // public isTriangle() {
  //   let a: number = this.formModel.get('anguloVerticeA').value * 1;
  //   let b: number = this.formModel.get('anguloVerticeB').value * 1;
  //   if (a+b<180) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  criarPonto(x: number, y: number) {
    const geometry = new THREE.CircleGeometry(this.distanciaCamera / 50, 10);
    const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const circle = new THREE.Mesh(geometry, material);
    circle.position.x = x;
    circle.position.y = y;
    circle.position.z = 0.1;
    return circle;
  }

  criarTriangulo() {
    this.geom = new THREE.Geometry();
    let v1 = new THREE.Vector3(this.cordAX, this.cordAY, 0);
    let v2 = new THREE.Vector3(this.cordBX, this.cordBY, 0);
    let v3 = new THREE.Vector3(this.cordCX, this.cordCY, 0);

    let triangle = new THREE.Triangle(v1, v2, v3);

    this.geom.vertices.push(triangle.a);
    this.geom.vertices.push(triangle.b);
    this.geom.vertices.push(triangle.c);

    this.geom.faces.push(new THREE.Face3(0, 1, 2));
    this.geom.verticesNeedUpdate = true;
    let mat = new THREE.MeshBasicMaterial({ color: 0x90EE90, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
    this.triangulo = new THREE.Mesh(this.geom, mat);
    this.geom.verticesNeedUpdate = true;
    this.triangulo.name = 'triangulo';
  }

  public acharPontos() {
    this.cordAX = this.formModel.get('cordAX').value * 1;
    this.cordAY = this.formModel.get('cordAY').value * 1;
    this.cordBX = this.formModel.get('cordBX').value * 1;
    this.cordBY = this.formModel.get('cordBY').value * 1;
    this.cordCX = this.formModel.get('cordCX').value * 1;
    this.cordCY = this.formModel.get('cordCY').value * 1;
  }

  public atualizarPontos() {
    if (this.needScaleUpdate) {
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
      this.needScaleUpdate = false;
    }
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

  public moverCameraCentroTriangulo() {
    let ax = this.cordAX;
    let ay = this.cordAY;
    let bx = this.cordBX;
    let by = this.cordBY;
    let cx = this.cordCX;
    let cy = this.cordCY;
    let e = Math.max(Math.abs(ax - bx), Math.abs(ax - cx), Math.abs(bx - cx),
      Math.abs(ay - cy), Math.abs(ay - by), Math.abs(by - cy));
    if ((!this.intersected) && (
      (this.distanciaCamera > ((e / 1.25) * 1.5)) ||
      ((this.camera.position.x + this.distanciaCamera) < this.cordAX) ||
      ((this.camera.position.x + this.distanciaCamera) < this.cordBX) ||
      ((this.camera.position.x + this.distanciaCamera) < this.cordCX) ||
      ((this.camera.position.x - this.distanciaCamera) > this.cordAX) ||
      ((this.camera.position.x - this.distanciaCamera) > this.cordBX) ||
      ((this.camera.position.x - this.distanciaCamera) > this.cordCX) ||
      ((this.camera.position.y + this.distanciaCamera) < this.cordAY) ||
      ((this.camera.position.y + this.distanciaCamera) < this.cordBY) ||
      ((this.camera.position.y + this.distanciaCamera) < this.cordCY) ||
      ((this.camera.position.y - this.distanciaCamera) > this.cordAY) ||
      ((this.camera.position.y - this.distanciaCamera) > this.cordBY) ||
      ((this.camera.position.y - this.distanciaCamera) > this.cordCY)
    )) {
      // E Escala
      console.log("ScaleUpdate!!\n");
      this.needScaleUpdate = true;
      this.camera.position.z = (e * 1.25) / 1.5;
      this.distanciaCamera = this.camera.position.z;

      // Centro triangulo
      let m: number = this.cordBX * 1;
      let f: number = this.cordCX;
      this.camera.position.x = (this.cordAX + this.cordBX + this.cordCX) / 3;
      this.camera.position.y = (this.cordAY + this.cordBY + this.cordCY) / 3;
    }
  }

  public adicionarLinhasTriangulo() {
    // //destaque
    // AB
    let spline = new THREE.CatmullRomCurve3([new THREE.Vector3(this.cordAX, this.cordAY),
    new THREE.Vector3(this.cordBX, this.cordBY)]);
    let materialLinhadestaque = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
    this.geometriaLinha = new THREE.TubeGeometry(spline, 1, 0.05, 7, false)
    this.linhadestaqueAB = new THREE.Mesh(this.geometriaLinha, materialLinhadestaque);
    this.scene.add(this.linhadestaqueAB);

    // BC
    spline = new THREE.CatmullRomCurve3([new THREE.Vector3(this.cordBX, this.cordBY),
    new THREE.Vector3(this.cordCX, this.cordCY)]);
    materialLinhadestaque = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
    this.geometriaLinha = new THREE.TubeGeometry(spline, 1, 0.05, 7, false);
    this.linhadestaqueBC = new THREE.Mesh(this.geometriaLinha, materialLinhadestaque);
    this.scene.add(this.linhadestaqueBC);

    // CA
    spline = new THREE.CatmullRomCurve3([new THREE.Vector3(this.cordAX, this.cordAY),
    new THREE.Vector3(this.cordCX, this.cordCY)]);
    materialLinhadestaque = new THREE.MeshBasicMaterial({ color: 0x0000FF });
    this.geometriaLinha = new THREE.TubeGeometry(spline, 1, 0.05, 7, false);
    this.linhadestaqueCA = new THREE.Mesh(this.geometriaLinha, materialLinhadestaque);
    this.scene.add(this.linhadestaqueCA);
  }

  public atualizarLinhasTriangulo(opacidadeAB: number, opacidadeBC: number, opacidadeCA: number) {
    let largura = this.distanciaCamera / 100;
    this.scene.remove(this.linhadestaqueAB);
    this.linhadestaqueAB.geometry.dispose();
    let spline = new THREE.CatmullRomCurve3([new THREE.Vector3(this.cordAX, this.cordAY),
    new THREE.Vector3(this.cordBX, this.cordBY)]);
    let materialLinhadestaque = new THREE.MeshBasicMaterial({ color: 0xFF0000, opacity: opacidadeAB });
    materialLinhadestaque.transparent = true;
    let geometriaLinha = new THREE.TubeGeometry(spline, 1, largura, 3, false)
    this.linhadestaqueAB = new THREE.Mesh(geometriaLinha, materialLinhadestaque);
    this.linhadestaqueAB.name = 'linhadestaqueAB';
    this.scene.add(this.linhadestaqueAB);

    this.scene.remove(this.linhadestaqueBC);
    this.linhadestaqueBC.geometry.dispose();
    spline = new THREE.CatmullRomCurve3([new THREE.Vector3(this.cordBX, this.cordBY),
    new THREE.Vector3(this.cordCX, this.cordCY)]);
    materialLinhadestaque = new THREE.MeshBasicMaterial({ color: 0x00FF00, opacity: opacidadeBC });
    materialLinhadestaque.transparent = true;
    let geometriaLinha2 = new THREE.TubeGeometry(spline, 1, largura, 3, false);
    this.linhadestaqueBC = new THREE.Mesh(geometriaLinha2, materialLinhadestaque);
    this.linhadestaqueBC.name = 'linhadestaqueBC';
    this.scene.add(this.linhadestaqueBC);

    this.scene.remove(this.linhadestaqueCA);
    this.linhadestaqueCA.geometry.dispose();
    spline = new THREE.CatmullRomCurve3([new THREE.Vector3(this.cordAX, this.cordAY),
    new THREE.Vector3(this.cordCX, this.cordCY)]);
    materialLinhadestaque = new THREE.MeshBasicMaterial({ color: 0x0000FF, opacity: opacidadeCA });
    materialLinhadestaque.transparent = true;
    let geometriaLinha3 = new THREE.TubeGeometry(spline, 1, largura, 3, false)
    this.linhadestaqueCA = new THREE.Mesh(geometriaLinha3, materialLinhadestaque);
    this.linhadestaqueCA.name = 'linhadestaqueCA';
    this.scene.add(this.linhadestaqueCA);
  }
  calcularDistanciaPontos() {
    let ax = this.cordAX;
    let ay = this.cordAY;
    let bx = this.cordBX;
    let by = this.cordBY;
    let cx = this.cordCX;
    let cy = this.cordCY;
    this.ladoC = (Math.sqrt(Math.pow((ay - by), 2) + Math.pow((bx - ax), 2)));
    this.ladoA = (Math.sqrt(Math.pow((cy - by), 2) + Math.pow((cx - bx), 2)));
    this.ladoB = (Math.sqrt(Math.pow((ay - cy), 2) + Math.pow((ax - cx), 2)));
    this.ladoATemplate = this.ladoA.toFixed(2);
    this.ladoBTemplate = this.ladoB.toFixed(2);
    this.ladoCTemplate = this.ladoC.toFixed(2);
  }

  public calcularAngulos(): void {
    let DAB = this.ladoA;
    let DBC = this.ladoB;
    let DCA = this.ladoC;
    this.anguloVerticeB = (Math.acos((Math.pow(DAB, 2) + Math.pow(DCA, 2) - Math.pow(DBC, 2)) /
      (2 * DAB * DCA)) * 180 / Math.PI).toFixed(2);
    this.anguloVerticeC = (Math.acos((Math.pow(DAB, 2) + Math.pow(DBC, 2) - Math.pow(DCA, 2)) /
      (2 * DAB * DBC)) * 180 / Math.PI).toFixed(2);
    this.anguloVerticeA = (Math.acos((Math.pow(DBC, 2) + Math.pow(DCA, 2) - Math.pow(DAB, 2)) /
      (2 * DBC * DCA)) * 180 / Math.PI).toFixed(2);

    this.anguloVerticeA = this.anguloVerticeA * 1;
    this.anguloVerticeB = this.anguloVerticeB * 1;
    this.anguloVerticeC = this.anguloVerticeC * 1;
  }

  public criarBaseAltura(): void {
    let distancia = this.camera.position.z * 2;
    let curva = new THREE.SplineCurve([new THREE.Vector2(-distancia, 0),
    new THREE.Vector2(distancia, 0)]);
    this.retaBaseB = new THREE.Geometry().setFromPoints(curva.getPoints(1));
    let materialLinha = new THREE.LineBasicMaterial({ color: 0x555555 });
    this.linhaRetaBaseA = new THREE.Line(this.retaBaseB, materialLinha);
    this.scene.add(this.linhaRetaBaseA);
    let AX = this.cordAX;
    let AY = this.cordAY;
    let BX = this.cordBX;
    let BY = this.cordBY;
    let CX = this.cordCX;
    let CY = this.cordCY;

    let mA = (CY - AY) / (CX - AX);
    let mB = (CY - BY) / (CX - BX);
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
    let mA2 = (-1 / mA);
    let mB2 = (-1 / mB);
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

  public atualizarBaseAltura(): void {
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

  public calcularPerimetro(): void {
    this.perimetro = this.ladoA + this.ladoB + this.ladoC;
  }

  public calcularArea(): void {
    let ax = this.cordAX;
    let ay = this.cordAY;
    let bx = this.cordBX;
    let by = this.cordBY;
    let cx = this.cordCX;
    let cy = this.cordCY;
    this.area = (Math.abs((ax * by) + (ay * cx) + (bx * cy) - (by * cx) - (ax * cy) - (ay * bx)) * 0.5);
    this.areaTemplate = this.area.toFixed(2);
  }

  public tipoTriangulos(): void {
    if (this.anguloVerticeA === 90 || this.anguloVerticeB === 90 || this.anguloVerticeC === 90) {
      this.formModel.get('tipoAngulos').setValue('Retângulo');
    } else if (this.anguloVerticeA > 90 || this.anguloVerticeB > 90 || this.anguloVerticeC > 90) {
      this.formModel.get('tipoAngulos').setValue('Obtusângulo');
    } else {
      this.formModel.get('tipoAngulos').setValue('Acutângulo');
    }
    let AB = this.ladoC;
    let BC = this.ladoA;
    let CA = this.ladoB;
    if (AB === BC && BC === CA) {
      this.formModel.get('tipoLados').setValue('Equilátero');
    } else if (AB !== BC && BC !== CA && CA !== AB) {
      this.formModel.get('tipoLados').setValue('Escaleno');
    } else {
      this.formModel.get('tipoLados').setValue('Isósceles');
      if (this.ladoATemplate === this.ladoBTemplate) {
        this.formModel.get('tipoLadosIsosceles').setValue('O triângulo é isósceles porque o lado a e o lado b possuem as medidas iguais.');
      } else if (this.ladoBTemplate === this.ladoCTemplate) {
        this.formModel.get('tipoLadosIsosceles').setValue('O triângulo é isósceles porque o lado b e o lado c possuem as medidas iguais.');
      } else {
        this.formModel.get('tipoLadosIsosceles').setValue('O triângulo é isósceles porque o lado c e o lado a possuem as medidas iguais.');
      }
    }
  }

  public calcularAlturaVertices(): void {
    this.formModel.get('alturaVerticeA').setValue((this.area * 2) / this.ladoA);
    this.formModel.get('alturaVerticeB').setValue((this.area * 2) / this.ladoB);
    this.formModel.get('alturaVerticeC').setValue((this.area * 2) / this.ladoC);
  }

  public desabilitardestaque() {
    this.atualizarLinhasTriangulo(0.2, 0.2, 0.2);
    this.linhaRetaBaseA.visible = false;
    this.linhaRetaBaseB.visible = false;
    this.linhaRetaBaseC.visible = false;
    this.linhaAlturaA.visible = false;
    this.linhaAlturaB.visible = false;
    this.linhaAlturaC.visible = false;
    this.triangulo.visible = false;
    this.labelAltura.visible = false;
  }

  public destaque() {
    let ep = this.formModel.get('propriedade').value; // Escolha Principal
    let es = this.formModel.get('propriedadeDesenho').value;  // Escolha Secundaria

    if (ep === 'area') {
      this.triangulo.visible = true;
      this.labelAltura.visible = true;
      if (es === 'BaseC') {
        this.linhaAlturaC.visible = true;
        this.linhaRetaBaseA.visible = true;
        this.atualizarLinhasTriangulo(1, 0.2, 0.2);
      } else if (es === 'BaseB') {
        this.linhaAlturaB.visible = true;
        this.linhaRetaBaseB.visible = true;
        this.atualizarLinhasTriangulo(0.2, 0.2, 1);
      } else {
        this.linhaAlturaA.visible = true;
        this.linhaRetaBaseC.visible = true;
        this.atualizarLinhasTriangulo(0.2, 1, 0.2);
      }
    } else if (ep === 'baseAltura') {
      this.labelAltura.visible = true;
      if (es === 'BaseC') {
        this.linhaAlturaC.visible = true;
        this.linhaRetaBaseA.visible = true;
        this.atualizarLinhasTriangulo(1, 0.2, 0.2);
      } else if (es === 'BaseB') {
        this.linhaAlturaB.visible = true;
        this.linhaRetaBaseB.visible = true;
        this.atualizarLinhasTriangulo(0.2, 0.2, 1);
      } else {
        this.linhaAlturaA.visible = true;
        this.linhaRetaBaseC.visible = true;
        this.atualizarLinhasTriangulo(0.2, 1, 0.2);
      }
    } else if (ep === 'medidaLados') {
      if (es === 'BaseC') {
        this.atualizarLinhasTriangulo(1, 0.2, 0.2);
      } else if (es === 'BaseB') {
        this.atualizarLinhasTriangulo(0.2, 0.2, 1);
      } else {
        this.atualizarLinhasTriangulo(0.2, 1, 0.2);
      }
    } else if (ep === 'perimetro') {
      this.atualizarLinhasTriangulo(1, 1, 1);
    } else if (ep === 'tipo') {
      this.atualizarLinhasTriangulo(1, 1, 1);
    }
  }

  public adicionarTexto(valor: string, geom: THREE.Mesh, scene: any, size: number) {
    let material = new THREE.MeshPhongMaterial({ color: 0x000000 });
    var loader = new THREE.FontLoader();
    loader.load('https://raw.githubusercontent.com/rollup/three-jsnext/master/examples/fonts/helvetiker_regular.typeface.json',
      function (font) {
        var geometry = new THREE.TextGeometry(valor,
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

  public atualizarLabelVertices(): void {
    let x, y, mx, my;
    let ed = 20; // divisor

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

  public atualizarLabelLados(): void {
    let centrox = (this.cordAX + this.cordBX + this.cordCX) / 3;
    let centroy = (this.cordAY + this.cordBY + this.cordCY) / 3;
    let x, y, mx, my;
    let ed = 20;  // divisor

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

  public atualizarLabelAltura(): void {
    let es = this.formModel.get('propriedadeDesenho').value;  // Escolha Secundaria
    if (es === 'BaseC') {
      this.labelAltura.position.x = (this.cordCX + this.pontoRetaIntersecCX) / 2;
      this.labelAltura.position.y = (this.cordCY + this.pontoRetaIntersecCY) / 2;
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
    let raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(xDoMouse, yDoMouse), this.camera);
    let intersects = raycaster.intersectObjects([this.a, this.b, this.c, this.linhadestaqueAB, this.linhadestaqueBC, this.linhadestaqueCA]);

    if (intersects.length > 0) {
      let intersectedObject = intersects[0].object;

      if (intersectedObject.name === 'linhadestaqueAB') {
        this.formModel.get('propriedadeDesenho').setValue('BaseC');
      } else
        if (intersectedObject.name === 'linhadestaqueBC') {
          this.formModel.get('propriedadeDesenho').setValue('BaseA');
        } else
          if (intersectedObject.name === 'linhadestaqueCA') {
            this.formModel.get('propriedadeDesenho').setValue('BaseB');
          }
    }
  }
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event) {

    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    if (event.buttons > 0) {
      let xDoMouse = event.offsetX;
      let yDoMouse = event.offsetY;

      xDoMouse = (xDoMouse / this.screen.width) * 2 - 1;
      yDoMouse = -(yDoMouse / this.screen.width) * 2 + 1;
      let raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(xDoMouse, yDoMouse), this.camera);
      let intersects = raycaster.intersectObjects([this.a, this.b, this.c]);

      if (intersects.length > 0) {
        this.intersected = true;
        this.intersectedObject = intersects[0].object;
      }
      if (this.intersected) {
        if (this.intersectedObject.name === `verticeA`) {
          this.formModel.get('cordAX').setValue(((xDoMouse * this.distanciaCamera) + this.camera.position.x).toFixed(1));
          this.formModel.get('cordAY').setValue(((yDoMouse * this.distanciaCamera) + this.camera.position.y).toFixed(1));
        } else {
          if (this.intersectedObject.name === `verticeB`) {
            this.formModel.get('cordBX').setValue(((xDoMouse * this.distanciaCamera) + this.camera.position.x).toFixed(1));
            this.formModel.get('cordBY').setValue(((yDoMouse * this.distanciaCamera) + this.camera.position.y).toFixed(1));
          } else {
            if (this.intersectedObject.name === `verticeC`) {
              this.formModel.get('cordCX').setValue(((xDoMouse * this.distanciaCamera) + this.camera.position.x).toFixed(1));
              this.formModel.get('cordCY').setValue(((yDoMouse * this.distanciaCamera) + this.camera.position.y).toFixed(1));
            }
          }
        }
      }
    } else {
      this.intersected = false;
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
    let base: number;
    let altura: number;
    let letraBase: string;

    if (selecionado === 'BaseA') {
      base = this.ladoATemplate;
      altura = (this.formModel.get('alturaVerticeA').value).toFixed(2);
      letraBase = 'a';
    } else if (selecionado === 'BaseB') {
      base = this.ladoBTemplate;
      altura = (this.formModel.get('alturaVerticeB').value).toFixed(2);
      letraBase = 'b';
    } else if (selecionado === 'BaseC') {
      base = this.ladoCTemplate;
      altura = (this.formModel.get('alturaVerticeC').value).toFixed(2);
      letraBase = 'c';
    }

    this.equacaoArea = 'A = \\frac{' + letraBase + '\\times h }{2}';
    this.equacaoArea2 = 'A = \\frac{' + base
      + '\\times' + altura + '}{2}';
    this.equacaoArea3 = 'A = ' + this.areaTemplate + 'u.a.';
  }

  public mostrarResultadoBaseAltura(): void {
    const selecionado = this.formModel.get('propriedadeDesenho').value;

    if (selecionado === 'BaseA') {
      this.formModel.get('base').setValue(this.ladoATemplate);
      this.formModel.get('altura').setValue((this.formModel.get('alturaVerticeA').value).toFixed(2));
    } else if (selecionado === 'BaseB') {
      this.formModel.get('base').setValue(this.ladoBTemplate);
      this.formModel.get('altura').setValue((this.formModel.get('alturaVerticeB').value).toFixed(2));
    } else if (selecionado === 'BaseC') {
      this.formModel.get('base').setValue(this.ladoCTemplate);
      this.formModel.get('altura').setValue((this.formModel.get('alturaVerticeC').value).toFixed(2));
    }
  }

  public mostrarResultadoMedidaLados(): void {
    const selecionado = this.formModel.get('propriedadeDesenho').value;

    if (selecionado === 'BaseA') {
      this.formModel.get('ladoValor').setValue(this.ladoATemplate);
      this.formModel.get('ladoLetra').setValue('a');
    } else if (selecionado === 'BaseB') {
      this.formModel.get('ladoValor').setValue(this.ladoBTemplate);
      this.formModel.get('ladoLetra').setValue('b');
    } else if (selecionado === 'BaseC') {
      this.formModel.get('ladoValor').setValue(this.ladoCTemplate);
      this.formModel.get('ladoLetra').setValue('c');
    }
  }

  public mostrarResultadoPerimetro(): void {
    this.equacaoPerimetro = 'P = a + b + c';
    this.equacaoPerimetro2 = 'P =' + this.ladoATemplate +
      '+' + this.ladoBTemplate +
      '+' + this.ladoCTemplate;
    this.equacaoPerimetro3 = 'P =' + this.perimetro.toFixed(2) + ' u.m.';
    this.perimetroTemplate = this.perimetro.toFixed(2);
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
