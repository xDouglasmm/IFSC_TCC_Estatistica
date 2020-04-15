import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';

import { ServicoRdt } from './shared/rdt.service';
import { RegraDeTresRoutingModule } from './regra-de-tres.routing';

import { RdtViewComponent } from './components/rdt-view/rdt-view.component';
import { RdtSidebarComponent } from './components/rdt-sidebar/rdt-sidebar.component';
import { RdtDescricaoComponent } from './components/rdt-descricao/rdt-descricao.component';
import { RdtDiretamenteProporcionalComponent } from './components/rdt-diretamente-proporcional/rdt-diretamente-proporcional.component';
import { RdtInversamenteProporcionalComponent } from './components/rdt-inversamente-proporcional/rdt-inversamente-proporcional.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    RegraDeTresRoutingModule,
  ],
  declarations: [
  RdtViewComponent,
  RdtSidebarComponent,
  RdtDescricaoComponent,
  RdtDiretamenteProporcionalComponent,
  RdtInversamenteProporcionalComponent,
  ],
  providers: [ServicoRdt]
})
export class RegraDeTresModule { }
