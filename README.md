# mui-primary-color-picker

> Primary/secondary color picker for Material-UI.

[![NPM](https://img.shields.io/npm/v/mui-primary-color-picker.svg)](https://www.npmjs.com/package/mui-primary-color-picker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Color picker for [`Material-UI`](https://material-ui.com/) that emits valid [`color`](https://material-ui.com/customization/color/) values from Material-UI's [`palette`](https://material-ui.com/customization/palette/) for setting primary or secondary interface colors.

![`<PrimaryColorPicker>` in action](https://github.com/epfromer/mui-primary-color-picker/raw/master/doc/screenrec.gif)

## Demo

https://epfromer.github.io/mui-primary-color-picker/

## Install

```bash
npm install --save mui-primary-color-picker
```

```bash
yarn add mui-primary-color-picker
```

## Usage

```jsx
import React from 'react'
import PrimaryColorPicker from 'mui-primary-color-picker'

<PrimaryColorPicker
  defaultColor="#2196f3"
  onChange={(color) => console.log(color)}
/>
```

Feel free to make suggestions for improvements.

## License

MIT © [epfromer](https://github.com/epfromer)
