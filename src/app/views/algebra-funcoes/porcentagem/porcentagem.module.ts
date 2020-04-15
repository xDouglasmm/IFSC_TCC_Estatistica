import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';

import { ServicoPorcentagem } from './shared/porcentagem.service';
import { PorcentagemRoutingModule } from './porcentagem.routing';

import { PorViewComponent } from './components/por-view/por-view.component';
import { PorSidebarComponent } from './components/por-sidebar/por-sidebar.component';
import { PorDescricaoComponent } from './components/por-descricao/por-descricao.component';
import { PorCalculoPercentualComponent } from './components/por-calculo-percentual/por-calculo-percentual.component';
import { PorCalculoPorcentagemComponent } from './components/por-calculo-porcentagem/por-calculo-porcentagem.component';
import { PorAcrescimoComponent } from './components/por-acrescimo/por-acrescimo.component';
import { PorDescontoComponent } from './components/por-desconto/por-desconto.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    PorcentagemRoutingModule
  ],
  declarations: [
    PorViewComponent,
    PorSidebarComponent,
    PorDescricaoComponent,
    PorCalculoPercentualComponent,
    PorCalculoPorcentagemComponent,
    PorAcrescimoComponent,
    PorDescontoComponent,
  ],

  providers: [ServicoPorcentagem]
})
export class PorcentagemModule { }
