import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarAlunoPage } from './visualizar-aluno.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarAlunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarAlunoPageRoutingModule {}
