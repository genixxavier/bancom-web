import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OursComponent } from './ours.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('OursComponent', () => {
    let component: OursComponent;
    let fixture: ComponentFixture<OursComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [OursComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        });
        fixture = TestBed.createComponent(OursComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
