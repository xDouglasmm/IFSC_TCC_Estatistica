import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JscDescricaoComponent } from './components/jsc-descricao/jsc-descricao.component';
import { JscSimplesMontanteComponent } from './components/jsc-simples-montante/jsc-simples-montante.component';
import { JscSimplesTaxaComponent } from './components/jsc-simples-taxa/jsc-simples-taxa.component';
import { JscSimplesCapitalComponent } from './components/jsc-simples-capital/jsc-simples-capital.component';
import { JscSimplesTempoComponent } from './components/jsc-simples-tempo/jsc-simples-tempo.component';
import { JscCompostosMontanteComponent } from './components/jsc-compostos-montante/jsc-compostos-montante.component';
import { JscCompostosTaxaComponent } from './components/jsc-compostos-taxa/jsc-compostos-taxa.component';
import { JscCompostosCapitalComponent } from './components/jsc-compostos-capital/jsc-compostos-capital.component';
import { JscCompostosTempoComponent } from './components/jsc-compostos-tempo/jsc-compostos-tempo.component';
import { JscViewComponent } from './components/jsc-view/jsc-view.component';

const routes: Routes = [

    {
        path: '',
        component: JscViewComponent,
        children: [

            {
                path: '',
                redirectTo: 'juros_simples_e_compostos_definicao',
                pathMatch: 'full',
            },
            {
                path: 'juros_simples_e_compostos_definicao',
                component: JscDescricaoComponent
            },
            {
                path: 'juros_simples_montante',
                component: JscSimplesMontanteComponent
            },
            {
                path: 'juros_simples_taxa',
                component: JscSimplesTaxaComponent
            },
            {
                path: 'juros_simples_capital',
                component: JscSimplesCapitalComponent
            },
            {
                path: 'juros_simples_tempo',
                component: JscSimplesTempoComponent
            },
            {
                path: 'juros_compostos_montante',
                component: JscCompostosMontanteComponent
            },
            {
                path: 'juros_compostos_taxa',
                component: JscCompostosTaxaComponent
            },
            {
                path: 'juros_compostos_capital',
                component: JscCompostosCapitalComponent
            },
            {
                path: 'juros_compostos_tempo',
                component: JscCompostosTempoComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JurosSimplesCompostoRoutingModule { }
