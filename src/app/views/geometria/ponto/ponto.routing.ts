import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PontoComponent } from './ponto.component';
import { DefinicaoPontoComponent } from './componentes/definicao-ponto/definicao-ponto.component';
import { ConstrucaoPontoComponent } from './componentes/construcao-ponto/construcao-ponto.component';

const pontoRotas: Routes = [
    {
      path: '',
      component: PontoComponent,
      children: [
        { path: '', component: DefinicaoPontoComponent },
        { path: 'definicao', component: DefinicaoPontoComponent },
        { path: 'construcao', component: ConstrucaoPontoComponent },
      ]
    },
  ];
@NgModule({
    imports: [
      RouterModule.forChild(pontoRotas)
    ],
    exports: [
      RouterModule
    ]
  })
  export class PontoRoutingModule { }
