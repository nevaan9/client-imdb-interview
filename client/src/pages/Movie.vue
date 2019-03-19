<template>
  <q-page>
    <div>
      <h2>Ratings for {{ movie.title || `Not specified` }}</h2>
      <div>
        <h5
          style="margin: 0"
        >Genres: </h5>
        <h6
          style="margin: 0; margin-left: 20px"
          v-for="genre in movie.genres"
          :key="genre.id"
        >{{ genre.name }}</h6>
      </div>
      <q-btn
        color="secondary"
        style="width:200px; margin-top: 10px;"
        @click="$router.push({
          name: 'movies'
        })"
      >Go back</q-btn>
    </div>
    <q-list separator>
      <q-item-label header>Ratings</q-item-label>
      <q-item
        v-for='rating in movie.ratings'
        :key='rating.id'
        exact
        v-ripple>
        <q-item-section>
          <q-item-label><strong>User: </strong>{{rating.user}}</q-item-label>
          <q-item-label><strong>Rating: </strong>{{rating.rating}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-inner-loading :showing='loading' color='primary'/>
  </q-page>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'MoviePage',
  data () {
    return {
      movie: null
    }
  },
  created () {
    if (!this.movies.length) {
      this.$store.dispatch('imdb/FIND_MOVIES', {
        limit: 50
      }).then(() => {
        this.movie = this.getMovie(parseInt(this.$route.params.id))
      })
    } else {
      this.movie = this.getMovie(parseInt(this.$route.params.id))
    }
  },
  computed: {
    ...mapGetters('imdb', ['getMovie']),
    ...mapState('imdb', {
      movies: state => state.movies.list,
      loading: state => state.movies.loading
    })
  }
}
</script>
