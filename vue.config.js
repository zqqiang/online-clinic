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
  }
};
