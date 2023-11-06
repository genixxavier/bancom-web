import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { HeaderModule } from '../../shared/components/header/header.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeroComponent } from './home/components/hero/hero.component';
import { TailorComponent } from './home/components/tailor/tailor.component';
import { OursComponent } from './home/components/ours/ours.component';
import { BancomBoxModule } from '../../shared/components/bancom-box/bancom-box.module';
import { FooterModule } from '../../shared/components/footer/footer.module';

@NgModule({
    declarations: [PagesComponent, HomeComponent, FeaturesComponent, HeroComponent, TailorComponent, OursComponent],
    imports: [CommonModule, PagesRoutingModule, HeaderModule, FooterModule, BancomBoxModule, MatButtonModule, MatIconModule, NgOptimizedImage],
})
export class PagesModule {}
