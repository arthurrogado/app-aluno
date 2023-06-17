import { Component, OnInit } from '@angular/core';
import { DadosService } from '../services/dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.page.html',
  styleUrls: ['./listar-alunos.page.scss'],
})
export class ListarAlunosPage implements OnInit {

  id : number;

  constructor(
    public dados : DadosService,
    public rota : Router
  ) { }

  ngOnInit() {
    this.dados.placeAlunos();
  }

  adicionarAluno() {
    this.rota.navigate(['/adicionar-aluno']);
  }

  abrirConfirmacaoExclusao(indice : number) {
    
  }

}