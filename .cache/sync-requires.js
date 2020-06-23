// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-template-js": preferDefault(require("C:\\development\\react-blog\\src\\templates\\blog-template.js")),
  "component---src-pages-404-js": preferDefault(require("C:\\development\\react-blog\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\development\\react-blog\\src\\pages\\index.js")),
  "component---src-pages-page-2-js": preferDefault(require("C:\\development\\react-blog\\src\\pages\\page-2.js"))
}

exports.json = {
  "layout-index.json": require("C:\\development\\react-blog\\.cache\\json\\layout-index.json"),
  "another-one.json": require("C:\\development\\react-blog\\.cache\\json\\another-one.json"),
  "layout-index.json": require("C:\\development\\react-blog\\.cache\\json\\layout-index.json"),
  "hello-world.json": require("C:\\development\\react-blog\\.cache\\json\\hello-world.json"),
  "layout-index.json": require("C:\\development\\react-blog\\.cache\\json\\layout-index.json"),
  "404.json": require("C:\\development\\react-blog\\.cache\\json\\404.json"),
  "layout-index.json": require("C:\\development\\react-blog\\.cache\\json\\layout-index.json"),
  "index.json": require("C:\\development\\react-blog\\.cache\\json\\index.json"),
  "layout-index.json": require("C:\\development\\react-blog\\.cache\\json\\layout-index.json"),
  "404-html.json": require("C:\\development\\react-blog\\.cache\\json\\404-html.json"),
  "layout-index.json": require("C:\\development\\react-blog\\.cache\\json\\layout-index.json"),
  "page-2.json": require("C:\\development\\react-blog\\.cache\\json\\page-2.json")
}

exports.layouts = {
  "layout---index": preferDefault(require("C:/development/react-blog/.cache/layouts/index.js"))
}