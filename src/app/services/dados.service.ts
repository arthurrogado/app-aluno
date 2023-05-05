import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  alunoInicial : Aluno = new Aluno('João', 'Masculino', '999999999', '123456', true, ['Inglês', 'Espanhol'])
  alunos : Aluno[] = [this.alunoInicial];
  novoAluno : Aluno;
  indice : number;

  public getAlunos() {
    return this.alunos;
  }

  public encaminharEdicao(aluno : Aluno) {
    this.indice = this.alunos.indexOf(aluno);
    this.rota.navigate(['/editar-aluno/'+this.indice]);
  }

  public adicionarAluno(nome : string, sexo : string, telefone : string, matricula : string, bilingue : boolean, cursos : string[]) {
    this.novoAluno = new Aluno(nome, sexo, telefone, matricula, bilingue, cursos);
    this.alunos.push(this.novoAluno);
  }

  public editarAluno(index : number, nome : string, sexo : string, telefone : string, matricula : string, bilingue : boolean, cursos : string[]) {
    this.novoAluno = new Aluno(nome, sexo, telefone, matricula, bilingue, cursos);
    this.alunos.splice(index, 1, this.novoAluno)
  }

  public visualizarAluno(aluno : Aluno) {
    this.indice = this.alunos.indexOf(aluno);
    this.rota.navigate(['visualizar-aluno/'+this.indice]);
  }

  public excluirAluno(aluno : Aluno) {
    this.indice = this.alunos.indexOf(aluno);
    this.alunos.splice(this.indice, 1);
  }

  public validarMatricula(matricula : string) {
    if(this.alunos.map(aluno => aluno.matricula).includes(matricula)) {
      return false;
    } else {
      return true;
    }

  }

  constructor(public rota : Router) { }

}

class Aluno {
  nome : string;
  sexo : string;
  telefone : string;
  matricula : string;
  bilingue : boolean;
  cursos : string[];

  constructor(nome : string, sexo : string, telefone : string, matricula : string, bilingue : boolean, cursos : string[]) {
    this.nome = nome;
    this.sexo = sexo;
    this.telefone = telefone;
    this.matricula = matricula;
    this.bilingue = bilingue;
    this.cursos = cursos;
  }

  public getNome() {
    return this.nome;
  }

}