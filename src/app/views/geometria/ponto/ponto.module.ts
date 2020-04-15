import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '../../../../../node_modules/@angular/forms';
import { CoreModule } from '../../../core/core.module';

import { KatexModule } from 'ng-katex';
import { PontoRoutingModule } from './ponto.routing';
import { PontoComponent } from './ponto.component';
import { SidebarPontoComponent } from './componentes/sidebar-ponto/sidebar-ponto.component';
import { DefinicaoPontoComponent } from './componentes/definicao-ponto/definicao-ponto.component';
import { ConstrucaoPontoComponent } from './componentes/construcao-ponto/construcao-ponto.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      SharedModule,
      CoreModule,
      PontoRoutingModule,
      KatexModule,
    ],
    declarations: [
      PontoComponent,
      SidebarPontoComponent,
      DefinicaoPontoComponent,
      ConstrucaoPontoComponent,
    ],
    exports: [
      PontoComponent
    ],
  })

export class PontoModule { }
