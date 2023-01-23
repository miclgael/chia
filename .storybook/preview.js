/**
 * Storybook app global setup file
 * @link https://storybook.js.org/docs/configurations/options-parameter/
 * @link https://github.com/storybookjs/storybook/blob/master/app/vue3/README.md#extending-the-vue-application
 */

// globally import stylesheet
import '@picocss/pico';

// Handle nuxt global components
import { app } from '@storybook/vue3';
import { NuxtLink } from './mock-components/NuxtLink'
app.component('NuxtLink', NuxtLink)

// Fix for storybook using slots in components
export const argTypes = {
  default: {
    description: 'The default Vue slot',
    control: 'text'
  }
}

// Show all args documentation by default
export const parameters = {
  controls: { expanded: true },
}
