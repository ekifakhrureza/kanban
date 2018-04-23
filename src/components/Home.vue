<template>
  <div class='container'>
    <div class='row justify-content-end' style='margin-bottom:20px'>
      <div class='col-2'>
        <button type='button' class='btn btn-primary' data-toggle='modal' data-target='#AddTask' data-whatever='@getbootstrap'>Add</button>
      </div>
    </div>
    <AddTask />
    <div class='row justify-content-around'>
      <Backlog />
      <Todo />
      <Doing />
      <Done />
    </div>
  </div>
</template>

<script>
import AddTask from './AddTask'
import Backlog from './Backlog'
import Todo from './Todo'
import Doing from './Doing'
import Done from './Done'
export default {
  name: 'Home',
  components: {
    AddTask,
    Backlog,
    Todo,
    Doing,
    Done
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
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
