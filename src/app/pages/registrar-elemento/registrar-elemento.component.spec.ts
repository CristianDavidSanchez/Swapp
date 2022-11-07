import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarElementoComponent } from './registrar-elemento.component';

describe('RegistrarElementoComponent', () => {
  let component: RegistrarElementoComponent;
  let fixture: ComponentFixture<RegistrarElementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarElementoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
