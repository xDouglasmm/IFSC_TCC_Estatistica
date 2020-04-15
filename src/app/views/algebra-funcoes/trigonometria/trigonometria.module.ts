
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';

import { ServicoTrigonometria } from './shared/trigonometria.service';
import { TrigonometriaRoutingModule } from './trigonometria.routing';

import { TriSidebarComponent } from './components/tri-sidebar/tri-sidebar.component';
import { TriViewComponent } from './components/tri-view/tri-view.component';
import { TriDefinicaoComponent } from './components/tri-definicao/tri-definicao.component';
import { TriMediaUsandoRadianosComponent } from './components/tri-media-usando-radianos/tri-media-usando-radianos.component';
import { TriMedidaAnguloCentralComponent } from './components/tri-medida-angulo-central/tri-medida-angulo-central.component';
import { TriAnguloPonteirosComponent } from './components/tri-angulo-ponteiros/tri-angulo-ponteiros.component';
import { TriMedidaAnguloInscritoComponent } from './components/tri-medida-angulo-inscrito/tri-medida-angulo-inscrito.component';
import { TriAnguloExcentricoExternoComponent } from './components/tri-angulo-excentrico-externo/tri-angulo-excentrico-externo.component';
import { TriAnguloExcentricoInternoComponent } from './components/tri-angulo-excentrico-interno/tri-angulo-excentrico-interno.component';
import { TriSenoComponent } from './components/tri-seno/tri-seno.component';
import { TriCossenoComponent } from './components/tri-cosseno/tri-cosseno.component';
import { TriTangenteComponent } from './components/tri-tangente/tri-tangente.component';
import { TriRazaoTrigonometricaComponent } from './components/tri-razao-trigonometrica/tri-razao-trigonometrica.component';
import { TriFuncoesTrigonometricasComponent } from './components/tri-funcoes-trigonometricas/tri-funcoes-trigonometricas.component';
import { TriMediaUsandoGrausComponent } from './components/tri-media-usando-graus/tri-media-usando-graus.component';


@NgModule({

    imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      SharedModule,
      CoreModule,
      TrigonometriaRoutingModule
    ],

    declarations: [
      TriSidebarComponent,
      TriViewComponent,
      TriDefinicaoComponent,
      TriMediaUsandoRadianosComponent,
      TriMedidaAnguloCentralComponent,
      TriAnguloPonteirosComponent,
      TriMedidaAnguloInscritoComponent,
      TriAnguloExcentricoExternoComponent,
      TriAnguloExcentricoInternoComponent,
      TriSenoComponent,
      TriCossenoComponent,
      TriTangenteComponent,
      TriRazaoTrigonometricaComponent,
      TriFuncoesTrigonometricasComponent,
      TriMediaUsandoGrausComponent,
    ],

    providers: [ServicoTrigonometria]

  })
export class TrigonometriaModule { }
