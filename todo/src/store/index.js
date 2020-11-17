import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    // 데이터가 들어감
    state: {
        todos: [
            { id: 1, text: 'buy a car', checked: false },
            { id: 2, text: 'play a game', checked: false }
          ]
    },
    // 실질적으로 데이터 변경은 mutations 안에서만 할 수 있음.
    mutations: {
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false
              });
              this.todoText=""
        },
        TOGGLE_TODO(state, {id, checked}) {
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
              });
              state.todos[index].checked = checked;
        },
        DELETE_TODO(state, id) {
            state.todos = state.todos.filter(todo => todo.id !== id);
        }
    },
    // 메소드가 들어감. 비동기적인 작업을 처리하고 mutations한테 데이터 변경요청.
    actions: {
        addTodo({commit}, value) {
            commit('ADD_TODO', value);
        },
        toggleTodo({commit}, {id, checked}) {
            commit('TOGGLE_TODO', {id, checked});
        },
        deleteTodo({commit}, id) {
            commit('DELETE_TODO', id);
        }
    },
    // computed와 비슷함. 
    getters: {

    }
})