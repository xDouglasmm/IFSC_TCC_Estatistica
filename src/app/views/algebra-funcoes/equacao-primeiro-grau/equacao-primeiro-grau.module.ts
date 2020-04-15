import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '../../../../../node_modules/@angular/forms';

import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';

import { ServicoEquacaoPrimeiroGrau } from './shared/equacao-primeiro-grau.service';

import { EgpViewComponent } from './components/egp-view/egp-view.component';
import { EgpSidebarComponent } from './components/egp-sidebar/egp-sidebar.component';
import { EgpDynamicExpressionComponent } from './components/egp-dynamic-expression/egp-dynamic-expression.component';
import { EgpDescriptionComponent } from './components/egp-description/egp-description.component';
import { EquacaoPrimeiroGrauRoutingModule } from './equacao-primeiro-grau.routing';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    EquacaoPrimeiroGrauRoutingModule,
  ],

  declarations: [
    EgpDescriptionComponent,
    EgpViewComponent,
    EgpSidebarComponent,
    EgpDynamicExpressionComponent,
  ],

  providers: [ServicoEquacaoPrimeiroGrau]

})

export class EquacaoPrimeiroGrauModule { }
