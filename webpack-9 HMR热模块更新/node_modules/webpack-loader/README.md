# webpack-loader

**In development**

## Why

Based https://github.com/webpack/webpack/issues/536

HTML is the entry point of web. Why not make it the entry point of our bundle? The key here is to instruct webpack to add JS entry point for all script tag with `src` attribute.

## Usage

```sh
npm i webpack webpack-loader html-loader
```

```js
// webpack.config.js
module.exports = {
  target: 'node',
  entry: {
    'index': './index.html',
  },
  output: {
    path: './build',
    filename: '[name].html.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html?attrs=script:src'
      },
      {
        test: /\.js$/,
        loader: 'webpack'
      }
    ]
  },

  // Config for webpack-loader, like a mini webpack.config.js without entry
  webpackLoader: {
    output: {
      path: './build/js',
      filename: 'bundle.js'
    }
  }
};
```

Run `webpack` will generate `index.html.js` and `js/bundle.js` in `build/` directory. You can run below to get the compiled HTML.

```
node -e "console.log(require('./build/index.js'))" > build/index.html
```

_(We can potentially wrap above step into a separate package.)_

## Thought?

Very simple, right? What do you think? Love to hear feedbacks as issue or PR.
