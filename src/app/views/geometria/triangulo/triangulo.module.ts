import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '../../../../../node_modules/@angular/forms';
import { CoreModule } from '../../../core/core.module';

import { KatexModule } from 'ng-katex';

import { TrianguloRoutingModule } from './triangulo.routing';
import { TrianguloComponent } from './triangulo.component';
import { SidebarTrianguloComponent } from './componentes/sidebar-triangulo/sidebar-triangulo.component';
import { TresVerticesComponent } from './componentes/tres-vertices/tres-vertices.component';
import { TresLadosComponent } from './componentes/tres-lados/tres-lados.component';
import { AnguloCompreendidoComponent } from './componentes/angulo-compreendido/angulo-compreendido.component';
import { LadoCompreendidoComponent } from './componentes/lado-compreendido/lado-compreendido.component';
import { TeoremaPitagorasComponent } from './componentes/teorema-pitagoras/teorema-pitagoras.component';
import { AngulosInternosComponent } from './componentes/angulos-internos/angulos-internos.component';
import { Triangulo } from './shared/triangulo.model';
import { DefinicaoTrianguloComponent } from './componentes/definicao-triangulo/definicao-triangulo.component';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    TrianguloRoutingModule,
    KatexModule,
  ],
  declarations: [
    TrianguloComponent,
    SidebarTrianguloComponent,
    TresVerticesComponent,
    TresLadosComponent,
    AnguloCompreendidoComponent,
    LadoCompreendidoComponent,
    TeoremaPitagorasComponent,
    AngulosInternosComponent,
    DefinicaoTrianguloComponent,
  ],
  exports: [
    TrianguloComponent
  ],
})

export class TrianguloModule { }
