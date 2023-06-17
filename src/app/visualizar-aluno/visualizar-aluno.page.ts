import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-visualizar-aluno',
  templateUrl: './visualizar-aluno.page.html',
  styleUrls: ['./visualizar-aluno.page.scss'],
})
export class VisualizarAlunoPage implements OnInit {

  id : number;
  aluno : any;
  cursos : string = '';

  constructor(
    public rota : ActivatedRoute,
    public dados : DadosService
  ) { }

  async ngOnInit() {
    
    this.rota.params.subscribe((parametros : any) => {
      this.id = parametros.id;
    })

    this.aluno = await this.dados.getAluno(this.id);
    console.log(this.aluno)

    this.dados.getCursosFromIdAluno(this.id)
    .then((cursos : any) => {
      cursos.forEach((curso : any) => {
        console.log(curso)
        this.cursos += curso.nome + ', ';
      })
    })
  }

}
