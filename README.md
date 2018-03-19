# ngx-imageviewer - Angular 5 - Canvas Image and PDF viewer

[![npm version](https://badge.fury.io/js/%40hallysonh%2Fngx-imageviewer.svg)](https://badge.fury.io/js/%40hallysonh%2Fngx-imageviewer)
[![Build Status](https://travis-ci.org/hallysonh/ngx-imageviewer.svg?branch=master)](https://travis-ci.org/hallysonh/ngx-imageviewer)
[![dependency Status](https://david-dm.org/hallysonh/ngx-imageviewer/status.svg)](https://david-dm.org/hallysonh/ngx-imageviewer)
[![devDependency Status](https://david-dm.org/hallysonh/ngx-imageviewer/dev-status.svg?branch=master)](https://david-dm.org/hallysonh/ngx-imageviewer#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/hallysonh/ngx-imageviewer.svg)](https://greenkeeper.io/)

## Features

* Configurable
* Resizeble component
* Supports JPEG, PNG, GIF and **PDF**
* Support File Objects
* Avaliable actions:
  * **Rotate**
  * **Zoom**
  * Reset to maximize size
  * Free movable
  * Change page (available just for PDF files)

## Demo

View the component in action at [https://hallysonh.github.io/ngx-imageviewer](https://hallysonh.github.io/ngx-imageviewer)

## Dependencies

* [Angular](https://angular.io) (*requires* Angular 5 or higher, tested with 5.2.9)
* [HammerJS](https://hammerjs.github.io/) (*requires* HammerJS 2 or higher, tested with 2.0.8)
* [PDF.js](https://mozilla.github.io/pdf.js/) (*requires* PDF.js 2.0.288)

## Installation

Install above dependencies via *npm* or *yarn* by:

```shell
yarn add @angular/core@5.x @angular/common@5.x hammerjs@2.x
```

Now install `ngx-imageviewer` via:

```shell
yarn add @hallysonh/ngx-imageviewer
```

## Icon Font

You can use any icon font to render the button's icons. However, the default icon font is the Google's Material Icons. To use them you can just add the follow line to your index.html:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

Optionaly, you can also install the font library via npm or yarn.

---

### SystemJS

>**Note**: If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-imageviewer`:

```js
map: {
  '@hallysonh/ngx-imageviewer': 'node_modules/@hallysonh/ngx-imageviewer/bundles/ngx-imageviewer.umd.js',
}
```

---

Once installed you need to import the main module:

```js
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
```

The only remaining part is to list the imported module in your application module:

```js
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [ImageViewerModule, ...],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Usage

Use the follow code on your html:

```html
<ngx-imageviewer [src]="imageSrc"></ngx-imageviewer>
```

Optionaly, you can provide the fields `width` and `height`. If you omit those values, the width and height in the config object will be used.

## Support PDF

To support PDF files you must first include `pdfjs` by `yarn add pdfjs-dist@2.0.2880` and add its reference in your `.angular-cli.json` file, like below:

```json
{
  ...
  "scripts": [
    "../node_modules/pdfjs-dist/build/pdf.min.js"
  ],
  ...
}
```

## Custom Configuration

Optionaly, you can provide a custom configuration like below:

```typescript
import { IMAGEVIEWER_CONFIG, ImageViewerConfig } from '@hallysonh/ngx-imageviewer';

const MY_IMAGEVIEWER_CONFIG: ImageViewerConfig = {
  buttonStyle: {
    bgStyle: '#B71C1C' // custom container's background style
  }
};

@Component({
  providers: [
    { provide: IMAGEVIEWER_CONFIG, useValue: MY_IMAGEVIEWER_CONFIG }
  ]
})
```

The default configuration available is:

```typescript
export const IMAGEVIEWER_CONFIG_DEFAULT: ImageViewerConfig = {
  width: 800, // component default width
  height: 600, // component default height
  bgStyle: '#ECEFF1', // component background style
  scaleStep: 0.1, // zoom scale step (using the zoom in/out buttons)
  rotateStepper: false, // touch rotate should rotate only 90 to 90 degrees
  loadingMessage: 'Loading...',
  buttonStyle: {
    iconFontFamily: 'Material Icons', // font used to render the button icons
    alpha: 0.5, // buttons' transparence value
    hoverAlpha: 0.7, // buttons' transparence value when mouse is over
    bgStyle: '#000000', //  buttons' background style
    iconStyle: '#ffffff', // buttons' icon colors
    borderStyle: '#000000', // buttons' border style
    borderWidth: 0 // buttons' border width (0 == disabled)
  },
  tooltips: {
    enabled: true, // enable or disable tooltips for buttons
    bgStyle: '#000000', // tooltip background style
    bgAlpha: 0.5, // tooltip background transparence
    textStyle: '#ffffff', // tooltip's text style
    textAlpha: 0.9, // tooltip's text transparence
    padding: 15, // tooltip padding
    radius: 20 // tooltip border radius
  },
  zoomOutButton: { // zoomOut button config
    icon: 'zoom_out', // icon text
    tooltip: 'Zoom out', // button tooltip
    sortId: 0, // number used to determine the order of the buttons
    show: true // used to show/hide the button
  },

  // short button configuration
  nextPageButton: createButtonConfig('navigate_next', 'Next page', 0),
  beforePageButton: createButtonConfig('navigate_before', 'Previous page', 1),
  zoomInButton: new ButtonConfig('zoom_in', 'Zoom in', 1),
  rotateLeftButton: new ButtonConfig('rotate_left', 'Rotate left', 2),
  rotateRightButton: new ButtonConfig('rotate_right', 'Rotate right', 3),
  resetButton: new ButtonConfig('autorenew', 'Reset', 4)
};
```

## License

Copyright (c) 2018 Hallyson Almeida. Licensed under the MIT License (MIT)
