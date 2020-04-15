import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';

import { ServicoAnaliseCombinatoria } from './shared/analise-combinatoria.service';

import { AnaliseCombinatoriaRoutingModule } from './analise-combinatoria.routing';
import { AcViewComponent } from './components/ac-view/ac-view.component';
import { AcSidebarComponent } from './components/ac-sidebar/ac-sidebar.component';
import { AcDescricaoComponent } from './components/ac-descricao/ac-descricao.component';
import { AcPrincipioMultiplicativoComponent } from './components/ac-principio-multiplicativo/ac-principio-multiplicativo.component';
import { AcPermutacaoSimplesComponent } from './components/ac-permutacao-simples/ac-permutacao-simples.component';
import { AcArranjosSimplesComponent } from './components/ac-arranjos-simples/ac-arranjos-simples.component';
import { AcCombinacoesSimplesComponent } from './components/ac-combinacoes-simples/ac-combinacoes-simples.component';
import { AcBinomiosDeNewtonComponent } from './components/ac-binomios-de-newton/ac-binomios-de-newton.component';
import { AcTrianguloDePascalComponent } from './components/ac-triangulo-de-pascal/ac-triangulo-de-pascal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    AnaliseCombinatoriaRoutingModule,
  ],
  declarations: [
    AcViewComponent,
    AcSidebarComponent,
    AcDescricaoComponent,
    AcPrincipioMultiplicativoComponent,
    AcPermutacaoSimplesComponent,
    AcArranjosSimplesComponent,
    AcCombinacoesSimplesComponent,
    AcBinomiosDeNewtonComponent,
    AcTrianguloDePascalComponent,
  ],

  providers: [ ServicoAnaliseCombinatoria ]
})

export class AnaliseCombinatoriaModule { }
