import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FunDefinicaoComponent } from './components/fun-definicao/fun-definicao.component';
import { FunValorNumericoComponent } from './components/fun-valor-numerico/fun-valor-numerico.component';
import { FunEncontrarFuncaoComponent } from './components/fun-encontrar-funcao/fun-encontrar-funcao.component';
import { FunSegundoGrauComponent } from './components/fun-segundo-grau/fun-segundo-grau.component';
import { FunViewComponent } from './components/fun-view/fun-view.component';

const router: Routes = [

  {
    path: '',
    component: FunViewComponent,
    children: [
      {
        path: '',
        redirectTo: 'funcoes_definicao',
        pathMatch: 'full',
      },
      {
        path: 'funcoes_definicao',
        component: FunDefinicaoComponent
      },
      {
        path: 'funcoes_encontrar_valor_numerico',
        component: FunValorNumericoComponent
      },
      {
        path: 'funcoes_encontrar_funcao',
        component: FunEncontrarFuncaoComponent
      },
      {
        path: 'funcoes_segundo_grau',
        component: FunSegundoGrauComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class FuncoesRoutingModule { }
