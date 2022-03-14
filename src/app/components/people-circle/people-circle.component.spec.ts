import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCircleComponent } from './people-circle.component';

describe('PeopleCircleComponent', () => {
  let component: PeopleCircleComponent;
  let fixture: ComponentFixture<PeopleCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
