# ngx-imageviewer - Angular 5 Image viewer using canvas to render images and pdfs

[![npm version](https://badge.fury.io/js/ngx-imageviewer.svg)](https://badge.fury.io/js/ngx-imageviewer),
[![Build Status](https://travis-ci.org/hallysonh/ngx-imageviewer.svg?branch=master)](https://travis-ci.org/hallysonh/ngx-imageviewer)
[![Coverage Status](https://coveralls.io/repos/github/hallysonh/ngx-imageviewer/badge.svg?branch=master)](https://coveralls.io/github/hallysonh/ngx-imageviewer?branch=master)
[![dependency Status](https://david-dm.org/hallysonh/ngx-imageviewer/status.svg)](https://david-dm.org/hallysonh/ngx-imageviewer)
[![devDependency Status](https://david-dm.org/hallysonh/ngx-imageviewer/dev-status.svg?branch=master)](https://david-dm.org/hallysonh/ngx-imageviewer#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/hallysonh/ngx-imageviewer.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at [https://hallysonh.github.io/ngx-imageviewer](https://hallysonh.github.io/ngx-imageviewer)

## Dependencies

* [Angular](https://angular.io) (*requires* Angular 5 or higher, tested with 5.0.0)

## Installation

Install above dependencies via *npm*.

Now install `ngx-imageviewer` via:

```shell
npm install --save ngx-imageviewer
```

---

### SystemJS

>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-imageviewer`:

```js
map: {
  'ngx-imageviewer': 'node_modules/ngx-imageviewer/bundles/ngx-imageviewer.umd.js',
}
```

---

Once installed you need to import the main module:

```js
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
```

The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice `LibModule .forRoot()`):

```js
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [ImageViewerModule.forRoot(), ...],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import `LibModule`:

```js
import { LibModule } from '@hallysonh/ngx-imageviewer';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...],
})
export class OtherModule {
}
```

## Usage

## License

Copyright (c) 2018 Hallyson Almeida. Licensed under the MIT License (MIT)
