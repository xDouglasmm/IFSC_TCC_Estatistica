import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';

import { ServicoFuncoes } from './shared/funcoes.service';
import { FuncoesRoutingModule } from './funcoes.routing';

import { FunViewComponent } from './components/fun-view/fun-view.component';
import { FunSidebarComponent } from './components/fun-sidebar/fun-sidebar.component';
import { FunDefinicaoComponent } from './components/fun-definicao/fun-definicao.component';
import { FunSegundoGrauComponent } from './components/fun-segundo-grau/fun-segundo-grau.component';
import { FunValorNumericoComponent } from './components/fun-valor-numerico/fun-valor-numerico.component';
import { FunEncontrarFuncaoComponent } from './components/fun-encontrar-funcao/fun-encontrar-funcao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    FuncoesRoutingModule,
  ],
  declarations: [
    FunViewComponent,
    FunSidebarComponent,
    FunDefinicaoComponent,
    FunSegundoGrauComponent,
    FunValorNumericoComponent,
    FunEncontrarFuncaoComponent
  ],

  providers: [ServicoFuncoes]
})
export class FuncoesModule { }
