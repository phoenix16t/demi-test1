// config.merge({
//   externals: ['vue', 'vue-demi', '@vue/composition-api'],
// });
module.exports = {
  chainWebpack: (config) => {
    config.externals({
      ...config.get('externals'),
      '@vue/composition-api': '@vue/composition-api',
      vue: 'vue',
    });

    config.merge({
      externals: ['vue', 'vue-demi', '@vue/composition-api'],
    });
  },
};