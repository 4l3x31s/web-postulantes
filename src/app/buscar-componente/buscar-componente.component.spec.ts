import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarComponenteComponent } from './buscar-componente.component';

describe('BuscarComponenteComponent', () => {
  let component: BuscarComponenteComponent;
  let fixture: ComponentFixture<BuscarComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
