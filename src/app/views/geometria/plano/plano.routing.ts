import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanoComponent } from './plano.component';
import { DefinicaoPlanoComponent } from './componentes/definicao-plano/definicao-plano.component';
import { AxiomasPlanoComponent } from './componentes/axiomas-plano/axiomas-plano.component';

const planoRotas: Routes = [
    {
        path: 'plano',
        component: PlanoComponent,
        children: [
            { path: '', component: DefinicaoPlanoComponent },
            { path: 'definicao', component: DefinicaoPlanoComponent },
            { path: 'axiomas', component: AxiomasPlanoComponent },
        ]
    },
];
@NgModule({
    imports: [
        RouterModule.forChild(planoRotas)
    ],
    exports: [
        RouterModule
    ]
})
export class PlanoRoutingModule { }
