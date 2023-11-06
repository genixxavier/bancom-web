import { Component, Inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { PostService } from '../../../services/post.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-create-post',
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, FormsModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, NgOptimizedImage, ReactiveFormsModule, MatProgressSpinnerModule],
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
    postForm: FormGroup;
    loading = false;

    constructor(
        private readonly fb: FormBuilder,
        private readonly _postService: PostService,
        public _dialogRef: MatDialogRef<CreatePostComponent>,
        @Inject(MAT_DIALOG_DATA) public userId: number
    ) {
        _dialogRef.disableClose = true;
        this.postForm = this.fb.group({
            title: ['', [Validators.required]],
            body: ['', [Validators.required]],
            userId: [userId],
        });
    }

    createPost() {
        this.loading = true;
        this._postService.createPost(this.postForm.value).subscribe({
            next: () => {
                this.loading = false;
                this._dialogRef.close(true);
            },
            error: err => {
                this.loading = false;
                console.log(err);
            },
        });
    }
}
