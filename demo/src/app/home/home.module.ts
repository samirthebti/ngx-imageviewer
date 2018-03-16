import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppSharedModule } from './../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    AppSharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule { }
