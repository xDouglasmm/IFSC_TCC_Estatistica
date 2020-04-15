import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';

import { ServicoProgressaoAritmetica } from './shared/progressao-aritmetica.service';
import { PaRoutingModule } from './progressao-aritmetica.routing';

import { PaSidebarComponent } from './components/pa-sidebar/pa-sidebar.component';
import { PaViewComponent } from './components/pa-view/pa-view.component';
import { PaTermogeralComponent } from './components/pa-termogeral/pa-termogeral.component';
import { PaDefinicaoComponent } from './components/pa-definicao/pa-definicao.component';
import { PaPrimeiroElementoComponent } from './components/pa-primeiro-elemento/pa-primeiro-elemento.component';
import { PaPosicaoComponent } from './components/pa-posicao/pa-posicao.component';
import { PaSomaComponent } from './components/pa-soma/pa-soma.component';
import { PaVerificarElementoComponent } from './components/pa-verificar-elemento/pa-verificar-elemento.component';
import { PaCriarSequenciaComponent } from './components/pa-criar-sequencia/pa-criar-sequencia.component';
import { PaFormulaComponent } from './components/pa-formula/pa-formula.component';
import { PaRazao2TermosComponent } from './components/pa-razao-2termos/pa-razao-2termos.component';


@NgModule({

    imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      SharedModule,
      CoreModule,
      PaRoutingModule,
    ],

    declarations: [
      PaSidebarComponent,
      PaViewComponent,
      PaTermogeralComponent,
      PaDefinicaoComponent,
      PaPrimeiroElementoComponent,
      PaPosicaoComponent,
      PaSomaComponent,
      PaVerificarElementoComponent,
      PaCriarSequenciaComponent,
      PaFormulaComponent,
      PaRazao2TermosComponent,
    ],

    providers: [ServicoProgressaoAritmetica]

  })
export class ProgressaoAritmeticaModule { }
