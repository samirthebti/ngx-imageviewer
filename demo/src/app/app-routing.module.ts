import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'getting-started', loadChildren: 'app/getting-started/getting-started.module#GettingStartedModule' },
  { path: 'example', loadChildren: 'app/example/example.module#ExampleModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
