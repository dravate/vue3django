<template>
  <div class="modal fade" id="editModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Task Title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <input
            type="text"
            class="form-control"
            :value="taskTitle"
            @input="updateTitle"
          />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="editTask(getTaskForEdit.id)"
            data-bs-dismiss="modal"
            :disabled="editButtonDisabledFlag"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["getTaskForEdit", "taskTitle"]),

    editButtonDisabledFlag() {
      return (
        this.taskTitle.length === 0 ||
        this.taskTitle === this.getTaskForEdit.title
      );
    },
  },

  methods: {
    ...mapActions(["editTask"]),
    ...mapMutations(["updateTitle"]),
  },
};
</script>

<style>
</style>
