import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { IfTestComponent } from './iftest/iftest.component';
import { ParentSizeComponent } from './parentsize/parentsize.component';
import { SimplestUseComponent } from './simplestuse/simplestuse.component';
import { SourceFileComponent } from './sourcefile/sourcefile.component';

@NgModule({
    imports: [RouterModule.forChild([
      { path: 'iftest', component: IfTestComponent },
      { path: 'parentsize', component: ParentSizeComponent },
      { path: 'simplestuse', component: SimplestUseComponent },
      { path: 'sourcefile', component: SourceFileComponent },
      { path: '', redirectTo: 'simplestuse', pathMatch: 'full' }
    ])],
    exports: [RouterModule]
  })
export class ExampleRoutingModule {}
