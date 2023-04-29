import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarAlunoPageRoutingModule } from './adicionar-aluno-routing.module';

import { AdicionarAlunoPage } from './adicionar-aluno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarAlunoPageRoutingModule
  ],
  declarations: [AdicionarAlunoPage]
})
export class AdicionarAlunoPageModule {}
