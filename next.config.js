/* eslint-disable */
const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");
const webpack = require("webpack");
let glob = require("glob-all");
const path = require("path");

// for environment variables
require("dotenv").config({
  path: process.env.NODE_ENV === "production" ? ".env.production" : ".env"
});

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

// with help from https://github.com/lucleray/next-purgecss
// and purgecss webpack example from https://gist.github.com/andrewdelprete/d2f44d0c7f120aae1b8bd87cbf0e3bc8
module.exports = withCss(
  withPurgeCss({
    purgeCss: {
      // Specify the locations of any files you want to scan for class names.
      paths: glob.sync([
        path.join(__dirname, "pages/**/*.jsx"),
        path.join(__dirname, "components/**/*.jsx"),
        path.join(__dirname, "components/**/*.js")
      ]),
      extractors: [
        {
          extractor: TailwindExtractor,

          // Specify the file extensions to include when scanning for
          // class names.
          extensions: ["jsx", "js"]
        }
      ],
      whitelist: () => ["body", "html"]
    },
    // needed for .env stuff
    webpack: config => {
      const env = Object.keys(process.env).reduce((acc, curr) => {
        acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
        return acc;
      }, {});

      config.plugins.push(new webpack.DefinePlugin(env));

      return config;
    }
  })
);
