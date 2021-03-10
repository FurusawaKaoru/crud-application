import { createStore } from 'vuex'

export default createStore({
  state: {
    events: []
  },
  mutations: {
    setEvents(state, events) {
      state.events = events
    },
    updateEvent(state, payload) {
      let targetIndex = 0
      state.events.forEach((item, index) => {
        if (item.id == payload.id) {
          targetIndex = index
        }
      })

      state.events[targetIndex] = { ...payload }
    }
  },
  actions: {
    setEvents({ commit }, events) {
      commit('setEvents', events)
    }
  },
  modules: {
  },
  getters: {
    getEvents(state) {
      return state.events
    },
    getEventById: (state) => (id) => {
      return state.events.find(event => event.id == id)
    }
  }
})
