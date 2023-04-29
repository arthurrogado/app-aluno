import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizarAlunoPage } from './visualizar-aluno.page';

describe('VisualizarAlunoPage', () => {
  let component: VisualizarAlunoPage;
  let fixture: ComponentFixture<VisualizarAlunoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VisualizarAlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
