import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';
import { RazaoProporcaoRoutingModule } from './razao-e-proporcao.routing';

import { ServicoRazaoProporcao } from './shared/razao-e-proporcao.service';

import { RpViewComponent } from './components/rp-view/rp-view.component';
import { RpSidebarComponent } from './components/rp-sidebar/rp-sidebar.component';
import { RpDescricaoComponent } from './components/rp-descricao/rp-descricao.component';
import { RpRazaoComponent } from './components/rp-razao/rp-razao.component';
import { RpRazaoEquivalentesComponent } from './components/rp-razao-equivalentes/rp-razao-equivalentes.component';
import { RpRazaoInversaComponent } from './components/rp-razao-inversa/rp-razao-inversa.component';
import { RpTermoDesconhecidoComponent } from './components/rp-termo-desconhecido/rp-termo-desconhecido.component';
import { RpVerificaProporcaoComponent } from './components/rp-verifica-proporcao/rp-verifica-proporcao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    RazaoProporcaoRoutingModule,
  ],
  declarations: [
    RpViewComponent,
    RpSidebarComponent,
    RpDescricaoComponent,
    RpRazaoComponent,
    RpRazaoEquivalentesComponent,
    RpRazaoInversaComponent,
    RpTermoDesconhecidoComponent,
    RpVerificaProporcaoComponent,
  ],

  providers: [ServicoRazaoProporcao]
})
export class RazaoProporcaoModule { }
