import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTruequesComponent } from './mis-trueques.component';

describe('MisTruequesComponent', () => {
  let component: MisTruequesComponent;
  let fixture: ComponentFixture<MisTruequesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisTruequesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisTruequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
