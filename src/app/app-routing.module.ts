import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'listar-alunos',
    loadChildren: () => import('./listar-alunos/listar-alunos.module').then( m => m.ListarAlunosPageModule)
  },
  {
    path: 'adicionar-aluno',
    loadChildren: () => import('./adicionar-aluno/adicionar-aluno.module').then( m => m.AdicionarAlunoPageModule)
  },
  {
    path: 'visualizar-aluno',
    loadChildren: () => import('./visualizar-aluno/visualizar-aluno.module').then( m => m.VisualizarAlunoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
