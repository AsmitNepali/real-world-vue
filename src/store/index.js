import EventService from '@/services/EventService'
import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{id:'abc123', name:'Asmit Nepali'},
    categories:[
      'sustanability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: []
  },
  getters: {
    getEventById: state => id => {
      return state.events.filter(event=>event.id === id)
    },
    
  },
  mutations: {
    ADD_EVENT (state,event){
      state.events.push(event)
    }
  },
  actions: {
    createEvent({commit}, event) {
      return EventService.postEvent(event).then(()=>{
      commit('ADD_EVENT', event)
      })
    }
  },
  modules: {
  }
})
