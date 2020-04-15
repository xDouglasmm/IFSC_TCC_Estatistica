import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PgDescricaoComponent } from './components/pg-descricao/pg-descricao.component';
import { PgTermoGeralComponent } from './components/pg-termo-geral/pg-termo-geral.component';
import { PgFormulaComponent } from './components/pg-formula/pg-formula.component';
import { PgRazao2termosComponent } from './components/pg-razao-2termos/pg-razao-2termos.component';
import { PgPrimeiroElementoComponent } from './components/pg-primeiro-elemento/pg-primeiro-elemento.component';
import { PgPosicaoComponent } from './components/pg-posicao/pg-posicao.component';
import { PgPrimeiroTermoSomaComponent } from './components/pg-primeiro-termo-soma/pg-primeiro-termo-soma.component';
import { PgSomaElementosFinitaComponent } from './components/pg-soma-elementos-finita/pg-soma-elementos-finita.component';
import { PgSomaElementosInfinitaComponent } from './components/pg-soma-elementos-infinita/pg-soma-elementos-infinita.component';
import { PgVerificarElementoComponent } from './components/pg-verificar-elemento/pg-verificar-elemento.component';
import { PgCriarSequenciaComponent } from './components/pg-criar-sequencia/pg-criar-sequencia.component';
import { PgViewComponent } from './components/pg-view/pg-view.component';

const routes: Routes = [
  {
    path: '',
    component: PgViewComponent,
    children: [
      {
        path: '',
        redirectTo: 'pg_descricao',
        pathMatch: 'full',
      },
      {
        path: 'pg_descricao',
        component: PgDescricaoComponent
      },
      {
        path: 'pg_termo_geral',
        component: PgTermoGeralComponent
      },
      {
        path: 'pg_formula',
        component: PgFormulaComponent
      },
      {
        path: 'pg_razao_2termos',
        component: PgRazao2termosComponent
      },
      {
        path: 'pg_primeiro_elemento',
        component: PgPrimeiroElementoComponent
      },
      {
        path: 'pg_posicao',
        component: PgPosicaoComponent
      },
      {
        path: 'pg_primeiro_termo_soma',
        component: PgPrimeiroTermoSomaComponent
      },
      {
        path: 'pg_soma_elementos_finita',
        component: PgSomaElementosFinitaComponent
      },
      {
        path: 'pg_soma_elementos_infinita',
        component: PgSomaElementosInfinitaComponent
      },
      {
        path: 'pg_verificar_elemento',
        component: PgVerificarElementoComponent
      },
      {
        path: 'pg_criar_sequencia',
        component: PgCriarSequenciaComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressaoGeometricaRoutingModule { }
