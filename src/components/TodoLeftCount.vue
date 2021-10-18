<template>
  <span>
    {{ count }} items left
  </span>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      count: 'leftCount'
    })
    // count() {
    //   // return this.$store.state.todos.filter(it => !it.done).length
    //   return this.$store.getters.leftCount
    // }
  }
}
</script>
