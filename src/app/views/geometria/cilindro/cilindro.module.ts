import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GeoSharedModule } from '../shared/geo-shared.module';
import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';

import { CilindroRouting } from './cilindro.routing';

import { CiViewComponent } from './components/ci-view/ci-view.component';
import { CiSidebarComponent } from './components/ci-sidebar/ci-sidebar.component';
import { CiDefinicaoComponent } from './components/ci-definicao/ci-definicao.component';
import { CiElementosComponent } from './components/ci-elementos/ci-elementos.component';
import { CiAreasComponent } from './components/ci-areas/ci-areas.component';
import { CiVolumeComponent } from './components/ci-volume/ci-volume.component';
import { CiAreaBasesComponent } from './components/ci-area-bases/ci-area-bases.component';
import { CiAreaLateralComponent } from './components/ci-area-lateral/ci-area-lateral.component';
import { CiAreaTotalComponent } from './components/ci-area-total/ci-area-total.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GeoSharedModule,
    CoreModule,
    SharedModule,
    CilindroRouting
  ],
  declarations: [CiViewComponent, CiSidebarComponent, CiDefinicaoComponent, CiElementosComponent, CiAreasComponent, CiVolumeComponent, CiAreaBasesComponent, CiAreaLateralComponent, CiAreaTotalComponent]
})
export class CilindroModule { }
