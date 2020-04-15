import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GeoSharedModule } from '../shared/geo-shared.module';
import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';

import { EsferaRouting } from './esfera.routing';

import { EsViewComponent } from './components/es-view/es-view.component';
import { EsDefinicaoComponent } from './components/es-definicao/es-definicao.component';
import { EsSidebarComponent } from './components/es-sidebar/es-sidebar.component';
import { EsElementosComponent } from './components/es-elementos/es-elementos.component';
import { EsVolumeComponent } from './components/es-volume/es-volume.component';
import { EsAreaComponent } from './components/es-area/es-area.component';
import { EsAreaVolumeComponent } from './components/es-area-volume/es-area-volume.component';
import { EsFusoEsfericoComponent } from './components/es-fuso-esferico/es-fuso-esferico.component';
import { EsCalotaComponent } from './components/es-calota/es-calota.component';
import { EsPartesEsferaComponent } from './components/es-partes-esfera/es-partes-esfera.component';
import { EsCunhaEsfericaComponent } from './components/es-cunha-esferica/es-cunha-esferica.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GeoSharedModule,
    CoreModule,
    SharedModule,
    EsferaRouting
  ],
  declarations: [EsViewComponent, EsDefinicaoComponent, EsSidebarComponent, EsElementosComponent, EsVolumeComponent, EsAreaComponent, EsAreaVolumeComponent, EsFusoEsfericoComponent, EsCalotaComponent, EsPartesEsferaComponent, EsCunhaEsfericaComponent]
})
export class EsferaModule { }
