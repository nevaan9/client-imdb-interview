<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Veoci Whiteboard Interview
        </q-toolbar-title>
        <q-tabs v-model="tabs">
          <q-tab
            name="users-tab"
          >
            Users
          </q-tab>
          <q-tab
            name="movies-tab"
          >
            Movies
          </q-tab>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'WhiteboardLayout',
  created () {
    if (this.$route.name === 'users') {
      this.tabs = 'users-tab'
    } else if (this.$route.name === 'movies') {
      this.tabs = 'movies-tab'
    }
  },
  data () {
    return {
      tabs: null
    }
  },
  watch: {
    tabs (val) {
      switch (val) {
        case 'users-tab':
          this.$router.push({
            name: 'users'
          })
          break
        case 'movies-tab':
          this.$router.push({
            name: 'movies'
          })
          break
      }
    }
  }
}
</script>

<style>
</style>
