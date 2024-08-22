import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubmiitedDialougeComponent } from './form-submiited-dialouge.component';

describe('FormSubmiitedDialougeComponent', () => {
  let component: FormSubmiitedDialougeComponent;
  let fixture: ComponentFixture<FormSubmiitedDialougeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSubmiitedDialougeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormSubmiitedDialougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
