const withLess = require('@zeit/next-less')
const { parsed: localEnv } = require("dotenv").config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
});
const webpack = require("webpack");

module.exports = withLess({
  webpack: function(config) {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  }
})