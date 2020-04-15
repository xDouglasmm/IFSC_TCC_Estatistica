import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CiViewComponent } from './components/ci-view/ci-view.component';
import { CiDefinicaoComponent } from './components/ci-definicao/ci-definicao.component';
import { CiElementosComponent } from './components/ci-elementos/ci-elementos.component';
import { CiAreasComponent } from './components/ci-areas/ci-areas.component';
import { CiVolumeComponent } from './components/ci-volume/ci-volume.component';
import { CiAreaBasesComponent } from './components/ci-area-bases/ci-area-bases.component';
import { CiAreaLateralComponent } from './components/ci-area-lateral/ci-area-lateral.component';
import { CiAreaTotalComponent } from './components/ci-area-total/ci-area-total.component';


const routes: Routes = [{
    path: '',
    component: CiViewComponent,
    children: [
        {
            path: '',
            redirectTo: 'ci_definicao',
            pathMatch: 'full',
        },
        {
            path: 'ci_definicao',
            component: CiDefinicaoComponent
        },
        {
            path: 'ci_elementos',
            component: CiElementosComponent
        },
        {
            path: 'ci_areas',
            component: CiAreasComponent
        },
        {
            path: 'ci_area_bases',
            component: CiAreaBasesComponent
        },
        {
            path: 'ci_area_lateral',
            component: CiAreaLateralComponent
        },
        {
          path: 'ci_area_total',
          component: CiAreaTotalComponent
        },
        {
            path: 'ci_volume',
            component: CiVolumeComponent
        },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CilindroRouting { }