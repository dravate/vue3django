import axios from "axios";

export default {
  state() {
    return {
      tasksList: [],
      tasksPage: 1,
      tasksLimit: 10,
      taskForEdit: {},
      isTasksLoading: false,
      showErrorAlert: false,
      taskTitle: "",
    };
  },

  mutations: {
    updateTitle(state, e) {
      state.taskTitle = e.target.value;
    },

    changeTaskEdit(state, task) {
      state.taskForEdit = { ...task };
      state.taskTitle = task.title;
    },

    changeLoadingFlag(state, flag) {
      state.isTasksLoading = flag;
    },

    pushTask(state, task) {
      state.tasksList.push({ ...task, isDisabled: false });
    },

    toggleAlert(state, flag) {
      state.showErrorAlert = flag;
    },

    updateTaskItemValue(state, payload) {
      state.tasksList = state.tasksList.map((item) =>
        item.id === payload.idItem
          ? { ...item, [payload.keyItem]: payload.valueItem }
          : item
      );
    },

    getAllTasks(state, tasks) {
      state.tasksList = tasks;
    },

    removeTask(state, id) {
      state.tasksList = state.tasksList.filter((item) => item.id !== id);
    },

    addDisabledFlag(state) {
      state.tasksList.forEach((item) => (item.isDisabled = false));
    },
  },

  actions: {
    async editTask({ commit, state }, id) {
      try {
        commit("toggleAlert", false);

        const response = await axios.patch(
          `https://jsonplaceholder.typicode.com/todos/${id}`,
          {
            data: {
              title: state.taskTitle,
            },
          }
        );
        console.log(response);
        commit("updateTaskItemValue", {
          idItem: id,
          keyItem: "title",
          valueItem: state.taskTitle,
        });
      } catch (error) {
        console.error(error);

        commit("toggleAlert", true);
      } finally {
           console.log("Hello");
      }
    },

    async addTask({ commit }, task) {
      try {
        commit("toggleAlert", false);

        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/todos",
          task
        );
        console.log(response);
        // This below line of code have to be uncommented on production with real rest api.
        // commit("pushTask", response.data);

        // This below line of code have to be commented on production with real rest api.
        commit("pushTask", task);
      } catch (error) {
        console.error(error);

        commit("toggleAlert", true);
      }
    },

    async getTasks({ commit, state }) {
      try {
        commit("changeLoadingFlag", true);
        commit("toggleAlert", false);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?sort_by=id:desc",
          {
            params: {
              _page: state.tasksPage,
              _limit: state.tasksLimit,
            },
          }
        );

        commit("getAllTasks", response.data);
        commit("addDisabledFlag");
      } catch (error) {
        console.error(error);

        commit("toggleAlert", true);
      } finally {
        commit("changeLoadingFlag", false);
      }
    },

    async deleteTask({ commit }, id) {
      try {
        commit("toggleAlert", false);

        const response = await axios.delete(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
         console.log(response);
        commit("removeTask", id);
      } catch (error) {
        console.error(error);

        commit("toggleAlert", true);
      }
    },

    async makeTaskCompleted({ commit }, task) {
      try {
        commit("toggleAlert", false);
        commit("updateTaskItemValue", {
          idItem: task.id,
          keyItem: "isDisabled",
          valueItem: true,
        });

        const response = await axios.patch(
          `https://jsonplaceholder.typicode.com/todos/${task.id}`,
          {
            data: {
              completed: !task.completed,
            },
          }
        );
        console.log(response);
        commit("updateTaskItemValue", {
          idItem: task.id,
          keyItem: "completed",
          valueItem: !task.completed,
        });
      } catch (error) {
        console.error(error);

        commit("toggleAlert", true);
      } finally {
        commit("updateTaskItemValue", {
          idItem: task.id,
          keyItem: "isDisabled",
          valueItem: false,
        });
      }
    },
  },

  getters: {
    getTasksComputed(state) {
      return [...state.tasksList].reverse();
    },

    tasksCount(state, getters) {
      return getters.getTasksComputed.length;
    },

    loadingFlag(state) {
      return state.isTasksLoading;
    },

    allertFlag(state) {
      return state.showErrorAlert;
    },

    getTaskForEdit(state) {
      return state.taskForEdit;
    },

    taskTitle(state) {
      return state.taskTitle;
    },
  },
};

