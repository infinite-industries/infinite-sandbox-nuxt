<template>
  <div>
  <ii-list-viewer :events="events" />
  </div>
</template>

<script>
// @ is an alias to /src
import ListViewer from '@/components/ii-list-viewer.vue'

export default {
  name: 'Home',

  metaInfo: {
    title: 'Infinite Sandbox',
    titleTemplate: null,
    meta: [
      { 'og:title': 'Infinite Sandbox' },
      { 'og:description': 'This is the home page' }
    ]
  },
  components: {
    'ii-list-viewer': ListViewer
  },

  computed: {
    events: function() {
      return this.$store.getters.events || []
    }
  },
  created() {
    this.$store.dispatch('loadEvents')
  }
}
</script>
