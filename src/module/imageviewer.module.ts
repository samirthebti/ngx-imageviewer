import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { ImageViewerComponent } from './component/imageviewer.component';
import { ImageCacheService } from './service/imagecache.service';
import { ImageViewerConfig, IMAGEVIEWER_CONFIG, IMAGEVIEWER_CONFIG_DEFAULT } from './component/imageviewer.config';

// Export module's public API
export { ImageViewerComponent } from './component/imageviewer.component';
export { ImageCacheService } from './service/imagecache.service';
export { ImageViewerConfig, IMAGEVIEWER_CONFIG, IMAGEVIEWER_CONFIG_DEFAULT } from './component/imageviewer.config';

@NgModule({
  imports: [CommonModule],
  exports: [ImageViewerComponent],
  declarations: [ImageViewerComponent]
})
export class ImageViewerModule {
  static forRoot(config: ImageViewerConfig): ModuleWithProviders {
    return {
      ngModule: ImageViewerModule,
      providers: [{
        provide: IMAGEVIEWER_CONFIG,
        useValue: Object.assign({}, IMAGEVIEWER_CONFIG_DEFAULT, config)
      }, ImageCacheService]
    };
  }
}
