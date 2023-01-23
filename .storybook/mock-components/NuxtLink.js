/**
 * Mock NuxtLink component for Storybook
 * @link https://nuxtjs.org/docs/features/nuxt-components/#the-nuxtlink-component
 */

import { action } from '@storybook/addon-actions'

export const NuxtLink = {
  props: {
    to: {
      type: [String, Object],
      required: true
    }
  },
  methods: {
    // Log the action in the actions panel
    log () {
      action('link target')(this.to)
    }
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>'
}
