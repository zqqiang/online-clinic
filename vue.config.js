const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  productionSourceMap: false,
  pluginOptions: {
    i18n: {
      enableInSFC: true
    }
  },
  devServer: {
    host: "172.16.95.48",
    hot: true,
    disableHostCheck: true
  },
  chainWebpack: config => {
    config.resolve.alias.set("theme", resolve("assets/scss/custom.scss"));
  }
};
