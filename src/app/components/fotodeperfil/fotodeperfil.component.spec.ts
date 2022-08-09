import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotodeperfilComponent } from './fotodeperfil.component';

describe('FotodeperfilComponent', () => {
  let component: FotodeperfilComponent;
  let fixture: ComponentFixture<FotodeperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotodeperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotodeperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
