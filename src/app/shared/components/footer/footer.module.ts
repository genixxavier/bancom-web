import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FooterComponent } from './footer.component';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@NgModule({
    declarations: [FooterComponent],
    imports: [CommonModule, NgOptimizedImage, MatListModule, RouterLink],
    exports: [FooterComponent],
})
export class FooterModule {}
