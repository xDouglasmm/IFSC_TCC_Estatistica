import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { KatexModule } from 'ng-katex';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatExpansionModule,
  MatSidenavModule
} from '@angular/material';

import { ListaResultadoComponent } from './components/results/results.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { BaseViewComponent } from './components/base-view/base-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalErrorComponent } from './components/modal-error/modal-error.component';
import { MathPlotComponent } from './components/math-plot/math-plot.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatExpansionModule,
    MatSidenavModule,
    AngularFontAwesomeModule,
    KatexModule,
  ],

  exports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatExpansionModule,
    MatSidenavModule,
    ListaResultadoComponent,
    // SelecioneUmConteudoComponent,
    LoadingSpinnerComponent,
    ReactiveFormsModule,
    BaseViewComponent,
    AngularFontAwesomeModule,
    ModalErrorComponent,
    KatexModule,
    MathPlotComponent,
  ],

  declarations: [
    ListaResultadoComponent,
    LoadingSpinnerComponent,
    BaseViewComponent,
    ModalErrorComponent,
    MathPlotComponent,
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
