<template>
  <div class="col">
    <table class="table table-bordered">
      <thead>
        <tr class="table-danger">
          <th scope="col">Back-log</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <table class="table table-bordered" v-for="(backlog,index) in getBacklog" :key="index">
            <thead>
              <tr>
                <th scope="col" colspan="3">
                  <p style="color: red">{{ backlog.task }}</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row"><b>Description : </b> {{ backlog.description }}</td>
              </tr>
              <tr>
                <td scope="row"><b>Point : </b> {{ backlog.point }}</td>
              </tr>
              <tr>
                <td scope="row"><b>Assign: </b> {{ backlog.assign }}</td>
              </tr>
              <tr>
                <td>
                <div class="col-2">
                  <button type="button" @click="remove(index)" class="btn btn-danger">Delete</button>
                </div>
                </td>
              </tr>
            </tbody>
          </table>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import { mapGetters } from "vuex"
export default {
  name: "Backlog",
  methods: {
     ...mapActions([
      'removeTask'
    ]), 
    remove (index) {
      console.log(index);
      
      this.removeTask(index)
    }
  },
  created() {
    this.$store.dispatch("getAllTask")
  },
  computed: {
    ...mapGetters(["getBacklog"])
  }
};
</script>

<style>

</style>
