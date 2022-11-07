import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoElementosComponent } from './catalogo-elementos.component';

describe('CatalogoElementosComponent', () => {
  let component: CatalogoElementosComponent;
  let fixture: ComponentFixture<CatalogoElementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoElementosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
