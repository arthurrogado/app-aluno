import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarAlunoPage } from './adicionar-aluno.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarAlunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarAlunoPageRoutingModule {}
