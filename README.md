# Angular4 - Canvas Image Viewer

This project generate a image viewer using canvas. 

This project used [@pfirpfel/image-viewer](https://github.com/pfirpfel/image-viewer) as reference.

## Features

* Configurable
* Resizeble component
* Avaliable actions:
  * **Rotate**
  * **Zoom**
  * Reset to maximize size
  * Free moveble

## Install

To use ngx-imageviewer in your project, install it via _npm_:

```bash
npm i @hallysonh/ngx-imageviewer --save
```

or via _yarn_:

```bash
yarn add @hallysonh/ngx-imageviewer
```

## Simplest use

After import the module `ImageViewerModule`, use the follow code on your html:

```html
<ngx-imageviewer [src]="imageSrc"></ngx-imageviewer>
```

Optionaly, you can provide the fields `width` and `height`. If you omit those values, the width and height in the config object will be used.

## Custom Configuration

Optionaly, you can provide a custom configuration like above:

```typescript
import { IMAGEVIEWER_CONFIG, ImageViewerConfig } from '@hallysonh/ngx-imageviewer';

// ...

const MY_IMAGEVIEWER_CONFIG: ImageViewerConfig = {
  buttonStyle: {
    bgStyle: '#B71C1C' // custom container's background style
  }
};

// ...

@Component({
  // ...
  providers: [
    {
      provide: IMAGEVIEWER_CONFIG,
      useValue: MY_IMAGEVIEWER_CONFIG
    }
  ]
  // ...
})
// ...
```

The default configuration available is:

```typescript
export const IMAGEVIEWER_CONFIG_DEFAULT: ImageViewerConfig = {
  width: 800, // component default width
  height: 600, // component default height
  bgStyle: '#ECEFF1', // component background style
  scaleStep: 0.1, // zoom scale step (using the zoom in/out buttons)
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
  zoomInButton: new ButtonConfig('zoom_in', 'Zoom in', 1), // short button configuration
  rotateLeftButton: new ButtonConfig('rotate_left', 'Rotate left', 2),
  rotateRightButton: new ButtonConfig('rotate_right', 'Rotate right', 3),
  resetButton: new ButtonConfig('autorenew', 'Reset', 4)
};
```

## Testing the component

To see a demo of the component. Just download it and execute: `yarn && yarn start`