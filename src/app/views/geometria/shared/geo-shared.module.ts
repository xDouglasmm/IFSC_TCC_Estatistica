import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { GeoBaseViewComponent } from './components/geo-base-view/geo-base-view.component';
import { GeoBtnComponent } from './components/geo-btn/geo-btn.component';
import { GeoDirective } from './directives/geo.directive';
import { GeoSceneComponent } from './components/geo-scene/geo-scene.component';
import { GeoRightbarComponent } from './components/geo-rightbar/geo-rightbar.component';


@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [GeoBaseViewComponent, GeoBtnComponent, GeoSceneComponent, GeoRightbarComponent],
  declarations: [GeoBaseViewComponent, GeoBtnComponent, GeoDirective, GeoSceneComponent, GeoRightbarComponent]
})
export class GeoSharedModule { }
