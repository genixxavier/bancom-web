import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailorComponent } from './tailor.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TailorComponent', () => {
    let component: TailorComponent;
    let fixture: ComponentFixture<TailorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TailorComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        });
        fixture = TestBed.createComponent(TailorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
