import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-visualizar-aluno',
  templateUrl: './visualizar-aluno.page.html',
  styleUrls: ['./visualizar-aluno.page.scss'],
})
export class VisualizarAlunoPage implements OnInit {

  indice : number;
  aluno : any;

  constructor(
    public rota : ActivatedRoute,
    public dados : DadosService
  ) { }

  ngOnInit() {

  this.rota.params.subscribe((parametros : any) => {
    this.indice = parametros.item;
  })

  this.aluno = this.dados.getAlunos()[this.indice];
  console.log(this.aluno.name)

  }

}
