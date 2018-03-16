import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';

@NgModule({
    imports: [RouterModule, NgbCollapseModule.forRoot() ],
    exports: [CommonModule, HeaderComponent, FooterComponent, ContentWrapperComponent],
    declarations: [HeaderComponent, FooterComponent, ContentWrapperComponent],
    providers: [],
})
export class AppSharedModule { }
