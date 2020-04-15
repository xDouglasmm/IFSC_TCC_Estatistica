import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RpDescricaoComponent } from './components/rp-descricao/rp-descricao.component';
import { RpRazaoComponent } from './components/rp-razao/rp-razao.component';
import { RpRazaoInversaComponent } from './components/rp-razao-inversa/rp-razao-inversa.component';
import { RpRazaoEquivalentesComponent } from './components/rp-razao-equivalentes/rp-razao-equivalentes.component';
import { RpVerificaProporcaoComponent } from './components/rp-verifica-proporcao/rp-verifica-proporcao.component';
import { RpTermoDesconhecidoComponent } from './components/rp-termo-desconhecido/rp-termo-desconhecido.component';
import { RpViewComponent } from './components/rp-view/rp-view.component';

const routes: Routes = [
    {
        path: '',
        component: RpViewComponent,
        children: [
            {
                path: '',
                redirectTo: 'rp_descricao',
                pathMatch: 'full',
            },
            {
                path: 'rp_descricao',
                component: RpDescricaoComponent
            },
            {
                path: 'razao',
                component: RpRazaoComponent
            },
            {
                path: 'razao_inversa',
                component: RpRazaoInversaComponent
            },
            {
                path: 'razao_equivalente',
                component: RpRazaoEquivalentesComponent
            },
            {
                path: 'proporcao',
                component: RpVerificaProporcaoComponent
            },
            {
                path: 'proporcao_termo_desconhecido',
                component: RpTermoDesconhecidoComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RazaoProporcaoRoutingModule { }
