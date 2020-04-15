import { ConeRouting } from './cone.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { GeoSharedModule } from '../shared/geo-shared.module';
import { CoreModule } from '../../../core/core.module';

// Componentes
import { CnViewComponent } from './components/cn-view/cn-view.component';
import { CnSidebarComponent } from './components/cn-sidebar/cn-sidebar.component';
import { CnDefinicaoComponent } from './components/cn-definicao/cn-definicao.component';
import { CnElementosComponent } from './components/cn-elementos/cn-elementos.component';
import { CnAreasComponent } from './components/cn-areas/cn-areas.component';
import { CnVolumeComponent } from './components/cn-volume/cn-volume.component';
import { CnTroncoConeComponent } from './components/cn-tronco-cone/cn-tronco-cone.component';
import { CnAreaBaseComponent } from './components/cn-area-base/cn-area-base.component';
import { CnAreaLateralComponent } from './components/cn-area-lateral/cn-area-lateral.component';
import { CnAreaTotalComponent } from './components/cn-area-total/cn-area-total.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GeoSharedModule,
    CoreModule,
    SharedModule,
    ConeRouting,
  ],
  declarations: [
    CnViewComponent,
    CnSidebarComponent,
    CnDefinicaoComponent,
    CnElementosComponent,
    CnAreasComponent,
    CnVolumeComponent,
    CnTroncoConeComponent,
    CnAreaBaseComponent,
    CnAreaLateralComponent,
    CnAreaTotalComponent]
})
export class ConeModule { }
