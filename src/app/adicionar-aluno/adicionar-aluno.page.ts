import { Component, OnInit } from '@angular/core';
import { Curso, DadosService } from '../services/dados.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar-aluno',
  templateUrl: './adicionar-aluno.page.html',
  styleUrls: ['./adicionar-aluno.page.scss'],
})
export class AdicionarAlunoPage implements OnInit {

  nome : string;
  sexo : string;
  telefone : string;
  matricula : string;
  bilingue : boolean = false;
  cursos : Curso[];
  cursosAluno : Curso[] = [];

  constructor(
    public dados : DadosService,
    public rota : Router,
    public toast : ToastController
  ) { }

  async ngOnInit() {
    this.cursos = await this.dados.getCursos();
  }

  cadastrar() {
    /* if (this.nome) {
      if(this.dados.validarMatricula(this.matricula)) {
        this.dados.adicionarAluno(this.nome, this.sexo, this.telefone, this.matricula, this.bilingue, this.cursos);
        this.rota.navigate(['/listar-alunos']);
        this.exibirMensagem('Aluno cadastrado com sucesso', 3000, 'success');
      } else {
        this.exibirMensagem('Aluno já cadastrado', 3000, 'danger');
      }
    } else {
      this.exibirMensagem('Informe os dados necessários', 3000, 'danger');
    } */

    this.dados.adicionarAluno(this.nome, this.sexo, this.telefone, this.matricula, this.bilingue, this.cursosAluno)
    .then(result => {
      console.log(result)
      if(result.ok){
        this.exibirMensagem('Aluno cadastrado com sucesso', 3000, 'success');
        this.rota.navigate(['/listar-alunos']);
      }
    })
  }

  async exibirMensagem(mensagem : any, duration : any, color : any) {
    const toast = await this.toast.create({
      message: mensagem,
      duration: duration,
      color: color
    });
    toast.present();
  }

}
