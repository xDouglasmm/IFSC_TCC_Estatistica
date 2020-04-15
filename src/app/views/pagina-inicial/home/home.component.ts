import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

declare var require: any;

interface ILink {
  title: string;
  routerLink: string;
}

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public numerosEOperacoes: Array<ILink>;
  public algebraEFuncoes: Array<ILink>;
  public geometria: Array<ILink>;
  public estatistica: Array<ILink>;

  public imageBannerOne: string;
  public imageBannerTwo: string;
  public imageBannerThree: string;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.populaIcones();
  }

  ngOnInit() {
    this.imageBannerOne = require('assets/images/banners/banner_da_hora.jpg');
    this.imageBannerTwo = require('assets/images/banners/banner_da_hora.jpg');
    this.imageBannerThree = require('assets/images/banners/banner_da_hora.jpg');

    this.populaMumerosEOperacoes();
    this.populaAlgebraEFuncoes();
    this.populaGeometria();
    this.populaEstatistica();
  }

  public populaMumerosEOperacoes(): void {
    this.numerosEOperacoes = [
      { title: 'Sistema de Numeração', routerLink: 'page-not-found' },
      { title: 'Números Naturais', routerLink: 'page-not-found' },
      { title: 'Múltiplos e Divisores', routerLink: 'page-not-found' },
      { title: 'Frações', routerLink: 'page-not-found' },
      { title: 'Número racionais', routerLink: 'page-not-found' },
      { title: 'Números Naturais', routerLink: 'page-not-found' },
      { title: 'Número reais', routerLink: 'page-not-found' },
      { title: 'Potenciação e Radiciação', routerLink: 'page-not-found' }
    ];
  }

  public populaAlgebraEFuncoes(): void {
    this.algebraEFuncoes = [
      { title: 'Equação do primeiro grau', routerLink: 'algebra_e_funcoes/equacao_primeiro_grau' },
      { title: 'Sistemas de equações do 1º grau', routerLink: 'page-not-found' },
      { title: 'Equação do 2º grau', routerLink: 'page-not-found' },
      { title: 'Expressões Algébricas', routerLink: 'page-not-found' },
      { title: 'Produtos notáveis', routerLink: 'page-not-found' },
      { title: 'Funções', routerLink: 'algebra_e_funcoes/funcoes' },
      { title: 'Funções Exponenciais e Logarítmicas', routerLink: 'page-not-found' },
      { title: 'Trigonometria', routerLink: 'algebra_e_funcoes/trigonometria' },
      { title: 'Análise Combinatória', routerLink: 'algebra_e_funcoes/analise_combinatoria' },
      { title: 'Razão e proporção', routerLink: 'algebra_e_funcoes/razao_e_proporcao' },
      { title: 'Regra de Três', routerLink: 'algebra_e_funcoes/regra_de_tres' },
      { title: 'Porcentagem', routerLink: 'algebra_e_funcoes/porcentagem' },
      { title: 'Juros Simples e Compostos', routerLink: 'algebra_e_funcoes/juros_simples_e_compostos' },
      { title: 'Progressão Aritmética', routerLink: 'algebra_e_funcoes/progressao_aritmetica' },
      { title: 'Progressão Geométrica', routerLink: 'algebra_e_funcoes/progressao_geometrica' }
    ];
  }

  public populaGeometria(): void {
    this.geometria = [
      { title: 'Ponto, reta e plano', routerLink: 'geometria/ponto' },
      { title: 'Ângulos', routerLink: 'geometria/angulo' },
      { title: 'Triângulos', routerLink: 'geometria/triangulo' },
      { title: 'Polígonos', routerLink: 'page-not-found' },
      { title: 'Quadriláteros', routerLink: 'page-not-found' },
      { title: 'Circunferências', routerLink: 'page-not-found' },
      { title: 'Círculos', routerLink: 'page-not-found' },
      { title: 'Polígonos regulares', routerLink: 'page-not-found' },
      { title: 'Prismas', routerLink: 'page-not-found' },
      { title: 'Pirâmides', routerLink: 'page-not-found' },
      { title: 'Cilindros', routerLink: 'geometria/cilindro' },
      { title: 'Cones', routerLink: 'geometria/cone' },
      { title: 'Esferas', routerLink: 'geometria/esfera' }
    ];
  }

  public populaEstatistica(): void {
    this.estatistica = [
      { title: 'Estatística Descritiva', routerLink: 'estatistica/estatistica_descritiva' },
      { title: 'Probabilidade', routerLink: 'page-not-found' },
      { title: 'Distribuição de Probabilidades Discretas', routerLink: 'page-not-found' },
      { title: 'Distribuição de Probabilidades Contínuas', routerLink: 'page-not-found' },
      { title: 'Intervalos de Confiança', routerLink: 'page-not-found' },
      { title: 'Teste de Hipóteses', routerLink: 'page-not-found' },
      { title: 'Correlação e Regressão', routerLink: 'page-not-found' },
    ];
  }

  private populaIcones(): void {
    this.matIconRegistry.addSvgIcon(
      'fx',
      this.domSanitizer.bypassSecurityTrustResourceUrl(require('assets/images/icons/fx.svg'))
    );
    this.matIconRegistry.addSvgIcon(
      'sigma',
      this.domSanitizer.bypassSecurityTrustResourceUrl(require('assets/images/icons/sigma.svg'))
    );
    this.matIconRegistry.addSvgIcon(
      'trigonometry',
      this.domSanitizer.bypassSecurityTrustResourceUrl(require('assets/images/icons/trigonometry.svg'))
    );
    this.matIconRegistry.addSvgIcon(
      'estatistica',
      this.domSanitizer.bypassSecurityTrustResourceUrl(require('assets/images/icons/estatistica.svg'))
    );
  }
}
