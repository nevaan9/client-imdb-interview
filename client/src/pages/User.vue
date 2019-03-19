<template>
  <q-page>
    <div>
      <h2>Ratings for user {{ user.id }}</h2>
      <div>
        <h5>Gender: {{ user.gender | gender }}</h5>
        <h5>Occupation: {{ user.occupation | occupation }}</h5>
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
  filters: {
    occupation: function (value) {
      switch (value) {
        case '0': return 'other'
        case '1': return 'academic/educator'
        case '2': return 'artist'
        case '3': return 'clerical/admin'
        case '4': return 'college/grad student'
        case '5': return 'customer service'
        case '6': return 'doctor/health care'
        case '7': return 'executive/managerial'
        case '8': return 'farmer'
        case '9': return 'homemaker'
        case '10': return 'K-12 Student'
        case '11': return 'lawyer'
        case '12': return 'programmer'
        case '13': return 'retired'
        case '14': return 'sales/marketing'
        case '15': return 'scientist'
        case '16': return 'self-employed'
        case '17': return 'technician/engineer'
        case '18': return 'tradesman/craftsman'
        case '19': return 'unemployed'
        case '20': return 'writer'
        default: return 'not specified'
      }
    },
    gender: function (value) {
      switch (value) {
        case 'M': return 'Male'
        case 'F': return 'Female'
        default: return 'not specified'
      }
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
