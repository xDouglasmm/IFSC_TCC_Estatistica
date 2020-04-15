import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RdtDescricaoComponent } from './components/rdt-descricao/rdt-descricao.component';
import { RdtDiretamenteProporcionalComponent } from './components/rdt-diretamente-proporcional/rdt-diretamente-proporcional.component';
import { RdtInversamenteProporcionalComponent } from './components/rdt-inversamente-proporcional/rdt-inversamente-proporcional.component';
import { RdtViewComponent } from './components/rdt-view/rdt-view.component';

const routes: Routes = [

  {
    path: '',
    component: RdtViewComponent,
    children: [
      {
        path: '',
        redirectTo: 'rdt_descricao',
        pathMatch: 'full',
      },
      {
        path: 'rdt_descricao',
        component: RdtDescricaoComponent
      },
      {
        path: 'rdt_diretamente_proporcional',
        component: RdtDiretamenteProporcionalComponent
      },
      {
        path: 'rdt_inversamente_proporcional',
        component: RdtInversamenteProporcionalComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegraDeTresRoutingModule { }
