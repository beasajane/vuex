<template>
  <el-button v-if="hasCompleted" @click="clear">Clear completed</el-button>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations({
      clear: 'clearCompletedTodo'
    })
    // clear() {
    //   this.$store.commit('clearCompletedTodo')
    // }
  },
  computed: {
    ...mapGetters(['hasCompleted'])
    // hasCompleted() {
    //   // return this.$store.state.todos.some(it => it.done)
    //   return this.$store.getters.hasCompleted
    // },
  }
}
</script>