// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("C:\\Projects\\ProteinShop\\ProteinShop\\src\\templates\\blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("C:\\Projects\\ProteinShop\\ProteinShop\\.cache\\dev-404-page.js")),
  "component---src-pages-basket-js": preferDefault(require("C:\\Projects\\ProteinShop\\ProteinShop\\src\\pages\\basket.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Projects\\ProteinShop\\ProteinShop\\src\\pages\\index.js")),
  "component---src-pages-news-js": preferDefault(require("C:\\Projects\\ProteinShop\\ProteinShop\\src\\pages\\news.js")),
  "component---src-pages-products-js": preferDefault(require("C:\\Projects\\ProteinShop\\ProteinShop\\src\\pages\\products.js")),
  "component---src-pages-sale-js": preferDefault(require("C:\\Projects\\ProteinShop\\ProteinShop\\src\\pages\\sale.js"))
}

