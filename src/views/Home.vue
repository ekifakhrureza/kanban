<template>
  <div class="home">
    <h1>Kanban Board</h1>
    <Home />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'home',
  components: {
    Home
  }
}
</script>
