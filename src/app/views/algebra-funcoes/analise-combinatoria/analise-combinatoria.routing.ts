import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AcDescricaoComponent } from './components/ac-descricao/ac-descricao.component';
import { AcPrincipioMultiplicativoComponent } from './components/ac-principio-multiplicativo/ac-principio-multiplicativo.component';
import { AcPermutacaoSimplesComponent } from './components/ac-permutacao-simples/ac-permutacao-simples.component';
import { AcArranjosSimplesComponent } from './components/ac-arranjos-simples/ac-arranjos-simples.component';
import { AcCombinacoesSimplesComponent } from './components/ac-combinacoes-simples/ac-combinacoes-simples.component';
import { AcBinomiosDeNewtonComponent } from './components/ac-binomios-de-newton/ac-binomios-de-newton.component';
import { AcTrianguloDePascalComponent } from './components/ac-triangulo-de-pascal/ac-triangulo-de-pascal.component';
import { AcViewComponent } from './components/ac-view/ac-view.component';

const routes: Routes = [
  {
    path: '',
    component:  AcViewComponent,
    children: [
      {
        path: '',
        redirectTo: 'ac_descricao',
        pathMatch: 'full',
      },
      {
        path: 'ac_descricao',
        component: AcDescricaoComponent,
      },
      {
        path: 'ac_principio_multiplicativo',
        component: AcPrincipioMultiplicativoComponent
      },
      {
        path: 'ac_permutacao_simples',
        component: AcPermutacaoSimplesComponent
      },
      {
        path: 'ac_arranjos_simples',
        component: AcArranjosSimplesComponent
      },
      {
        path: 'ac_combinacoes_simples',
        component: AcCombinacoesSimplesComponent
      },
      {
        path: 'ac_binomio_de_newton',
        component: AcBinomiosDeNewtonComponent
      },
      {
        path: 'ac_triangulo_de_pascal',
        component: AcTrianguloDePascalComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AnaliseCombinatoriaRoutingModule { }
