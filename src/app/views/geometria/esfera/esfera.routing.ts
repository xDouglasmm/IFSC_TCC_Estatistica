import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { EsViewComponent } from './components/es-view/es-view.component';
import { EsDefinicaoComponent } from './components/es-definicao/es-definicao.component';
import { EsElementosComponent } from './components/es-elementos/es-elementos.component';
import { EsAreaComponent } from './components/es-area/es-area.component';
import { EsVolumeComponent } from './components/es-volume/es-volume.component';
import { EsAreaVolumeComponent } from './components/es-area-volume/es-area-volume.component';
import { EsFusoEsfericoComponent } from './components/es-fuso-esferico/es-fuso-esferico.component';
import { EsCalotaComponent } from './components/es-calota/es-calota.component';
import { EsPartesEsferaComponent } from './components/es-partes-esfera/es-partes-esfera.component';
import { EsCunhaEsfericaComponent } from './components/es-cunha-esferica/es-cunha-esferica.component';

const routes: Routes = [{
  path: '',
  component: EsViewComponent,
  children: [
      {
        path: '',
        redirectTo: 'es_definicao',
        pathMatch: 'full',
      },
      {
        path: 'es_definicao',
        component: EsDefinicaoComponent,
      },
      {
        path: 'es_elementos',
        component: EsElementosComponent,
      },
      {
        path: 'es_area_volume',
        component: EsAreaVolumeComponent,
      },
      {
        path: 'es_area',
        component: EsAreaComponent,
      },
      {
        path: 'es_volume',
        component: EsVolumeComponent,
      },
      {
        path: 'es_partes_esfera',
        component: EsPartesEsferaComponent,
      },
      {
        path: 'es_fuso_esferico',
        component: EsFusoEsfericoComponent,
      },
      {
        path: 'es_calota',
        component: EsCalotaComponent
      },
      {
        path: 'es_cunha_esferica',
        component: EsCunhaEsfericaComponent,
      },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EsferaRouting { }
