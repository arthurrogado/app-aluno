import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosService, Aluno, Curso } from '../services/dados.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.page.html',
  styleUrls: ['./editar-aluno.page.scss'],
})
export class EditarAlunoPage implements OnInit {

  id : number;
  aluno : Aluno;
  cursos : Curso[];
  cursosAluno : number[]; // String com ID's dos cursos do aluno
  valorBilingue : boolean;

  constructor(
    public dados : DadosService,
    public rota : ActivatedRoute,
    public toast : ToastController,
    public router : Router
  ) { }

  async ngOnInit() {
    this.rota.params.subscribe((parametros : any) => {
      this.id = parametros.indice;
    })
    console.log('ID');
    console.log(this.id);

    this.aluno = await this.dados.getAluno(this.id);

    this.cursos = await this.dados.getCursos();
    console.log(this.cursos);

    this.cursosAluno = await this.dados.getCursosIdFromIdAluno(this.id);

    /* this.cursos.forEach(curso => {
      const selecaoCursos = document.querySelector('#cursos');
      let option = document.createElement('ion-select-option')
      option.setAttribute('value', curso.id.toString());
      option.innerHTML = curso.nome;

      if (this.cursosAluno.find(cursoAluno => cursoAluno.id == curso.id)) {
        // Curso checked
        console.log('OPA CHECKED')
        option.setAttribute('selected', 'true');
      } else {
        // Curso not checked
        option.ariaChecked = 'false';
      }
      selecaoCursos?.appendChild(option);
    }) */

  }

  async editar() {
    if(this.aluno.nome) {
      if(this.dados.validarMatricula(this.aluno.matricula, this.aluno.matricula)) {
        console.log('EDITAR')
        let responseData : any = await this.dados.editarAluno(this.aluno, this.cursosAluno);
        if(responseData.status == '200') {
          this.router.navigate(['/visualizar-aluno/' + this.id]);
          this.dados.placeAlunos();
          this.exibirMensagem('Aluno editado com sucesso', 3000, 'success');
        }

      } else {
        this.exibirMensagem('Aluno já cadastrado', 3000, 'danger');
      }
    } else {
      this.exibirMensagem('Informe os dados necessários', 3000, 'danger');
    }
  }

  atualizarValorBilingue() {
    //this.aluno.bilingue = this.valorBilingue === true ? 1 : 0; // 
  }

  async exibirMensagem(mensagem : any, duration : any, color : any) {
    const toast = await this.toast.create({
      message: mensagem,
      duration: duration,
      color: color
    });
    toast.present();
  }

  teste() {
    console.log('Cursos Aluno')
    console.log(this.cursosAluno);
    console.log('Cursos')
    console.log(this.cursos);
    console.log('Aluno')
    console.log(this.aluno);
  }

}
