import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtowrkLeftWidgetComponent } from './newtowrk-left-widget.component';

describe('NewtowrkLeftWidgetComponent', () => {
  let component: NewtowrkLeftWidgetComponent;
  let fixture: ComponentFixture<NewtowrkLeftWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtowrkLeftWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtowrkLeftWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
