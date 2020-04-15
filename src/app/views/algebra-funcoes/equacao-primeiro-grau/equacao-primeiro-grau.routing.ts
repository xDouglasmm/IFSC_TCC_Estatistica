import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EgpDescriptionComponent } from './components/egp-description/egp-description.component';
import { EgpDynamicExpressionComponent } from './components/egp-dynamic-expression/egp-dynamic-expression.component';
import { EgpViewComponent } from './components/egp-view/egp-view.component';

const routes: Routes = [

  {
    path: '',
    component: EgpViewComponent,
    children: [
      {
        path: '',
        redirectTo: 'description_primeiro_grau',
        pathMatch: 'full',
      },
      {
        path: 'description_primeiro_grau',
        component: EgpDescriptionComponent
      },
      {
        path: 'resolucao_dinamica_primeiro_grau',
        component: EgpDynamicExpressionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquacaoPrimeiroGrauRoutingModule { }
