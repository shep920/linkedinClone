import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSidecardComponent } from './job-sidecard.component';

describe('JobSidecardComponent', () => {
  let component: JobSidecardComponent;
  let fixture: ComponentFixture<JobSidecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSidecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSidecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
