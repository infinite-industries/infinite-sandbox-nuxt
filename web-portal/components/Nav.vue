<template>
  <div class="sidebar">
    <ul id="nav-list">
      <li v-for="item in visibleNavItems" :key="item.title">
        <router-link :to="item.route">
          {{ item.title }}
        </router-link>
      </li>
      <li v-if="!$auth.loggedIn">
        <router-link to="/login">
          Login
        </router-link>
      </li>
      <li v-else>
        <a href="/logout" @click="onLogout">Log out</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { TweenMax, Power4 } from 'gsap'

export default {
  computed: {
    open() {
      return this.$store.getters['ui/sidebarOpen']
    },
    visibleNavItems() {
      const items = [
        { title: 'Home', route: '/' },
        { title: 'About', route: '/about' },
        { title: 'Legal', route: '/legal' }
      ]
      // TODO: can we write a plugin that sets `this.$auth.admin` based on this?
      if (this.$auth.loggedIn && this.$auth.user['https://infinite.industries.com/isInfiniteAdmin']) {
        items.push({ title: 'Admin', route: '/admin' })
      }
      return items
    }
  },
  watch: {
    open: function (open) {
      const dX = open ? 0 : this.$el.offsetWidth
      TweenMax.to(this.$el, 0.6, {
        x: dX,
        ease: Power4.easeOut
      })
    }
  },
  mounted() {
    TweenMax.set(this.$el, {
      x: this.$el.offsetWidth,
      zIndex: 20
    })
  },
  methods: {
    onLogout (e) {
      e.preventDefault()
      this.$auth.logout()
    }
  }
}
</script>

<style scoped>
  .sidebar{
    position: fixed;
    right: 0;
    top: 0;
    z-index: 20;
    width: 300px;
    height: 100vh;
    max-width: 90vw;
    background-color: rgba(10,10,10,0.95);
    /* opacity: 0.95; */
    color: white;
  }

  #nav-list {
    margin-top: 150px;
    padding-left: 24px;
  }

  #nav-list li {
    list-style: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2em;
    line-height: normal;
    padding: 10px;

  }

@media only screen and (max-width: 480px) {
    #nav-list li {
      font-size: 1.4em;
    }

    #nav-list {
      margin-top: 105px;
    }
  }

  #nav-list a {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }

  #nav-list a:hover {
    text-decoration: underline;
  }
</style>
