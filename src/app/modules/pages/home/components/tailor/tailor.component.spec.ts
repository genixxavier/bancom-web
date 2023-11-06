import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailorComponent } from './tailor.component';

describe('TailorComponent', () => {
  let component: TailorComponent;
  let fixture: ComponentFixture<TailorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TailorComponent]
    });
    fixture = TestBed.createComponent(TailorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
