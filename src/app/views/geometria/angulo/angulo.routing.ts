import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnguloComponent } from './angulo.component';
import { DefinicaoAnguloComponent } from './componentes/definicao-angulo/definicao-angulo.component';
import { MedidaAnguloComponent } from './componentes/medida-angulo/medida-angulo.component';
import { TiposAnguloComponent } from './componentes/tipos-angulo/tipos-angulo.component';
import { ComplementaresAnguloComponent } from './componentes/complementares-angulo/complementares-angulo.component';
import { SuplementaresAnguloComponent } from './componentes/suplementares-angulo/suplementares-angulo.component';
import { CongruentesAnguloComponent } from './componentes/congruentes-angulo/congruentes-angulo.component';
import { ConsecutivosAnguloComponent } from './componentes/consecutivos-angulo/consecutivos-angulo.component';
import { OpostosAnguloComponent } from './componentes/opostos-angulo/opostos-angulo.component';

const anguloRotas: Routes = [
    {
        path: 'angulo',
        component: AnguloComponent,
        children: [
            { path: '', component: DefinicaoAnguloComponent },
            { path: 'definicao_angulo', component: DefinicaoAnguloComponent },
            { path: 'medida_angulo', component: MedidaAnguloComponent },
            { path: 'tipo_angulo', component: TiposAnguloComponent },
            { path: 'complementares_angulo', component: ComplementaresAnguloComponent },
            { path: 'suplementares_angulo', component: SuplementaresAnguloComponent },
            { path: 'congruentes_angulo', component: CongruentesAnguloComponent },
            { path: 'consecutivos_angulo', component: ConsecutivosAnguloComponent },
            { path: 'opostos_angulo', component: OpostosAnguloComponent }
        ]
    },
];
@NgModule({
    imports: [
        RouterModule.forChild(anguloRotas)
    ],
    exports: [
        RouterModule
    ]
})
export class AnguloRoutingModule { }
