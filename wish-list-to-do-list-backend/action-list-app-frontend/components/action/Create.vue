<template>
    <div>
        <div class="col-md-12 form-wrapper">
            <h2> Create Action </h2>
          <form id="create-post-form" @submit.prevent="createAction">
               <div class="form-group col-md-12">
                <label for="title"> Title  </label>
                <input type="text" id="Title" v-model="Title" name="title" class="form-control" placeholder="Enter Title">
               </div>
               <div class="form-group col-md-12">
                <label for="area"> Area </label>
                <input type="text" id="Area" v-model="Area" name="area" class="form-control" placeholder="Enter Area">
               </div>
             <div class="form-group col-md-12">
                <label for="description"> Description </label>
                <input type="text" id="description" v-model="description" name="description" class="form-control" placeholder="Enter Description">
            </div>
            <div class="form-group col-md-12">
                <label for="comments"> Comments </label>
                <input type="text" id="comments" v-model="comments" name="comments" class="form-control" placeholder="Enter Comments">
            </div>
            <div class="form-group col-md-12">
                <label for="priority"> Priority  </label>
                <input type="number" id="priority" v-model="priority" name="priority" class="form-control" placeholder="Enter Priority">
            </div>
              <div class="form-group col-md-12">
                  <label for="due_Date"> Due_Date </label>
                  <input type="date" id="Due_Date" v-model="due_date" name="due_date" class="form-control" placeholder="Enter Due_Date">
              </div>
              <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Create Action </button>
              </div>           </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { server } from "../../helper";
import router from "../../router";
export default {
  data() {
    return {
      title: "",
      area: "",
      description: "",
      comments: "",
      priority: "",
      due_Date: ""
    };
  },
  methods: {
    createAction() {
      let customerData = {
        title: this.title,
        area: this.area,
        description: this.description,
        comments: this.comments,
        priority: this.priority,
        due_Date: this.Due_Date
      };
      this.__submitToServer(actionData);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/action/create`, data).then(data => {
        router.push({ name: "home" });
      });
    }
  }
};
</script>
