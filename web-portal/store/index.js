import axios from 'axios'

export const state = () => ({
  events: [],
  event: {},
  utils: {
    isLoading: true
  }
})

export const getters = {
  events: state => state.events,
  event: state => state.event,
  GetLoadingStatus: state => state.utils.isLoading
}

export const mutations = {
  setEvents(state, events) {
    state.events = events
  },
  setEvent(state, event) {
    state.event = event
  },
  startLoading(state) {
    state.utils.isLoading = true
  },
  stopLoading(state) {
    state.utils.isLoading = false
  }
}

export const actions = {
  loadEvents({ commit }) {
    commit('startLoading')
    axios.get('http://localhost:3003/events').then(({ data }) => {
      commit('setEvents', data.events)
    }).catch((error) => {
      window.console.error(error)
      // TODO: notification?
    }).finally(() => commit('stopLoading'))
  },
  loadEvent ({ commit }, eventId) {
    commit('startLoading')
    axios.get('/events.json').then(({ data }) => {
      const event = data.find((e) => e.id === eventId)
      if (event) commit('setEvent', event)
      else throw new Error('Event not found')
    }).catch((error) => {
      window.console.error(error)
      // TODO: notification?
    }).finally(() => commit('stopLoading'))
  }
}
