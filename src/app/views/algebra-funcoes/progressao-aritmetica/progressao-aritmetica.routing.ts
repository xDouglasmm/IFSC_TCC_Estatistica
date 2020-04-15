import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaTermogeralComponent } from './components/pa-termogeral/pa-termogeral.component';
import { PaFormulaComponent } from './components/pa-formula/pa-formula.component';
import { PaRazao2TermosComponent } from './components/pa-razao-2termos/pa-razao-2termos.component';
import { PaDefinicaoComponent } from './components/pa-definicao/pa-definicao.component';
import { PaPrimeiroElementoComponent } from './components/pa-primeiro-elemento/pa-primeiro-elemento.component';
import { PaPosicaoComponent } from './components/pa-posicao/pa-posicao.component';
import { PaSomaComponent } from './components/pa-soma/pa-soma.component';
import { PaVerificarElementoComponent } from './components/pa-verificar-elemento/pa-verificar-elemento.component';
import { PaCriarSequenciaComponent } from './components/pa-criar-sequencia/pa-criar-sequencia.component';
import { PaViewComponent } from './components/pa-view/pa-view.component';

const router: Routes = [
  {
    path: '',
    component: PaViewComponent,
    children: [
      {
        path: '',
        redirectTo: 'progressao_aritmetica_definicao',
        pathMatch: 'full',
      },
      {
        path: 'progressao_aritmetica_termo_geral',
        component: PaTermogeralComponent
      },
      {
        path: 'progressao_razao_formula',
        component: PaFormulaComponent
      },
      {
        path: 'progressao_razao_dois_termos',
        component: PaRazao2TermosComponent
      },
      {
        path: 'progressao_aritmetica_definicao',
        component: PaDefinicaoComponent
      },
      {
        path: 'progressao_primeiro_elemento',
        component: PaPrimeiroElementoComponent
      },
      {
        path: 'progressao_posicao',
        component: PaPosicaoComponent
      },
      {
        path: 'progressao_soma',
        component: PaSomaComponent
      },
      {
        path: 'progressao_verifica_elemento',
        component: PaVerificarElementoComponent
      },
      {
        path: 'progressao_criar_sequencia',
        component: PaCriarSequenciaComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class PaRoutingModule { }
