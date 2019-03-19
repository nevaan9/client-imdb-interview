<template>
  <q-page>
    <div>
      <h2>Ratings for user {{ user.id }}</h2>
      <div>
        <h5>Gender: {{ user.gender }}</h5>
        <h5>Occupation: {{ user.occupation }}</h5>
      </div>
      <q-btn
        color="secondary"
        style="width:200px;"
        @click="$router.push({
          name: 'users'
        })"
      >Go back</q-btn>
    </div>
    <q-list separator>
      <q-item-label header>Rating</q-item-label>
      <q-item
        v-for='rating in user.ratings'
        :key='rating.id'
        exact
        v-ripple>
        <q-item-section>
          <q-item-label><strong>Movie: </strong>{{rating.movie}}</q-item-label>
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
  name: 'UserPage',
  data () {
    return {
      user: null
    }
  },
  created () {
    if (!this.users.length) {
      this.$store.dispatch('imdb/FIND_USERS', {
        limit: 50
      }).then(() => {
        this.user = this.getUser(parseInt(this.$route.params.id))
      })
    } else {
      this.user = this.getUser(parseInt(this.$route.params.id))
    }
  },
  computed: {
    ...mapGetters('imdb', ['getUser']),
    ...mapState('imdb', {
      users: state => state.users.list,
      loading: state => state.users.loading
    })
  }
}
</script>
