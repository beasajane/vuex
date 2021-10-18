import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var shoppingCartStore = {
  namespaced: true,
  state: {
    totalPrice: 111,
  },
  mutations: {
    add(state) {
      state.totalPrice++
    }
  }
}

var yuangongStore = {
  namespaced: true,
  state: {
    count: 222,
  },
  mutations: {
    add(state) {
      state.count++
    }
  }
}

export default new Vuex.Store({
  strict: true,
  state: { // 存储 应用的状态/信息
    editingIdx: -1,
    show: 'all',
    // lastId: 2, Duplicate keys detected: '2'. This may cause an update error.
    lastId: 3,
    todos: [
      {
        text: 'eat',
        done: true,
        id: 1,
      },{
        text: 'drink',
        done: true,
        id: 2,
      }
    ]
  },
  getters: { // 类似于组件中computed，计算属性, 用来得到用现有的数据推导出来的数据
    leftCount(state) {
      return state.todos.filter(it => !it.done).length
    },
    isAllChecked(state) {
      return state.todos.every(it => it.done)
    },
    hasCompleted(state) {
      return state.todos.some(it => it.done) 
    },
    visibleTodos(state) {
      switch(state.show) {
        case 'active':
          return state.todos.filter(it => !it.done)
        case 'completed':
          return state.todos.filter(it => it.done)
        default:
          return state.todos
      }
    },
  },
  mutations: { // 放 对数据的修改(即数据的变更方法集合)   // store.commit('addtodo', {text: 'daflkd', done: true})
    addTodo(state, text) { //todo => payload
      let todo = {
        text,
        done: false,
        id: state.lastId++
      }
      // todo.id = state.lastId++
      state.todos.push(todo)
    },
    deleteTodo(state, id,) {
      let idx = state.todos.findIndex(it => it.id === id)
      state.todos.splice(idx, 1)
    },
    changeTodoText(state, {id, text}) {
      let todo = state.todos.find(it => it.id == id)
      todo.text = text
    },
    toggleTodoStatus(state, id) { // 两种写法
      // let idx = state.todos.findIndex(it => it.id === id)
      // state.todos[idx].done = !state.todos[idx].done

      let todo = state.todos.find(it => it.id === id)
      todo.done = !todo.done 
    },
    toggleAllTodoStatus(state) {
      if(state.todos.every(it => it.done)) {
        state.todos.forEach(it => {
          it.done = false
        })
      } else {
        state.todos.forEach(it => {
          it.done = true
        })
      }
    },
    clearCompletedTodo(state) {
      state.todos = state.todos.filter(it => !it.done)
    },
    edit(state, idx) {
      state.editingIdx = idx
    },
    setVisible(state, type) { // All / active  / completed
      state.show = type
    }
  },
  actions: {
  },
  modules: {
    shopping: shoppingCartStore,
    yuangong: yuangongStore,
  }
})
