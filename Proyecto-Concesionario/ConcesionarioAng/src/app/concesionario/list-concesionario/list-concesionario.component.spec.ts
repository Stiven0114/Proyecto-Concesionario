import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConcesionarioComponent } from './list-concesionario.component';

describe('ListConcesionarioComponent', () => {
  let component: ListConcesionarioComponent;
  let fixture: ComponentFixture<ListConcesionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConcesionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListConcesionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
