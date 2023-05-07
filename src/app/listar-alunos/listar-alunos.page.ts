import { Component, OnInit } from '@angular/core';
import { DadosService } from '../services/dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.page.html',
  styleUrls: ['./listar-alunos.page.scss'],
})
export class ListarAlunosPage implements OnInit {

  constructor(
    public dados : DadosService,
    public rota : Router
  ) { }

  ngOnInit() {
  }

  adicionarAluno() {
    this.rota.navigate(['/adicionar-aluno']);
  }

  abrirConfirmacaoExclusao(indice : number) {
    
  }

  testeApi() {
    console.log('TESTANDO A API')

    let bodyFd = new FormData();
    bodyFd.append('acao', 'nome');

    fetch('http://localhost:80/api_ionic/api.php', {
      method: 'POST',
      body: bodyFd
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
  }

}