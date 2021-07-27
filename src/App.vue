<template>
  <div class="to-do">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
export default {
  components: {
    TodoList,
  },
  name: "App",
};
</script>

<style>
body {
  background-color: #fcd3af;
  font-family: "Poppins", sans-serif;
}
.to-do {
  width: 350px;
  background: #fff;
  margin: 50px auto;
  padding: 15px;
  border-radius: 8px;
}
</style>
