<template>
  <div class="input">
    <input type="text" v-model="title" />
    <input type="checkbox" @click="completed = !completed" />

    <button @click.prevent="addData">Send</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      title: "",
      completed: false,
    };
  },
  methods: {
    ...mapMutations(["addTodo"]),
    addData() {
      this.addTodo({
        title: this.title,
        id: Date.now(),
        userId: Date.now(),
        completed: this.completed,
      });
    },
  },
};
</script>
<style>
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
