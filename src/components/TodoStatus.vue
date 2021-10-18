<template>
  <div>
    <TodoLeftCount />
    <div>
      <label><input type="radio" @click="setVisible('all')" :checked="show == 'all' ">All</label>
      <label><input type="radio" @click="setVisible('active')" :checked="show == 'active' ">Active</label>
      <label><input type="radio" @click="setVisible('completed')" :checked="show == 'completed' ">Completed</label>
    </div>
    <ClearTodo />
  </div>
</template>
<script>
import ClearTodo from './ClearTodo.vue'
import TodoLeftCount from './TodoLeftCount.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['setVisible']),
    // setVisible(type) {
    //   this.$store.commit('setVisible', type)
    // }
  },
  computed: {
    ...mapState(['show'])
    // show() {
    //   return this.$store.state.show
    // }
  },
  components: {
    ClearTodo,
    TodoLeftCount,
  }
}
</script>
