import { TestBed, inject } from '@angular/core/testing';

import { ImageCacheService } from './imagecache.service';

describe('ImageCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageCacheService]
    });
  });

  it('should create service', inject([ImageCacheService], (service: ImageCacheService) => {
    expect(service).toBeTruthy();
  }));

  it('should return a zero length cache array', inject([ImageCacheService], (service: ImageCacheService) => {
    expect(service.cache.length).toBe(0);
  }));

  it('should return a null or undefined when searching for a unexistent url', inject([ImageCacheService], (service: ImageCacheService) => {
    expect(service.getCache('unexistent_url_cached', 0)).toBeFalsy();
  }));

  it('should return a saved cache', inject([ImageCacheService], (service: ImageCacheService) => {
    const url1 = 'test_url1';
    const url2 = 'test_url2';
    const page10Content = 'page10';
    const page11Content = 'page11';
    const page20Content = 'page20';

    service.saveImage(url1, 0, page10Content);
    service.saveImage(url1, 1, page11Content);
    service.saveImage(url2, 0, page20Content);

    expect(service.getCache(url1, 0).image).toBe(page10Content);
    expect(service.getCache(url1, 0).image).not.toBe(page11Content);
    expect(service.getCache(url1, 1).image).toBe(page11Content);
    expect(service.getCache(url1, 1).image).not.toBe(page10Content);
    expect(service.getCache(url2, 0).image).toBe(page20Content);
    expect(service.getCache(url2, 0).image).not.toBe(page10Content);
    expect(service.getCache(url2, 0).image).not.toBe(page11Content);
  }));

  it('should return a saved image', inject([ImageCacheService], (service: ImageCacheService) => {
    const url1 = 'test_url1';
    const url2 = 'test_url2';
    const page10Content = 'page10';
    const page11Content = 'page11';
    const page20Content = 'page20';

    service.saveImage(url1, 0, page10Content);
    service.saveImage(url1, 1, page11Content);
    service.saveImage(url2, 0, page20Content);

    expect(service.getImage(url1, 0)).toBe(page10Content);
    expect(service.getImage(url1, 0)).not.toBe(page11Content);
    expect(service.getImage(url1, 1)).toBe(page11Content);
    expect(service.getImage(url1, 1)).not.toBe(page10Content);
    expect(service.getImage(url2, 0)).toBe(page20Content);
    expect(service.getImage(url2, 0)).not.toBe(page10Content);
    expect(service.getImage(url2, 0)).not.toBe(page11Content);
  }));

  it('should return nothing after dispose', inject([ImageCacheService], (service: ImageCacheService) => {
    const url = 'test_url';
    const page0Content = 'page0';

    service.saveImage(url, 0, page0Content);

    expect(service.getImage(url, 0)).toBe(page0Content);

    service.disposeCache();

    expect(service.getImage(url, 0)).not.toBe(page0Content);
    expect(service.getImage(url, 0)).toBeFalsy();
  }));

  it('should override existent image', inject([ImageCacheService], (service: ImageCacheService) => {
    const url = 'test_url';
    const page0Content1 = 'page0-1';
    const page0Content2 = 'page0-2';

    service.saveImage(url, 0, page0Content1);
    expect(service.getImage(url, 0)).toBe(page0Content1);

    service.saveImage(url, 0, page0Content2);
    expect(service.getImage(url, 0)).toBe(page0Content2);
  }));
});
