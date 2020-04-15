import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';

import { PlanoComponent } from './plano.component';
import { DefinicaoPlanoComponent } from './componentes/definicao-plano/definicao-plano.component';
import { AxiomasPlanoComponent } from './componentes/axiomas-plano/axiomas-plano.component';
import { PlanoRoutingModule } from './plano.routing';
import { SidebarPlanoComponent } from './componentes/sidebar-plano/sidebar-plano.component';
import { AxiomaUmComponent } from './componentes/axiomas-plano/componentes/axioma-um/axioma-um.component';
import { AxiomaDoisComponent } from './componentes/axiomas-plano/componentes/axioma-dois/axioma-dois.component';
import { AxiomaTresComponent } from './componentes/axiomas-plano/componentes/axioma-tres/axioma-tres.component';
import { AxiomaQuatroComponent } from './componentes/axiomas-plano/componentes/axioma-quatro/axioma-quatro.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      SharedModule,
      CoreModule,
      PlanoRoutingModule,
    ],
    declarations: [
      PlanoComponent,
      SidebarPlanoComponent,
      DefinicaoPlanoComponent,
      AxiomasPlanoComponent,
      AxiomaUmComponent,
      AxiomaDoisComponent,
      AxiomaTresComponent,
      AxiomaQuatroComponent,
    ],
    exports: [
      PlanoComponent
    ],
  })

export class PlanoModule { }
