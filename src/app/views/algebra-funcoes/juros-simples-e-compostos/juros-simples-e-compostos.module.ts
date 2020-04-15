
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';

import { ServicoJurosSimplesComposto } from './shared/juros-simples-e-compostos.service';
import { JurosSimplesCompostoRoutingModule } from './juros-simples-e-compostos.routing';

import { JscViewComponent } from './components/jsc-view/jsc-view.component';
import { JscCompostosCapitalComponent } from './components/jsc-compostos-capital/jsc-compostos-capital.component';
import { JscCompostosMontanteComponent } from './components/jsc-compostos-montante/jsc-compostos-montante.component';
import { JscCompostosTaxaComponent } from './components/jsc-compostos-taxa/jsc-compostos-taxa.component';
import { JscCompostosTempoComponent } from './components/jsc-compostos-tempo/jsc-compostos-tempo.component';
import { JscDescricaoComponent } from './components/jsc-descricao/jsc-descricao.component';
import { JscSidebarComponent } from './components/jsc-sidebar/jsc-sidebar.component';
import { JscSimplesCapitalComponent } from './components/jsc-simples-capital/jsc-simples-capital.component';
import { JscSimplesMontanteComponent } from './components/jsc-simples-montante/jsc-simples-montante.component';
import { JscSimplesTaxaComponent } from './components/jsc-simples-taxa/jsc-simples-taxa.component';
import { JscSimplesTempoComponent } from './components/jsc-simples-tempo/jsc-simples-tempo.component';

@NgModule({

    imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      SharedModule,
      CoreModule,
      JurosSimplesCompostoRoutingModule
    ],

    declarations: [
        JscViewComponent,
        JscCompostosCapitalComponent,
        JscCompostosMontanteComponent,
        JscCompostosTaxaComponent,
        JscCompostosTempoComponent,
        JscDescricaoComponent,
        JscSidebarComponent,
        JscSimplesCapitalComponent,
        JscSimplesMontanteComponent,
        JscSimplesTaxaComponent,
        JscSimplesTempoComponent,
    ],

    providers: [ServicoJurosSimplesComposto]

  })
export class JurosSimplesCompostoModule { }
