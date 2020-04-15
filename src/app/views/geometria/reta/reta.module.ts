import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';
import { RetaRoutingModule } from './reta.routing';
import { RetaComponent } from './reta.component';
import { SidebarRetaComponent } from './componentes/sidebar-reta/sidebar-reta.component';
import { DefinicaoRetaComponent } from './componentes/definicao-reta/definicao-reta.component';
import { ConstrucaoRetaComponent } from './componentes/construcao-reta/construcao-reta.component';
import { AxiomasRetaComponent } from './componentes/axiomas-reta/axiomas-reta.component';
import { PosicoesRelativasRetaComponent } from './componentes/posicoes-relativas-reta/posicoes-relativas-reta.component';
import { SemiRetaComponent } from './componentes/semi-reta/semi-reta.component';
import { SegmentoRetaComponent } from './componentes/segmento-reta/segmento-reta.component';
import { AxiomaUmComponent } from './componentes/axiomas-reta/componentes/axioma-um/axioma-um.component';
import { AxiomaDoisComponent } from './componentes/axiomas-reta/componentes/axioma-dois/axioma-dois.component';
import { AxiomaTresComponent } from './componentes/axiomas-reta/componentes/axioma-tres/axioma-tres.component';
import { RetasParalelasComponent } from './componentes/posicoes-relativas-reta/componentes/retas-paralelas/retas-paralelas.component';
import { RetasConcorrentesComponent } from './componentes/posicoes-relativas-reta/componentes/retas-concorrentes/retas-concorrentes.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        CoreModule,
        RetaRoutingModule,
    ],
    declarations: [
        RetaComponent,
        SidebarRetaComponent,
        DefinicaoRetaComponent,
        ConstrucaoRetaComponent,
        AxiomasRetaComponent,
        PosicoesRelativasRetaComponent,
        SemiRetaComponent,
        SegmentoRetaComponent,
        AxiomaUmComponent,
        AxiomaDoisComponent,
        AxiomaTresComponent,
        RetasParalelasComponent,
        RetasConcorrentesComponent,
    ],
    exports: [
        RetaComponent
    ],
})

export class RetaModule { }
