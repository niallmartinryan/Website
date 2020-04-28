// ./src/views/Home.vue
<template>
    <div class="container-fluid">
      <div class="text-center">
        <h1>To Do List</h1>
       <p>Nest.js, Vue.js and MongoDB</p>
       <div v-if="actions.length === 0">
            <h2> No action found at the moment </h2>
        </div>
      </div>

        <div class="">
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Area</th>
                  <th scope="col">Description</th>
                  <th scope="col">Comments</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Due Date</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="action in actions" :key="action._id">
                  <td>{{ action.title }}</td>
                  <td>{{ action.area }}</td>
                  <td>{{ action.description }}</td>
                  <td>{{ action.comments }}</td>
                  <td>{{ action.priority }}</td>
                  <td>{{ action.dueDate | date }}</td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group" style="margin-bottom: 20px;">
                                  <router-link :to="{name: 'Edit', params: {id: action._id}}" class="btn btn-sm btn-outline-secondary">Edit Action </router-link>
                                  <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteAction(action._id)">Delete Action</button>
                                </div>
                              </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
</template>
<script>
import { server } from "../helper";
import axios from "axios";

export default {
  data() {
    return {
      actions: []
    };
  },
  created() {
    this.fetchActions();
  },
  methods: {
    fetchActions() {
      axios
        .get(`${server.baseURL}/action/actions`)
        .then(data => (this.actions = data.data));
        console.log(server.baseURL);
    },
    deleteAction(id) {
      axios
        .delete(`${server.baseURL}/action/delete?actionID=${id}`)
        .then(data => {
          console.log(data);
          window.location.reload();
        });
    }
  }
};
</script>
