<template>
  <li>
    <input type="checkbox" :checked="todo.done" @change="toggleStatus(todo.id)">
    <!-- v-model="todo.done"  :value="todo.done" @change="todo.done = $event.atarget.value" -->
    <input ref="editBox" @blur="editing = false" @keyup.enter="editTodo" @keyup.escape="editing = false" v-if="editing" :value="todo.text" type="text">
    <span v-else @dblclick="edit">{{ todo.text }}</span>
    <button @click="deleteTodo(todo.id)">&times;</button>
  </li>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  props: ['todo'],
  data() {
    return {
      editing: false,  // 编辑状态放在局部，不需要保存
    }
  },
  methods: {
    async edit() {
      this.editing = true
      await this.$nextTick()
      this.$refs.editBox.focus()
    },
    editTodo() {
      console.log(this.$refs)
      let text = this.$refs.editBox.value.trim()  // 读取目标原素
      if(text) {
        this.$store.commit('changeTodoText', {
          id: this.todo.id,
          text,
        })
        this.$refs.editBox.value = ''
      }
      this.editing = false
    },
    ...mapMutations({ //deleteTodo(todo.id)
      deleteTodo: 'deleteTodo',
      toggleStatus: 'toggleTodoStatus',
    }),
    // deleteTodo() { //deleteTodo
    //   this.$store.commit('deleteTodo', this.todo.id)
    // },
    // toggleStatus() {
    //   // this.todo.done = !this.todo.done
    //   this.$store.commit('toggleTodoStatus', this.todo.id)
    // }
  }
}
</script>