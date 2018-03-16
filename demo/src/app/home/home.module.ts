import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppSharedModule } from './../shared/shared.module';
// import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        AppSharedModule,
        // ImageViewerModule.forRoot(),
        HomeRoutingModule,
        FormsModule
    ],
    declarations: [HomeComponent],
})
export class HomeModule { }
