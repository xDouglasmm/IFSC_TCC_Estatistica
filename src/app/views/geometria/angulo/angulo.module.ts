import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';
import { AnguloRoutingModule } from './angulo.routing';
import { AnguloComponent } from './angulo.component';
import { DefinicaoAnguloComponent } from './componentes/definicao-angulo/definicao-angulo.component';
import { MedidaAnguloComponent } from './componentes/medida-angulo/medida-angulo.component';
import { TiposAnguloComponent } from './componentes/tipos-angulo/tipos-angulo.component';
import { ComplementaresAnguloComponent } from './componentes/complementares-angulo/complementares-angulo.component';
import { SuplementaresAnguloComponent } from './componentes/suplementares-angulo/suplementares-angulo.component';
import { CongruentesAnguloComponent } from './componentes/congruentes-angulo/congruentes-angulo.component';
import { ConsecutivosAnguloComponent } from './componentes/consecutivos-angulo/consecutivos-angulo.component';
import { OpostosAnguloComponent } from './componentes/opostos-angulo/opostos-angulo.component';
import { SidebarAnguloComponent } from './componentes/sidebar-angulo/sidebar-angulo.component';

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        CoreModule,
        AnguloRoutingModule,
    ],
    declarations: [
        AnguloComponent,
        SidebarAnguloComponent,
        DefinicaoAnguloComponent,
        MedidaAnguloComponent,
        TiposAnguloComponent,
        ComplementaresAnguloComponent,
        SuplementaresAnguloComponent,
        CongruentesAnguloComponent,
        ConsecutivosAnguloComponent,
        OpostosAnguloComponent,
    ],
    exports: [
        AnguloComponent
    ],
})

export class AnguloModule { }
