import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{id:'abc123', name:'Asmit Nepali'},
    categories:[
      'sustanability',
      'natre',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    todos:[
      {id:'1', text:'.....', done: true},
      {id:'1', text:'.....', done: true},
      {id:'1', text:'.....', done: false},
      {id:'1', text:'.....', done: false},
    ],
    events:[
      {id:1, title:'.....', organizer:'.....'},
      {id:2, title:'.....', organizer:'.....'},
      {id:3, title:'.....', organizer:'.....'},
      {id:4, title:'.....', organizer:'.....'},
    ]
  },
  getters: {
    getEventById: state => id => {
      return state.events.filter(event=>event.id === id)
    },
    cartLength: state => {
      return state.categories.length
    },
    doneTodos: state=> {
      return state.todos.filter(todos=> todos.done)
    },
    activeTodosCount:state=>{
      return state.todos.filter(todos=> !todos.done)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
