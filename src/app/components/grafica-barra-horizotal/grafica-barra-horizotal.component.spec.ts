import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaBarraHorizotalComponent } from './grafica-barra-horizotal.component';

describe('GraficaBarraHorizotalComponent', () => {
  let component: GraficaBarraHorizotalComponent;
  let fixture: ComponentFixture<GraficaBarraHorizotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficaBarraHorizotalComponent]
    });
    fixture = TestBed.createComponent(GraficaBarraHorizotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
