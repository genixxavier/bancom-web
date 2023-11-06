import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostComponent } from './create-post.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreatePostComponent', () => {
    let component: CreatePostComponent;
    let fixture: ComponentFixture<CreatePostComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CreatePostComponent, HttpClientTestingModule, MatDialogModule, BrowserAnimationsModule],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: 123 },
                {
                    provide: MatDialogRef,
                    useValue: {
                        close: () => jest.fn(),
                    },
                },
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        });
        fixture = TestBed.createComponent(CreatePostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
