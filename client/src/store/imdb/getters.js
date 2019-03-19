export const getUser = (state) => {
  // Pass in the filter criteria you want to filter the saved views by
  return (id) => {
    return state.users.list.find(user => user.id === id)
  }
}
