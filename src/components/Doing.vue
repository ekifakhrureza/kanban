<template>
  <div class="col">
    <table class="table table-bordered">
      <thead>
        <tr class="table-primary">
          <th scope="col">Doing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <table class="table table-bordered" v-for="(doing,index) in getDoing" :key="index">
            <thead>
              <tr>
                <th scope="col" colspan="3">
                  <p style="color: red">{{ doing.task }}</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row"><b>Description : </b> {{ doing.description }}</td>
              </tr>
              <tr>
                <td scope="row"><b>Point : </b> {{ doing.point }}</td>
              </tr>
              <tr>
                <td scope="row"><b>Assign: </b> {{ doing.assign }}</td>
              </tr>
              <tr>
                <td>
                  <div class="col-2">
                    <button type="button" class="btn btn-success" data-toggle="modal" :data-target="'#' + index"  data-whatever="@getbootstrap">Manage</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="modal" tabindex="-1" role="dialog" :id="index">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">{{ doing.task }}</h5>
                          <button type="button" :class="'close' + index"  data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
                        </div>
                        <div class="modal-body">
                          <b>Description : </b> {{ doing.description }}
                        </div>
                         <div class="modal-body">
                          <b>Point : </b> {{ doing.point }}
                        </div>
                         <div class="modal-body">
                          <b>Assign : </b> {{ doing.assign }}
                        </div>
                        <div class="modal-footer">
                           <button type="button" @click="move(index,doing,'doing','todo')" class="btn btn-warning">To-Do</button>
                          <button type="button" @click="remove(index,doing.task)" class="btn btn-dark">Delete</button>
                          <button type="button" @click="move(index,doing,'doing','done')" class="btn btn-success">Done</button>
                        </div>
                      </div>
                    </div>
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
import {
  mapActions, mapGetters
} from 'vuex'
export default {
  name: 'Doing',
  methods: {
    ...mapActions(['getAllTask', 'removeTask', 'moveTask']),
    remove (index, task) {
      let confirmation = confirm(`Are you sure delete task '${task}'?`)
      if (confirmation) {
        let delTask = {
          key: index,
          status: 'doing'
        }
        this.removeTask(delTask)
        document.querySelector('.close' + index).click()
      }
    },
    move (index, task, origin, destination) {
      let confirmation = confirm(
        `Are you sure move task "${task.task}"?`
      )
      if (confirmation) {
        let delTask = {
          key: index,
          status: origin
        }
        let updTask = {
          key: index,
          task: task.task,
          description: task.description,
          point: task.point,
          assign: task.assign,
          status: destination
        }
        document.querySelector('.close' + index).click()
        this.moveTask(updTask)
        this.removeTask(delTask)
      }
    }
  },
  created () {
    this.getAllTask()
  },
  computed: {
    ...mapGetters(['getDoing'])
  }
}
</script>
