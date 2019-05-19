<template>
<div></div>
</template>
<script>

  function getParamByName (name) {
    let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash)
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
  }

  export default {
    mounted () {
      this.$nextTick(() => {
        let accessToken = getParamByName('access_token')
        let idToken = getParamByName('id_token')
        this.$auth.$storage.setUniversal('access_token', accessToken, true)
        this.$auth.$storage.setUniversal('id_token', idToken, true)
        this.$router.replace('/')
      })
    }
  }
</script>
