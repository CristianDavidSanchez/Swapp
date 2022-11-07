import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisElementosComponent } from './mis-elementos.component';

describe('MisElementosComponent', () => {
  let component: MisElementosComponent;
  let fixture: ComponentFixture<MisElementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisElementosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
