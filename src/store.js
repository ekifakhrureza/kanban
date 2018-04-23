import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backlog: '',
    todo: '',
    doing: '',
    done: ''
  },
  getters: {
    getBacklog: state => {
      return state.backlog
    },
    getTodo: state => {
      return state.todo
    },
    getDoing: state => {
      return state.doing
    },
    getDone: state => {
      return state.done
    }
  },
  mutations: {
    setBacklog (state, payload) {
      state.backlog = payload
    },
    setTodo (state, payload) {
      state.todo = payload
    },
    setDoing (state, payload) {
      state.doing = payload
    },
    setDone (state, payload) {
      state.done = payload
    }
  },
  actions: {
    addTask ({ commit }, payload) {
      db.ref(`${payload.status}`)
        .push(
          {
            task: payload.task,
            description: payload.description,
            point: payload.point,
            assign: payload.assign
          }
        )
    },
    getAllTask ({ commit }) {
      db.ref().on('value', (snapshot) => {
        commit('setBacklog', snapshot.val().backlog)
        commit('setTodo', snapshot.val().todo)
        commit('setDoing', snapshot.val().doing)
        commit('setDone', snapshot.val().done)
      })
    },
    removeTask ({ commit }, payload) {
      db.ref(`${payload.status}`).child(`${payload.key}`).remove()
    },
    moveTask ({ commit }, payload) {
      const copy = { ...payload }
      delete copy['key']
      db.ref(`${payload.status}`).child(`${payload.key}`).set(copy)
    }
  }
})
