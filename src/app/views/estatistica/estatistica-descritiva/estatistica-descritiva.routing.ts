import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { EstDefinicaoComponent } from './components/est-definicao/est-definicao.component';
import { EstReferenciasComponent } from './components/est-referencias/est-referencias.component';
import { EstViewComponent } from './components/est-view/est-view.component';

const routes: Routes = [{
  
  path: '',
  component: EstViewComponent,
  children: [
      {
          path: '',
          redirectTo: 'est_definicao',
          pathMatch: 'full',
      },
      
      {
        path: 'est_definicao',
        component: EstDefinicaoComponent
      },
      {
        path: 'est_referencias',
        component: EstReferenciasComponent
      }
  
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstatisticaDescritivaRouting { }
