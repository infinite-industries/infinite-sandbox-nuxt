<template>
  <v-app dark>
    <div>
      <!-- Toolbar and Nav -->
      <ii-toolbar />

      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>
      <!-- iPhone-specific save button to desktop -->
      <!-- <ii-iphone-save-button /> -->
    </div>
  </v-app>
</template>

<script>
import Toolbar from '../components/Toolbar.vue'

// import Notifications from '../components/ii-notifications.vue'
// import Subscribe from '../components/ii-subscribe.vue'

export default {
  components: {
    'ii-toolbar': Toolbar
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  }
}
</script>
