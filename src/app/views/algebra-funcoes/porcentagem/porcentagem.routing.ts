import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorDescricaoComponent } from './components/por-descricao/por-descricao.component';
import { PorCalculoPercentualComponent } from './components/por-calculo-percentual/por-calculo-percentual.component';
import { PorCalculoPorcentagemComponent } from './components/por-calculo-porcentagem/por-calculo-porcentagem.component';
import { PorAcrescimoComponent } from './components/por-acrescimo/por-acrescimo.component';
import { PorDescontoComponent } from './components/por-desconto/por-desconto.component';
import { PorViewComponent } from './components/por-view/por-view.component';

const routes: Routes = [

    {
        path: '',
        component: PorViewComponent,
        children: [
            {
                path: '',
                redirectTo: 'por_descricao',
                pathMatch: 'full',
            },
            {
                path: 'por_descricao',
                component: PorDescricaoComponent
            },
            {
                path: 'por_calculo_percentual',
                component: PorCalculoPercentualComponent
            },
            {
                path: 'por_calculo_porcentagem',
                component: PorCalculoPorcentagemComponent
            },
            {
                path: 'por_acrescimo',
                component: PorAcrescimoComponent
            },
            {
                path: 'por_desconto',
                component: PorDescontoComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PorcentagemRoutingModule { }
