import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancomBoxComponent } from './bancom-box.component';

describe('BancomBoxComponent', () => {
  let component: BancomBoxComponent;
  let fixture: ComponentFixture<BancomBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BancomBoxComponent]
    });
    fixture = TestBed.createComponent(BancomBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
