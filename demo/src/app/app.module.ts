
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ImageViewerModule, IMAGEVIEWER_CONFIG, ImageViewerConfig } from '@hallysonh/ngx-imageviewer';

import { AppRoutingModule } from './app-routing.module';
import { AppSharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';

export const MY_IMAGEVIEWER_CONFIG: ImageViewerConfig = {
  rotateStepper: true,
  nextPageButton: { tooltip: 'Próxima página' },
  beforePageButton: { tooltip: 'Página anterior' },
  zoomInButton: { tooltip: 'Aproximar' },
  zoomOutButton: { tooltip: 'Distanciar' },
  rotateLeftButton: { tooltip: 'Girar esquerda' },
  rotateRightButton: { tooltip: 'Girar direita' },
  resetButton: { tooltip: 'Resetar' },
  buttonStyle: {
    bgStyle: '#B71C1C',
    borderWidth: 2,
    borderStyle: '#FFFFFF',
    iconStyle: '#FFFFFF'
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ngx-imageviewer-demo-id' }),
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AppSharedModule,
    HomeModule,
    ImageViewerModule,
  ],
  providers: [{
    provide: IMAGEVIEWER_CONFIG,
    useValue: MY_IMAGEVIEWER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
