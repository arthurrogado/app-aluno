import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarAlunosPage } from './listar-alunos.page';

const routes: Routes = [
  {
    path: '',
    component: ListarAlunosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarAlunosPageRoutingModule {}
