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
    events: [],
    eventsTotal:0,
    event:{}
  },

  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    },
    
  },

  mutations: {
    ADD_EVENT (state,event){
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events  = events
    },
    SET_EVENT(state,event){
      state.event = event
    },
    SET_TOTAL_EVENTS(state,eventsTotal) {
      state.eventsTotal = eventsTotal
    }
  },

  actions: {
    createEvent({commit}, event) {
      return EventService.postEvent(event).then(()=>{
      commit('ADD_EVENT', event)
      })
    }, 

    fetchEvents({commit} ,{perPage, page}) {
      EventService.getEvents(perPage, page)
      .then(response => {
        commit('SET_TOTAL_EVENTS', parseInt(response.headers['x-total-count']))
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        console.log(error);
      })
    },

    fetchEvent({commit, getters}, id) {
      var event = getters.getEventById(id)
      console.log(event)
      if(event) {
        commit('SET_EVENT', event)
      }
      else {
      EventService.getEvent(id)
      .then(response => {
        commit('SET_EVENT', response.data)
      })
      .catch(error => {
        console.log('There was an error.', error.response);
      })
    }
    }
  }, 
  modules: {
  }
})
