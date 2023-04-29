import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarAlunoPageRoutingModule } from './visualizar-aluno-routing.module';

import { VisualizarAlunoPage } from './visualizar-aluno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarAlunoPageRoutingModule
  ],
  declarations: [VisualizarAlunoPage]
})
export class VisualizarAlunoPageModule {}
