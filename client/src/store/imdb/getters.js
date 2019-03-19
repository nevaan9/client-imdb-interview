export const getUser = (state) => {
  // Pass in the filter criteria you want to filter the saved views by
  return (id) => {
    return state.users.list.find(user => user.id === id)
  }
}

export const getMovie = (state) => {
  // Pass in the filter criteria you want to filter the saved views by
  return (id) => {
    return state.movies.list.find(movie => movie.id === id)
  }
}
