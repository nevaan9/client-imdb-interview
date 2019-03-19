<template>
  <q-page>
    <q-list separator>
      <q-item-label header>Movies</q-item-label>
      <q-item
        v-for='movie in movies'
        :key='movie.id'
        :to='`/movie/${movie.id}`'
        exact
        clickable
        v-ripple>
        <q-item-section side top>{{movie.id}}</q-item-section>
        <q-item-section>
          <q-item-label><strong></strong>{{ movie.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-inner-loading :showing='loading' color='primary'/>
  </q-page>
</template>

<style>
</style>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MoviesPage',
  created () {
    if (!this.movies.length) {
      this.$store.dispatch('imdb/FIND_MOVIES', {
        limit: 50
      })
    }
  },
  computed: {
    ...mapState('imdb', {
      movies: state => state.movies.list,
      loading: state => state.movies.loading
    })
  }
}
</script>
