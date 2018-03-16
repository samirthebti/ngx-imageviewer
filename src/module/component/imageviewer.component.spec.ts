import { ImageCacheService } from './../service/imagecache.service';
import { IMAGEVIEWER_CONFIG, IMAGEVIEWER_CONFIG_DEFAULT } from './imageviewer.config';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImageViewerComponent } from './imageviewer.component';

describe('ImageViewerComponent', function () {
  let de: DebugElement;
  let comp: ImageViewerComponent;
  let fixture: ComponentFixture<ImageViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageViewerComponent],
      providers: [{
        provide: IMAGEVIEWER_CONFIG,
        useValue: IMAGEVIEWER_CONFIG_DEFAULT
      }, ImageCacheService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageViewerComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('canvas'));
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have default width size', () => {
    fixture.detectChanges();
    const canvas = de.nativeElement;
    expect(canvas.width).toEqual(IMAGEVIEWER_CONFIG_DEFAULT.width);
  });
});
