<template>
  <div class="input">
    <input type="text" :class="{ completed: completed }" v-model="title" />
    <button @click.prevent="update">Update</button>
    <input type="checkbox" v-model="completed" @change="checkbox" />

    <todo-deleted :id="id" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import TodoDeleted from "./TodoDeleted.vue";

export default {
  components: {
    TodoDeleted,
  },
  props: ["todo"],
  data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
      userId: this.todo.userId,
      completed: this.todo.completed,
    };
  },

  methods: {
    ...mapMutations(["updateTodo", "completedTodo"]),
    update() {
      this.updateTodo({
        id: this.id,
        title: this.title,
        userId: this.userId,
        completed: this.completed,
      });
    },

    checkbox() {
      this.updateTodo({
        id: this.id,
        title: this.title,
        userId: this.userId,
        completed: this.completed,
      });
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
.input {
  padding: 5px;
  display: flex;
  justify-content: space-between;
}
.input input {
  padding: 8px 5px;
  margin-right: 14px;
  width: 65%;
  border: 1px solid #eee;
}
.input button {
  padding: 8px 12px;
  border: 1px solid #ac7340;
  background-color: #fff;
  color: #ac7340;
  font-weight: 600;
  cursor: pointer;
}
.input button,
.input input {
  border-radius: 4px;
  font-family: "Poppins", sans-serif;
}
.input input[type="checkbox"] {
  width: 5%;

  margin: 5px;
}
</style>
