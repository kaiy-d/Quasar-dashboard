export function setorders (state, data) {
  if (data) {
    state.orders = {
      pending: data.pending,
      achive: data.achive,
      filled: data.filled,
      suspect: data.suspect
    }
  }
}
