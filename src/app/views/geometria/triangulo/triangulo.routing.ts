import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrianguloComponent } from './triangulo.component';
import { TresVerticesComponent } from './componentes/tres-vertices/tres-vertices.component';
import { TresLadosComponent } from './componentes/tres-lados/tres-lados.component';
import { LadoCompreendidoComponent } from './componentes/lado-compreendido/lado-compreendido.component';
import { AngulosInternosComponent } from './componentes/angulos-internos/angulos-internos.component';
import { TeoremaPitagorasComponent } from './componentes/teorema-pitagoras/teorema-pitagoras.component';
import { AnguloCompreendidoComponent } from './componentes/angulo-compreendido/angulo-compreendido.component';
import { DefinicaoTrianguloComponent } from './componentes/definicao-triangulo/definicao-triangulo.component';

const trianguloRotas: Routes = [
    {
      path: '',
      component: TrianguloComponent,
      children: [
        { path: '', component: DefinicaoTrianguloComponent },
        { path: 'definicao', component: DefinicaoTrianguloComponent },
        { path: 'tres_vertices', component: TresVerticesComponent },
        { path: 'tres_lados', component: TresLadosComponent },
        { path: 'angulo_compreendido', component: AnguloCompreendidoComponent },
        { path: 'lado_compreendido', component: LadoCompreendidoComponent },
        { path: 'teorema_pitagoras', component: TeoremaPitagorasComponent },
        { path: 'angulos_internos', component: AngulosInternosComponent }
      ]
    },
  ];
  @NgModule({
      imports: [
        RouterModule.forChild(trianguloRotas)
      ],
      exports: [
        RouterModule
      ]
    })
    export class  TrianguloRoutingModule { }
