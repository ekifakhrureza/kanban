<template>
  <div class="modal fade" id="AddTask" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Task</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
          <form class="needs-validation" novalidate>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Task:</label>
              <input v-model='task' name="task" type="text" class="form-control" id="recipient-name" placeholder="Input Task" required>
              <div class="invalid-feedback">
                Please input a task.
              </div>
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label">Description:</label>
              <textarea v-model='description' name="description" class="form-control" id="message-text" placeholder="Input Description"></textarea>
            </div>
            <div class="form-group">
              <label for="recipient-point" class="col-form-label">Point:</label>
              <input v-model='point' name="point" type="text" class="form-control" id="recipient-point" placeholder="Input Point">
            </div>
            <div class="form-group">
              <label for="recipient-assign" class="col-form-label">Assign:</label>
              <input v-model='assign' name="assign" type="text" class="form-control" id="recipient-assign" placeholder="Assign To">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click='add()'>Add Task</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapActions
} from 'vuex'
export default {
  name: 'AddTask',
  data () {
    return {
      task: '',
      description: '',
      point: 0,
      assign: ''
    }
  },
  methods: {
    ...mapActions([
      'addTask'
    ]),
    add () {
      if (this.task !== '') {
        let newTask = {
          task: this.task,
          description: this.description,
          point: this.point,
          assign: this.assign,
          status: 'backlog'
        }
        this.addTask(newTask)
        this.task = ''
        this.description = ''
        this.point = ''
        this.assign = ''
        document.querySelector('.close').click()
      } else {
        alert('Task Cannot Be Empty')
      }
    }
  }
}
</script>
