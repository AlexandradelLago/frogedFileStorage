import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewFileComponent } from './form-new-file.component';

describe('FormNewFileComponent', () => {
  let component: FormNewFileComponent;
  let fixture: ComponentFixture<FormNewFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
