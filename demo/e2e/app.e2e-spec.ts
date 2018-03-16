import { NgxImageviewerDemoPage } from './app.po';

describe('ngx-imageviewer-demo App', () => {
  let page: NgxImageviewerDemoPage;

  beforeEach(() => {
    page = new NgxImageviewerDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
