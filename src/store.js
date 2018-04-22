import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backlog: '',
  },
  getters: {
    getBacklog: state => {
      return state.backlog
    }
  },
  mutations: {
    setBacklog(state, payload) {
      state.backlog = payload
    }
  },
  actions: {
    addTask({ commit }, payload) {
      db.ref('backlog')
        .push(
          {
            task: payload.task,
            description: payload.description,
            point: payload.point,
            assign: payload.assign
          }
        )
    },
    getAllTask({ commit }) {
      db.ref().on('value', (snapshot) => {
        commit('setBacklog', snapshot.val().backlog)
      })
    },
    removeTask (index) {
      console.log(index);
      
      db.ref('backlog').child(index)
        .remove()
    }
  }
})
