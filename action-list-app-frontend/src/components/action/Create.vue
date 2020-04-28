<template>
    <div>
        <div class="col-md-12 form-wrapper">
            <h2> Create Action </h2>
          <form id="create-post-form" @submit.prevent="createAction">
               <div class="form-group col-md-12">
                <label for="title"> Title  </label>
                <input type="text" id="Title"  name="title" v-model="title" class="form-control" placeholder="Enter Title">
               </div>
               <div class="form-group col-md-12">
                <label for="title"> Area </label>
                <input type="text" id="Area" v-model="area" name="title" class="form-control" placeholder="Enter Area">
               </div>
             <div class="form-group col-md-12">
                <label for="title"> Description </label>
                <input type="text" id="description" v-model="description" name="title" class="form-control" placeholder="Enter Description">
            </div>
            <div class="form-group col-md-12">
                <label for="title"> Comments </label>
                <input type="text" id="comments" v-model="comments" name="title" class="form-control" placeholder="Enter Comments">
            </div>
            <div class="form-group col-md-12">
                <label for="title"> Priority  </label>
                <input type="number" id="priority" v-model="priority" name="title" class="form-control" placeholder="Enter Priority">
            </div>
              <div class="form-group col-md-12">
                  <label for="title"> DueDate </label>
                  <input type="date" id="dueDate" v-model="dueDate" name="title" class="form-control" placeholder="Enter Due Date">
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
      dueDate: ""
    };
  },
  methods: {
    createAction() {
      console.log("THIS IS THE DATE YOU ARE LOOKING FOR" + this.dueDate);
      let actionData = {
        title: this.title,
        area: this.area,
        description: this.description,
        comments: this.comments,
        priority: this.priority,
        dueDate: this.dueDate
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
