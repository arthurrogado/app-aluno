import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionarAlunoPage } from './adicionar-aluno.page';

describe('AdicionarAlunoPage', () => {
  let component: AdicionarAlunoPage;
  let fixture: ComponentFixture<AdicionarAlunoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdicionarAlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
