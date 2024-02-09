import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GottyComponent } from './gotty.component';

describe('GottyComponent', () => {
  let component: GottyComponent;
  let fixture: ComponentFixture<GottyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GottyComponent]
    });
    fixture = TestBed.createComponent(GottyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
