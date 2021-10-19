<template>
  <div>
    <el-checkbox :value="todo.done" @change="toggleStatus(todo.id)"></el-checkbox>
    <!-- <input type="checkbox" :checked="todo.done" @change="toggleStatus(todo.id)"> -->
    <el-input 
      v-if="editing"
      ref="editBox" 
      @blur="editing = false" 
      @keyup.enter.native="editTodo" 
      @keyup.escape.native="editing = false" 
      v-model="text">
    </el-input>
    <!-- <input v-if="editing" ref="editBox" @blur="editing = false" @keyup.enter="editTodo" @keyup.escape="editing = false" :value="todo.text" type="text"> -->
    <span v-else @dblclick="edit">{{ todo.text }}</span>
    <el-button type="danger" icon="el-icon-delete" circle @click="deleteTodo(todo.id)"></el-button>
    <!-- <button @click="deleteTodo(todo.id)">&times;</button> -->
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  props: ['todo'],
  data() {
    return {
      text: this.todo.text,
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
      // let text = this.$refs.editBox.value.trim()  // 读取目标原素
      let text = this.text 
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