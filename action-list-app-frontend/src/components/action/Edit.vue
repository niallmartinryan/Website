<template>
    <div>
    <h4 class="text-center mt-20">
    <small>
    <button class="btn btn-success" v-on:click="navigate()">View All Actions </button>
         </small>
        </h4>
        <div class="col-md-12 form-wrapper">
          <h2> Edit Action </h2>
          <form id="create-post-form" @submit.prevent="editAction">
               <div class="form-group col-md-12">
                <label for="title"> Title </label>
                <input type="text" id="title" v-model="action.title" name="title" class="form-control" placeholder="Enter Title">
               </div>
               <div class="form-group col-md-12">
                <label for="title"> Area </label>
                <input type="text" id="area" v-model="action.area" name="title" class="form-control" placeholder="Enter Area">
               </div>
             <div class="form-group col-md-12">
                <label for="title"> Description </label>
                <input type="text" id="description" v-model="action.description" name="title" class="form-control" placeholder="Enter description">
            </div>
            <div class="form-group col-md-12">
                <label for="title"> Comments </label>
                <input type="text" id="comments" v-model="action.comments" name="title" class="form-control" placeholder="Enter Comments">
            </div>
            <div class="form-group col-md-12">
                <label for="title"> Priority </label>
                <input type="number" id="priority" v-model="action.priority" name="title" class="form-control" placeholder="Enter Priority">
            </div>
              <div class="form-group col-md-12">
                  <label for="description"> Due Date </label>
                  <input type="date" id="dueDate" v-model="action.dueDate" name="description" class="form-control" placeholder="Enter Due Date">
              </div>
              <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Edit Action </button>
              </div>           </form>
        </div>
    </div>
</template>
<script>
import { server } from "../../helper";
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: 0,
      action: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getAction();
  },
  methods: {
    editAction() {
      let actionData = {
        title: this.action.title,
        area: this.action.area,
        description: this.action.description,
        comments: this.action.phone,
        priority: this.action.priority,
        dueDate: this.action.dueDate
      };
      axios
        .put(
          `${server.baseURL}/action/update?actionID=${this.id}`,
          actionData
        )
        .then(data => {
          router.push({ name: "home" });
        });
    },
    getAction() {
      axios
        .get(`${server.baseURL}/action/action/${this.id}`)
        .then(data => (this.action = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>
