import { createStore } from 'vuex'

export default createStore({
  state: {
    events: [
      { id: 1, title: 'test1', description: 'test description' },
      { id: 2, title: 'test2', description: 'test description' },
      { id: 3, title: 'test3', description: 'test description' },
      { id: 4, title: 'test4', description: 'test description' },
    ]
  },
  mutations: {
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
