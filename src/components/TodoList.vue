<template>
  <div class="input-searchFilter">
    <input type="text" v-model="searchFilterData" /> Search
    <div v-if="filter && filterTodo.length">
      <todo-item v-for="todo in filterTodo" :key="todo.id" :todo="todo" />
    </div>
    <div v-else-if="searchFilterData !== ''">
      <todo-item v-for="todo in searchFilter" :key="todo.id" :todo="todo" />
    </div>
    <div v-else>
      <todo-item v-for="todo in validTodos" :key="todo.id" :todo="todo" />
    </div>

    <div class="h3">
      <h3>Add Todo</h3>
      <todo-add />
    </div>
    <select class="select" @change="filterArray($event)">
      <option value="All">All</option>
      <option value="Active">Active</option>
    </select>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "./TodoItem.vue";
import TodoAdd from "./TodoAdd.vue";
export default {
  components: {
    TodoItem,
    TodoAdd,
  },
  data() {
    return {
      searchFilterData: "",
      filter: false,
    };
  },
  methods: {
    filterArray(event) {
      if (event.target.value === "Active") {
        this.filter = !this.filter;
      } else {
        this.filter = false;
      }
    },
  },

  computed: {
    ...mapGetters(["validTodos", "filterTodo"]),
    searchFilter() {
      return this.$store.state.todos.filter((item) => {
        return item.title.startsWith(this.searchFilterData);
      });
    },
  },
};
</script>

<style scoped>
.h3 h3 {
  margin-left: 6px;
}
.select {
  width: 100px;
  margin-left: 6px;
}
.input button {
  padding: 8px 12px;
  border: 1px solid #494038;
  background-color: #fff;
  color: #ac7340;
  font-weight: 600;
  cursor: pointer;
}

.input-searchFilter input {
  padding: 8px 5px;
  margin-left: 6px;
  margin-right: 14px;
  width: 65%;
  border: 1px solid #eee;
}
</style>
