import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export const store = createStore({
  state: {
    todos: JSON.parse(localStorage.getItem("vuex")) || [],
  },
  plugins: [createPersistedState()],
  mutations: {
    addTodo(state, todo) {
      state.todos.unshift(todo);
    },

    deleteTodo(state, id) {
      const index = state.todos.findIndex((item) => item.id === id);
      state.todos.splice(index, 1);
    },
    updateTodo(state, todo) {
      const index = state.todos.findIndex((item) => item.id == todo.id);
      state.todos.splice(index, 1, todo);
    },
  },

  getters: {
    validTodos(state) {
      return state.todos.filter((p) => {
        return p.title;
      });
    },
    allTodos(state) {
      return state.todos;
    },

    filterTodo(state) {
      return state.todos.filter((item) => item.completed);
    },
  },
});
