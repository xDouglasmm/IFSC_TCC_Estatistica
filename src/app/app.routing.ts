import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/pagina-inicial/home/home.component';
import { SobreComponent } from './views/pagina-inicial/sobre/sobre.component';
import { AlgebraFuncoesComponent } from './views/pagina-inicial/algebra-funcoes/algebra-funcoes.component';
import { GeometriaComponent } from './views/pagina-inicial/geometria/geometria.component';
import { NumerosOperacoesComponent } from './views/pagina-inicial/numeros-operacoes/numeros-operacoes.component';
import { EstatisticaComponent } from './views/pagina-inicial/estatistica/estatistica.component'
import { ErrorPagesComponent } from './views/pagina-inicial/error-pages/error-pages.component';

const defaultColor = '#359d6e';
const algebra = '#CFD5D2';
const numeros = '#b58fdb';
const geometria = '#4683b4';
const estatistica = '#f26528';

const routes: Routes = [
  {
    path: 'page-not-found',
    component: ErrorPagesComponent,
    data: {
      breadcrumbOptions: {
        params: { color: defaultColor },
      },
    },
  },
  {
    path: '',
    component: HomeComponent,
    data: {
      breadcrumbOptions: {
        params: { color: defaultColor },
      },
    },
  },
  {
    path: 'sobre',
    component: SobreComponent,
    data: {
      breadcrumbOptions: {
        params: { color: defaultColor },
      },
    },
  },

  //#region Algebra e Funções

  {
    path: 'algebra_e_funcoes',
    component: AlgebraFuncoesComponent,
    data: {
      breadcrumbOptions: {
        params: { color: algebra },
      },
    },
  },
  {
    path: 'algebra_e_funcoes/equacao_primeiro_grau',
    loadChildren: './views/algebra-funcoes/equacao-primeiro-grau/equacao-primeiro-grau.module#EquacaoPrimeiroGrauModule',
    data: {
      breadcrumbOptions: {
        breadcrumbLabel: 'Equação do 1º Grau',
        params: { color: algebra },
      },
    },
  },
  {
    path: 'algebra_e_funcoes/progressao_aritmetica',
    loadChildren: './views/algebra-funcoes/progressao-aritmetica/progressao-aritmetica.module#ProgressaoAritmeticaModule',
    data: {
      breadcrumbOptions: {
        breadcrumbLabel: 'Progressao Aritmética',
        params: { color: algebra },
      },
    },
  },
  {
    path: 'algebra_e_funcoes/progressao_geometrica',
    loadChildren: './views/algebra-funcoes/progressao-geometrica/progressao-geometrica.module#ProgressaoGeometricaModule',
    data: {
      breadcrumbOptions: {
        breadcrumbLabel: 'Progressao Geometrica',
        params: { color: algebra },
      },
    },
  },
  {
    path: 'algebra_e_funcoes/funcoes',
    loadChildren: './views/algebra-funcoes/funcoes/funcoes.module#FuncoesModule',
    data: {
      breadcrumbOptions: {
        breadcrumbLabel: 'Funções',
        params: { color: algebra },
      },
    },
  },
  {
    path: 'algebra_e_funcoes/analise_combinatoria',
    loadChildren: './views/algebra-funcoes/analise-combinatoria/analise-combinatoria.module#AnaliseCombinatoriaModule',
    data: {
      breadcrumbOptions: {
        breadcrumbLabel: 'Analise Combinatória',
        params: { color: algebra },
      },
    },
  },
  {
    path: 'algebra_e_funcoes/trigonometria',
    loadChildren: './views/algebra-funcoes/trigonometria/trigonometria.module#TrigonometriaModule',
    data: {
      breadcrumbOptions: {
        breadcrumbLabel: 'Trigonometria',
        params: { color: algebra },
      },
    },
  },
  {
    path: 'algebra_e_funcoes/razao_e_proporcao',
    loadChildren: './views/algebra-funcoes/razao-e-proporcao/razao-e-proporcao.module#RazaoProporcaoModule',
    data: {
      breadcrumbOptions: {
        breadcrumbLabel: 'Razão e Proporção',
        params: { color: algebra },
      },
    },
  },
  {
    path: 'algebra_e_funcoes/juros_simples_e_compostos',
    loadChildren: './views/algebra-funcoes/juros-simples-e-compostos/juros-simples-e-compostos.module#JurosSimplesCompostoModule',
    data: {
      breadcrumbOptions: {
        breadcrumbLabel: 'Juros Simples e Compostos',
        params: { color: algebra },
      },
    },
  },
  {
    path: 'algebra_e_funcoes/regra_de_tres',
    loadChildren: './views/algebra-funcoes/regra-de-tres/regra-de-tres.module#RegraDeTresModule',
    data: {
      breadcrumbOptions: {
        breadcrumbLabel: 'Regra de três',
        params: { color: algebra },
      },
    },
  },
  {
    path: 'algebra_e_funcoes/porcentagem',
    loadChildren: './views/algebra-funcoes/porcentagem/porcentagem.module#PorcentagemModule',
    data: {
      breadcrumbOptions: {
        breadcrumbLabel: 'Porcentagem',
        params: { color: algebra },
      },
    },
  },

  //#endregion Algebra e Funções

  //#region Geometria

  {
    path: 'geometria',
    component: GeometriaComponent,
    data: {
      breadcrumbOptions: {
        params: { color: geometria },
      },
    },
  },

  {
    path: 'geometria/ponto',
    loadChildren: './views/geometria/ponto/ponto.module#PontoModule',
    data: {
      breadcrumbOptions: {
        breadcrumbLabel: 'Ponto',
        params: { color: geometria },
      },
    },
  },

  {
    path: 'geometria/triangulo',
    loadChildren: './views/geometria/triangulo/triangulo.module#TrianguloModule',
    data: {
      breadcrumbOptions: {
        breadcrumbLabel: 'Triangulo',
        params: { color: geometria },
      },
    },
  },

  {
    path: 'geometria/cilindro',
    loadChildren: './views/geometria/cilindro/cilindro.module#CilindroModule',
    data: {
      breadcrumbOptions: {
        breadcrumbLabel: 'Cilindro',
        params: { color: geometria }
      }
    }
  },

  {
    path: 'geometria/cone',
    loadChildren: './views/geometria/cone/cone.module#ConeModule',
    data: {
      breadcrumbOptions: {
        breadcrumbLabel: 'Cone',
        params: { color: geometria }
      }
    }
  },

  {
    path: 'geometria/esfera',
    loadChildren: './views/geometria/esfera/esfera.module#EsferaModule',
    data: {
      breadcrumbOptions: {
        breadcrumbLabel: 'Esfera',
        params: { color: geometria }
      }
    }
  },

  //#endregion Geometria

  //#region Numero e Operações
  {
    path: 'numeros_operacoes',
    component: NumerosOperacoesComponent,
    data: {
      breadcrumbOptions: {
        params: { color: numeros },
      },
    },
  },
  //#endregion Numero e Operações

  //#region Estatística
  {
    path: 'estatistica',
    component: EstatisticaComponent,
    data: {
      breadcrumbOptions: {
        params: { color: estatistica },
      },
    },
  },

  {
    path: 'estatistica/estatistica_descritiva',
    loadChildren: './views/estatistica/estatistica-descritiva/estatistica-descritiva.module#EstatisticaDescritivaModule',
    data: {
      breadcrumbOptions: {
        breadcrumbLabel: 'Estatística Descritiva',
        params: { color: estatistica },
      },
    },
  },

  //#endregion Estatística
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false,  // <-- debugging purposes only
        // useHash: false,
        // preloadingStrategy: PreloadAllModules
      }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
