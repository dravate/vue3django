<template>
  <div class="row my-2">
    <div class="input-group p-0 m-0">
      <div class="col-1 input-group-text">
        <input
          class="form-check"
          type="checkbox"
          :checked="task.completed"
          :disabled="task.isDisabled"
          @change="makeTaskCompleted(task)"
        />
      <div class="col-1" style="background: gray; margin-left:20px; padding:0px 20px 0px; background:Gray; color:white"> {{ task.id }}  </div> 
      </div>

      <label :class="[labelClass, checkedClass]">
        {{ task.title }}
        <spinner-small v-if="task.isDisabled"></spinner-small>
      </label>
      <label :class="[startClass]"> 
        <svg width="24px" height="24px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M597.678 480.76L390.797 333.998c-22.209-15.766-53-10.532-68.762 11.687l-2.04 2.871c-15.753 22.214-10.526 53 11.691 68.762l206.876 146.771c22.218 15.757 53 10.527 68.766-11.687l2.035-2.876c15.768-22.218 10.529-53.005-11.685-68.766z" fill="#F39A2B" /><path d="M585.066 423.392l-2.871-2.034c-22.218-15.763-53.004-10.527-68.766 11.687L279.007 763.472c-15.762 22.214-10.527 53.005 11.69 68.763l2.871 2.04c22.218 15.762 53.004 10.53 68.762-11.688l234.423-330.428c15.767-22.22 10.531-53.001-11.687-68.767z" fill="#E5594F" /><path d="M891.662 525.126c-0.363 50.106-8.104 91.767-27.502 142.522-13.232 34.625-44.231 82.177-70.529 111.108-62.993 69.31-152.478 113.292-240.772 121.615-100.773 9.501-189.621-17.478-271.287-78.551 7.65 5.723-7.536-6.408-7.061-6.009-4.562-3.821-8.967-7.82-13.369-11.824-8.803-8.003-17.105-16.535-25.225-25.224-18.148-19.432-26.188-30.526-41.439-54.866-27.11-43.264-40.704-80.283-51.007-132.536-4.015-20.354-5.395-39.803-5.586-66.233-0.531-73.33-114.29-73.381-113.758 0 1.607 222.487 154.098 420.146 370.093 475.715 216.482 55.697 449.039-49.258 553.91-245.54 37.754-70.664 56.715-150.224 57.293-230.179 0.526-73.379-113.231-73.328-113.761 0.002z" fill="#4A5699" /><path d="M137.884 501.467c0.362-50.104 8.103-91.762 27.502-142.52 13.233-34.621 44.233-82.173 70.53-111.108 62.993-69.309 152.472-113.29 240.768-121.615 100.773-9.5 189.626 17.479 271.292 78.554-7.652-5.721 7.532 6.408 7.057 6.01 4.563 3.819 8.968 7.821 13.371 11.823 8.803 8 17.108 16.535 25.228 25.225 18.147 19.43 26.187 30.526 41.438 54.866 27.111 43.264 40.709 80.28 51.009 132.533 4.014 20.352 5.396 39.804 5.586 66.232 0.529 73.33 114.287 73.384 113.76 0-1.608-222.489-154.107-420.144-370.099-475.715-216.482-55.7-449.036 49.26-553.905 245.541-37.753 70.664-56.715 150.219-57.292 230.174-0.534 73.384 113.225 73.33 113.755 0z" fill="#C45FA0" /></svg>
    Wed 2024 Aug, 15
      </label>
      <button
        class="col-2 btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#editModal"
        :disabled="task.isDisabled"
        @click="changeTaskEdit(task)"
      >
<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#ffffff" stroke-width="2.0" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </button>

      <task-title-edit-modal></task-title-edit-modal>

      <button
        class="col-2 btn btn-danger"
        :disabled="task.isDisabled"
        @click="deleteTask(task.id)"
      >
<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 11V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 11V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 7H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </button>
    </div>
  </div>
</template>

<script>
import SpinnerSmall from "./SpinnerSmall.vue";
import TaskTitleEditModal from "./TaskTitleEditModal.vue";
import { mapActions, mapMutations } from "vuex";

export default {
  components: { SpinnerSmall, TaskTitleEditModal },

  data() {
    return {
      labelClass: "col-4 bg-primary p-3 bg-opacity-75 fw-bold fs-5 text-uppercase text-start",
      startClass: "col-2 bg-secondary p-3 bg-opacity-75  text-uppercase text-start",
    };
  },

  props: {
    task: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapActions(["deleteTask", "makeTaskCompleted"]),
    ...mapMutations(["changeTaskEdit"]),
  },

  computed: {
    checkedClass() {
      return this.task.completed
        ? "bg-warning text-decoration-line-through"
        : "";
    },
  },
};
</script>

<style></style>

