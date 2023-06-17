import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  alunoInicial : Aluno = new Aluno(0, 'João', 'Masculino', '999999999', '123456', true)
  alunos : Aluno[] = [this.alunoInicial];
  novoAluno : Aluno;
  indice : number;

  //api_url : string = 'http://localhost:80/api_ionic/api.php';
  api_url : string = 'https://appalunoionic.000webhostapp.com/api.php';

  async ngOnInit() {
    this.placeAlunos();
  }

  public getAlunos() {
    return this.alunos;
  }

  public getAluno(id : number): Promise<Aluno> {
    const body = {
      'action' : 'getAluno',
      'id' : id
    }
    let bodyFd = new FormData();
    bodyFd.append('data', JSON.stringify(body));

    return fetch(this.api_url, {
      method: 'POST',
      body: bodyFd
    })
    .then(response => response.json())
    .then(aluno => {
      aluno.bilingue = aluno.bilingue == '1' ? true : false;
      const novoAluno = new Aluno(aluno.id, aluno.nome, aluno.sexo, aluno.telefone, aluno.matricula, aluno.bilingue);
      return novoAluno;
    })
  }

  public getCursos() : Promise<Curso[]> {
    const body = {
      'action' : 'getCursos'
    }
    let bodyFd = new FormData();
    bodyFd.append('data', JSON.stringify(body));

    return fetch(this.api_url, {
      method: 'POST',
      body: bodyFd
    })
    .then(response => response.json())
    .then(cursos => {
      let cursosArray : Curso[] = [];
      for(let curso of cursos) {
        cursosArray.push(new Curso(curso.id, curso.nome))
      }
      return cursosArray;
    })
    .catch(error => {
      console.error('Error: ', error)
      throw error;
    })
  }

  public getCursosFromIdAluno(id : number) : Promise<Curso[]> {
    const body = {
      'action' : 'getCursosFromIdAluno',
      'id_aluno': id
    }
    let fd = new FormData()
    fd.append('data', JSON.stringify(body))

    return fetch(this.api_url, {
      method: 'POST',
      body: fd
    })
    .then(response => response.json())
    .then(cursos => {
      let cursosAluno : Curso[] = [];
      for(let curso of cursos) {
        cursosAluno.push(new Curso(curso.id, curso.nome))
      }
      console.log('Cursos do aluno no SERVICE: ', cursosAluno)
      return cursosAluno;
    })
    .catch(error => {
      console.error('Error: ', error)
      throw error;
    })
  }

  getCursosIdFromIdAluno(id : number) : Promise<number[]> {
    return this.getCursosFromIdAluno(id)
    .then(cursos => {
      let cursosId : number[] = [];
      for(let curso of cursos) {
        cursosId.push(curso.id)
      }
      return cursosId;
    })
  }

  

  public dbGetAlunos() {
    const body = {
      'action' : 'getAlunos'
    }
    let bodyFd = new FormData();
    bodyFd.append('data', JSON.stringify(body));

    return fetch(this.api_url, {
      method: 'POST',
      body: bodyFd
    })
    .then(response => response.json() )
    .catch(error => console.error('Error: ', error))
  }

  public placeAlunos() {
    this.dbGetAlunos()
    .then(alunos => {
      // clear alunos array
      this.alunos = [];
      for(let aluno of alunos) {
        console.log(aluno)
        this.alunos.push(new Aluno(aluno.id, aluno.nome, aluno.sexo, aluno.telefone, aluno.matricula, aluno.bilingue))
      }
    })
  }

  public getIndexFromAluno(aluno : Aluno) {
    return this.alunos.indexOf(aluno);
  }

  public encaminharEdicao(aluno : Aluno) {
    this.rota.navigate(['/editar-aluno/'+aluno.id]);
  }

  public adicionarAluno(nome : string, sexo : string, telefone : string, matricula : string, bilingue : boolean, cursosAluno : Curso[]) {
    let body = {
      'action' : 'adicionarAluno',
      'nome' : nome,
      'sexo' : sexo,
      'telefone' : telefone,
      'matricula' : matricula,
      'bilingue' : bilingue,
      'cursos' : cursosAluno
    }
    let fd = new FormData();
    fd.append('data', JSON.stringify(body));

    return fetch(this.api_url, {
      method: 'POST',
      body: fd
    })
    .then(response => response.json())
    .then(data => {
      return data;
    })
  }

  public editarAluno(aluno : Aluno, cursosAluno : number[]) {
    let body = {
      'action' : 'editarAluno',
      'id' : aluno.id,
      'nome' : aluno.nome,
      'sexo' : aluno.sexo,
      'telefone' : aluno.telefone,
      'matricula' : aluno.matricula,
      'bilingue' : aluno.bilingue === true ? 1 : 0,
      'cursos' : cursosAluno
    }
    let fd = new FormData();
    fd.append('data', JSON.stringify(body));

    return fetch(this.api_url, {
      method: 'POST',
      body: fd
    })
    .then(response => response.json())
    .then(data => {
      return data;
    })

  }

  public visualizarAluno(aluno : Aluno) {
    this.rota.navigate(['visualizar-aluno/'+aluno.id]);
  }

  public excluirAluno(aluno : Aluno) {
    /* this.indice = this.alunos.indexOf(aluno);
    this.alunos.splice(this.indice, 1);
    this.rota.navigate(['listar-alunos']); */
    let body = {
      'action' : 'excluirAluno',
      'idAluno' : aluno.id
    }
    let fd = new FormData();
    fd.append('data', JSON.stringify(body));
    fetch(this.api_url, {
      method: 'POST',
      body: fd
    })
    .then(response => response.json())
    .then(data => {
      this.placeAlunos();
      console.log(data);
    })
  }





  public validarMatricula(matricula : string, except : string = '-1') {
    let matriculas = this.alunos.map(aluno => aluno.matricula);
    if(matriculas.includes(matricula) && !matriculas.includes(except) ) {
      return false;
    } else {
      return true;
    }

  }

  constructor(public rota : Router) { }

}

export class Aluno {
  id : number;
  nome : string;
  sexo : string;
  telefone : string;
  matricula : string;
  bilingue : boolean;

  constructor(id : number, nome : string, sexo : string, telefone : string, matricula : string, bilingue : boolean) {
    this.id = id;
    this.nome = nome;
    this.sexo = sexo;
    this.telefone = telefone;
    this.matricula = matricula;
    this.bilingue = bilingue;
  }

  public getNome() {
    return this.nome;
  }

}

export class Curso {
  id: number;
  nome: string;

  constructor(id : number, nome : string) {
    this.id = id;
    this.nome = nome;
  }
}