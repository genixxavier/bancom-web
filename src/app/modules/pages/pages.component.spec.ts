import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesComponent } from './pages.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PagesComponent', () => {
    let component: PagesComponent;
    let fixture: ComponentFixture<PagesComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PagesComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        });
        fixture = TestBed.createComponent(PagesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
