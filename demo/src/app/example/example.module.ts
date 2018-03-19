import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppSharedModule } from './../shared/shared.module';

import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';

import { ExampleRoutingModule } from './example-routing.module';
import { IfTestComponent } from './iftest/iftest.component';
import { ParentSizeComponent } from './parentsize/parentsize.component';
import { SimplestUseComponent } from './simplestuse/simplestuse.component';
import { SourceFileComponent } from './sourcefile/sourcefile.component';

@NgModule({
  imports: [
    AppSharedModule,
    ImageViewerModule,
    ExampleRoutingModule
  ],
  declarations: [
    IfTestComponent,
    ParentSizeComponent,
    SimplestUseComponent,
    SourceFileComponent
  ]
})
export class ExampleModule { }
