import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { NavbarComponent } from './navbar/navbar.component';

import { NavBarService } from './navbar/navbar.service';
import { AppRoutingModule } from '../../app.routing';
import { AlgebraFuncoesComponent } from './algebra-funcoes/algebra-funcoes.component';
import { GeometriaComponent } from './geometria/geometria.component';
import { NumerosOperacoesComponent } from './numeros-operacoes/numeros-operacoes.component';
import { EstatisticaComponent } from './estatistica/estatistica.component';
import { ErrorPagesComponent } from './error-pages/error-pages.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    HomeComponent,
    SobreComponent,
    NavbarComponent,
    AlgebraFuncoesComponent,
    GeometriaComponent,
    NumerosOperacoesComponent,
    ErrorPagesComponent,
    FooterComponent,
    EstatisticaComponent,
  ],

  exports: [
    HomeComponent,
    SobreComponent,
    NavbarComponent,
    AlgebraFuncoesComponent,
    GeometriaComponent,
    NumerosOperacoesComponent,
    FooterComponent,
  ],

  providers: [NavBarService]
})
export class PaginaInicialModule { }
