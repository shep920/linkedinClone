import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkRightWidgetComponent } from './network-right-widget.component';

describe('NetworkRightWidgetComponent', () => {
  let component: NetworkRightWidgetComponent;
  let fixture: ComponentFixture<NetworkRightWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkRightWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkRightWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
