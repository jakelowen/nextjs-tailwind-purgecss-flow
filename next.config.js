const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

// with help from https://github.com/lucleray/next-purgecss
module.exports = withCss(withPurgeCss());
