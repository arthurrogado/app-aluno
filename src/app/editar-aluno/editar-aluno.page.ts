import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosService } from '../services/dados.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.page.html',
  styleUrls: ['./editar-aluno.page.scss'],
})
export class EditarAlunoPage implements OnInit {

  nome : string;
  sexo : string;
  telefone : string;
  matricula : string;
  bilingue : boolean = false;
  cursos : string[];

  indice : number;
  aluno : any;

  constructor(
    public dados : DadosService,
    public rota : ActivatedRoute,
    public toast : ToastController,
    public router : Router
  ) { }

  ngOnInit() {
    this.rota.params.subscribe((parametros : any) => {
      this.indice = parametros.id;
    })

    this.aluno = this.dados.getAlunos()[this.indice];
    console.log(this.aluno.name)
  }

  editar() {
    if (this.nome) {
      if(this.dados.validarMatricula(this.matricula)) {
        this.dados.editarAluno(this.indice ,this.nome, this.sexo, this.telefone, this.matricula, this.bilingue, this.cursos);
        this.router.navigate(['/visualizar-aluno/' + this.indice]);
        this.exibirMensagem('Aluno editado com sucesso', 3000, 'success');
      } else {
        this.exibirMensagem('Aluno já cadastrado', 3000, 'danger');
      }
    } else {
      this.exibirMensagem('Informe os dados necessários', 3000, 'danger');
    }
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
