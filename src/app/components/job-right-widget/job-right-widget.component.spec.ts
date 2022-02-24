import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRightWidgetComponent } from './job-right-widget.component';

describe('JobRightWidgetComponent', () => {
  let component: JobRightWidgetComponent;
  let fixture: ComponentFixture<JobRightWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobRightWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRightWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
