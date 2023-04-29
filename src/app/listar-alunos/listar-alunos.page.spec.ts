import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarAlunosPage } from './listar-alunos.page';

describe('ListarAlunosPage', () => {
  let component: ListarAlunosPage;
  let fixture: ComponentFixture<ListarAlunosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarAlunosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
