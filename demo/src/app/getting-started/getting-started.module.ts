import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

import { AppSharedModule } from '../shared';
import { GettingStartedComponent } from './getting-started.component';
import { GettingStartedRoutingModule } from './getting-started-routing.module';

@NgModule({
  imports: [
    AppSharedModule,
    HighlightModule,
    GettingStartedRoutingModule
  ],
  declarations: [GettingStartedComponent],
})
export class GettingStartedModule { }
