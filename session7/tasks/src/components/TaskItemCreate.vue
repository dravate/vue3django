<template>
  <div class="input-group p-0 m-0">
    <input
      type="text"
      class="form-control"
      placeholder="Write your new task here..."
      v-model="taskText"
      @keyup.enter="localAddTask"
    />

    <button
      class="btn btn-success"
      type="button"
      :disabled="taskText.length === 0"
      @click="localAddTask"
    >
<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 15V18M17 21V18M17 18H14M17 18H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      &nbsp; Add Task

    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      taskText: "",
    };
  },

  methods: {
    ...mapActions(["addTask"]),

    localAddTask() {
      if (this.taskText.length !== 0) {
        const newTask = {
          completed: false,
          id: Math.floor(Math.random() * 100000),
          title: this.taskText,
          userId: 1,
        };

        this.addTask(newTask);
        this.taskText = "";
      }
    },
  },
};
</script>

<style></style>

