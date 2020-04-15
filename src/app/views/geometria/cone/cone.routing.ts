import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { CnViewComponent } from './components/cn-view/cn-view.component';
import { CnDefinicaoComponent } from './components/cn-definicao/cn-definicao.component';
import { CnElementosComponent } from './components/cn-elementos/cn-elementos.component';
import { CnAreasComponent } from './components/cn-areas/cn-areas.component';
import { CnVolumeComponent } from './components/cn-volume/cn-volume.component';
import { CnTroncoConeComponent } from './components/cn-tronco-cone/cn-tronco-cone.component';
import { CnAreaBaseComponent } from './components/cn-area-base/cn-area-base.component';
import { CnAreaLateralComponent } from './components/cn-area-lateral/cn-area-lateral.component';
import { CnAreaTotalComponent } from './components/cn-area-total/cn-area-total.component';

const routes: Routes = [{
  path: '',
  component: CnViewComponent,
  children: [
      {
          path: '',
          redirectTo: 'cn_definicao',
          pathMatch: 'full',
      },
      {
        path: 'cn_definicao',
        component: CnDefinicaoComponent
      },
      {
        path: 'cn_elementos',
        component: CnElementosComponent
      },
      {
        path: 'cn_areas',
        component: CnAreasComponent
      },
      {
        path: 'cn_volume',
        component: CnVolumeComponent
      },
      {
        path: 'cn_tronco_cone',
        component: CnTroncoConeComponent
      },
      {
        path: 'cn_area_base',
        component: CnAreaBaseComponent
      },
      {
        path: 'cn_area_lateral',
        component: CnAreaLateralComponent
      },
      {
        path: 'cn_area_total',
        component: CnAreaTotalComponent
      },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConeRouting { }
