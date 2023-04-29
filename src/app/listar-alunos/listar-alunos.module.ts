import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarAlunosPageRoutingModule } from './listar-alunos-routing.module';

import { ListarAlunosPage } from './listar-alunos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarAlunosPageRoutingModule
  ],
  declarations: [ListarAlunosPage]
})
export class ListarAlunosPageModule {}
