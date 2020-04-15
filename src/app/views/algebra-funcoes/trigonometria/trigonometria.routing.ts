import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TriDefinicaoComponent } from './components/tri-definicao/tri-definicao.component';
import { TriMediaUsandoGrausComponent } from './components/tri-media-usando-graus/tri-media-usando-graus.component';
import { TriMediaUsandoRadianosComponent } from './components/tri-media-usando-radianos/tri-media-usando-radianos.component';
import { TriAnguloPonteirosComponent } from './components/tri-angulo-ponteiros/tri-angulo-ponteiros.component';
import { TriMedidaAnguloCentralComponent } from './components/tri-medida-angulo-central/tri-medida-angulo-central.component';
import { TriMedidaAnguloInscritoComponent } from './components/tri-medida-angulo-inscrito/tri-medida-angulo-inscrito.component';
import { TriAnguloExcentricoExternoComponent } from './components/tri-angulo-excentrico-externo/tri-angulo-excentrico-externo.component';
import { TriAnguloExcentricoInternoComponent } from './components/tri-angulo-excentrico-interno/tri-angulo-excentrico-interno.component';
import { TriSenoComponent } from './components/tri-seno/tri-seno.component';
import { TriCossenoComponent } from './components/tri-cosseno/tri-cosseno.component';
import { TriTangenteComponent } from './components/tri-tangente/tri-tangente.component';
import { TriRazaoTrigonometricaComponent } from './components/tri-razao-trigonometrica/tri-razao-trigonometrica.component';
import { TriFuncoesTrigonometricasComponent } from './components/tri-funcoes-trigonometricas/tri-funcoes-trigonometricas.component';
import { TriViewComponent } from './components/tri-view/tri-view.component';

const routes: Routes = [
    {
        path: '',
        component: TriViewComponent,
        children: [
            {
                path: '',
                redirectTo: 'tri_definicao',
                pathMatch: 'full',
            },
            {
                path: 'tri_definicao',
                component: TriDefinicaoComponent
            },
            {
                path: 'medida_arcos_grau',
                component: TriMediaUsandoGrausComponent
            },
            {
                path: 'medida_arcos_radiano',
                component: TriMediaUsandoRadianosComponent
            },
            {
                path: 'angulo_ponteiros',
                component: TriAnguloPonteirosComponent
            },
            {
                path: 'medida_angulo_central',
                component: TriMedidaAnguloCentralComponent
            },
            {
                path: 'medida_angulo_inscrito',
                component: TriMedidaAnguloInscritoComponent
            },
            {
                path: 'medida_angulo_excentrico_externo',
                component: TriAnguloExcentricoExternoComponent
            },
            {
                path: 'medida_angulo_excentrico_interno',
                component: TriAnguloExcentricoInternoComponent
            },
            {
                path: 'seno',
                component: TriSenoComponent
            },
            {
                path: 'cosseno',
                component: TriCossenoComponent
            },
            {
                path: 'tangente',
                component: TriTangenteComponent
            },
            {
                path: 'razoes_trigonometricas',
                component: TriRazaoTrigonometricaComponent
            },
            {
                path: 'funcoes_trigonometricas',
                component: TriFuncoesTrigonometricasComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrigonometriaRoutingModule { }
