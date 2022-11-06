import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStarsComponent } from './list-stars.component';

describe('ListStarsComponent', () => {
  let component: ListStarsComponent;
  let fixture: ComponentFixture<ListStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
