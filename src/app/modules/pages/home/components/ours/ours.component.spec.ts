import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OursComponent } from './ours.component';

describe('OursComponent', () => {
  let component: OursComponent;
  let fixture: ComponentFixture<OursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OursComponent]
    });
    fixture = TestBed.createComponent(OursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
