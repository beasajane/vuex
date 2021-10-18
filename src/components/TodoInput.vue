<template>
  <div>
    <input type="checkbox" :checked="isAllChecked" @click="toggleAll">
    <input type="text" v-model.trim="text" @keyup.enter="addTodo">
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    ...mapMutations({
      toggleAll:'toggleAllTodoStatus',// 调用组件的toggleAll相当于调用store的mutation的toggleAllTodoStatus方法
    }),
    // toggleAll() {
    //   this.$store.commit('toggleAllTodoStatus')
    // },
    addTodo() {
      if(this.text) {
        // this.$store.commit('addTodo', {
        //   text: this.text,
        //   done: false,
        // })
        this.$store.commit('addTodo', this.text)
        this.text = ''
      }
    }
  },
  computed: {
    ...mapGetters(['isAllChecked'])
    // mapGetters() {
    //   // return this.$store.state.todos.every(it => it.done)
    //   return this.$store.getters.isAllChecked
    // }
  }
}
</script>
