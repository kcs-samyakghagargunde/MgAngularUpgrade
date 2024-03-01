import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSlidePageComponent } from './new-slide-page.component';

describe('NewSlidePageComponent', () => {
  let component: NewSlidePageComponent;
  let fixture: ComponentFixture<NewSlidePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSlidePageComponent]
    });
    fixture = TestBed.createComponent(NewSlidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
