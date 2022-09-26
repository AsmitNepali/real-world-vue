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
    ]
  },
  getters: {
    cartLength: state => {
      return state.categories.length
    },
    doneTodos: state=> {
      return state.todos.filter(todos=> todos.done)
    },
    activeTodosCount:(state, getters)=>{
      return state.todos.length - getters.doneTodos.length
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
