const { mergeConfig } = require('vite')
const path = require('path')

module.exports = {
  // Preferred story format is to bundle with each component
  stories: [
    '../src/**/*.stories.@(js|mdx|ts|tsx)',
  ],

  // Addons used to extend Storybook's functionality
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
  ],

  // ⚡ Use vite builder instead of webpack
  core: {
    builder: "@storybook/builder-vite"
  },

  // Reference images, fonts, etc. from the root of the project
  staticDirs: ['../src/public'],

  // Vite builder config https://storybook.js.org/docs/vue/configure/vite
  async viteFinal (config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      resolve: {
        // Set-up path aliases
        alias: {
          '@': path.dirname(path.resolve(__dirname))
        }
      },
    });
  },
}
