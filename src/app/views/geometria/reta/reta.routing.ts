import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RetaComponent } from './reta.component';
import { DefinicaoRetaComponent } from './componentes/definicao-reta/definicao-reta.component';
import { ConstrucaoRetaComponent } from './componentes/construcao-reta/construcao-reta.component';
import { SemiRetaComponent } from './componentes/semi-reta/semi-reta.component';
import { SegmentoRetaComponent } from './componentes/segmento-reta/segmento-reta.component';
import { PosicoesRelativasRetaComponent } from './componentes/posicoes-relativas-reta/posicoes-relativas-reta.component';
import { AxiomasRetaComponent } from './componentes/axiomas-reta/axiomas-reta.component';

const retaRotas: Routes = [
    {
      path: 'reta',
      component: RetaComponent,
      children: [
        { path: '', component: DefinicaoRetaComponent },
        { path: 'definicao', component: DefinicaoRetaComponent },
        { path: 'construcao', component: ConstrucaoRetaComponent },
        { path: 'axiomas', component: AxiomasRetaComponent },
        { path: 'posicoes', component: PosicoesRelativasRetaComponent },
        { path: 'semireta', component: SemiRetaComponent },
        { path: 'segmento', component: SegmentoRetaComponent },
      ]
    },
  ];
@NgModule({
    imports: [
      RouterModule.forChild(retaRotas)
    ],
    exports: [
      RouterModule
    ]
  })
  export class RetaRoutingModule { }
