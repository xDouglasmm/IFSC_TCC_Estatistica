import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';

import { ServicoProgressaoGeometrica } from './shared/progressao-geometrica.service';
import { ProgressaoGeometricaRoutingModule } from './progressao-geometrica.routing';

import { PgViewComponent } from './components/pg-view/pg-view.component';
import { PgSidebarComponent } from './components/pg-sidebar/pg-sidebar.component';
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


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    ProgressaoGeometricaRoutingModule,
  ],
  declarations: [
    PgViewComponent,
    PgSidebarComponent,
    PgDescricaoComponent,
    PgTermoGeralComponent,
    PgFormulaComponent,
    PgRazao2termosComponent,
    PgPrimeiroElementoComponent,
    PgPosicaoComponent,
    PgPrimeiroTermoSomaComponent,
    PgSomaElementosFinitaComponent,
    PgSomaElementosInfinitaComponent,
    PgVerificarElementoComponent,
    PgCriarSequenciaComponent,
  ],

  providers: [ServicoProgressaoGeometrica]
})
export class ProgressaoGeometricaModule { }
