<template>
  <div class="container">
    <div class="row justify-content-end" style="margin-bottom:20px">
      <div class="col-2">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#AddTask" data-whatever="@getbootstrap">Add</button>
      </div>
    </div>
    <AddTask />
    <div class="row justify-content-around">
      <Backlog />
      <div class="col">
        <table class="table table-bordered">
          <thead>
            <tr class="table-warning">
              <th scope="col">To-Do</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Task</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Content</th>
                  </tr>
                </tbody>
              </table>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col">
        <table class="table table-bordered">
          <thead>
            <tr class="table-primary">
              <th scope="col">Doing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Task</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Content</th>
                  </tr>
                </tbody>
              </table>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col">
        <table class="table table-bordered">
          <thead>
            <tr class="table-success">
              <th scope="col">Done</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Task</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Content</th>
                  </tr>
                </tbody>
              </table>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import AddTask from "./AddTask"
  import Backlog from "./Backlog"
  export default {
    name: "Home",
    components: {
      AddTask,
      Backlog
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
