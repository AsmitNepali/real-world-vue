import EventService from "@/services/EventService"

export const namespaced = true

  export const state= {
    events: [],
    eventsTotal:0,
    event:{},
    perPage: 3
  }

  export const getters= {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    },
    
  }

  export const mutations= {
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
  }

  export const actions= {
    createEvent({commit, dispatch}, event) {
      return EventService.postEvent(event).then(()=>{
      commit('ADD_EVENT', event)
      const notification  = {
        type: 'success',
        message: 'Your event has been created'
    }
    dispatch('notification/add', notification, {root:true})
      }).catch(error => {
        const notification  = {
            type: 'error',
            message: 'There was a problem creating your event:' + error.message
        }
        dispatch('notification/add', notification, {root:true})
        throw error
      })
    }, 

    fetchEvents({commit, dispatch, state} ,{page}) {
      return EventService.getEvents(state.perPage, page)
      .then(response => {
        commit('SET_TOTAL_EVENTS', parseInt(response.headers['x-total-count']))
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        const notification  = {
            type: 'error',
            message: 'There was a problem fetching events:' + error.message
        }
        dispatch('notification/add', notification, {root:true})
      })
    },

    fetchEvent({commit, getters}, id) {
      var event = getters.getEventById(id)
      if(event) {
        commit('SET_EVENT', event)
        return event
      }
      else {
      return EventService.getEvent(id)
      .then(response => {
        commit('SET_EVENT', response.data)
        return response.data
      })
    }
    }
  }
