<template>
  <button @click.prevent="deletedTodoItem(id)">Delete</button>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["id"],

  methods: {
    ...mapMutations(["deleteTodo"]),
    deletedTodoItem(index) {
      this.deleteTodo(index);
    },
  },
};
</script>

<style></style>
