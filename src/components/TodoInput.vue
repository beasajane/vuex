<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="1"><el-checkbox :value="isAllChecked" @change="toggleAll"></el-checkbox></el-col>
      <el-col :span="15"><el-input size="mini" v-model.trim="text" @keyup.enter.native="addTodo" placeholder="请输入内容"></el-input></el-col>
    </el-row>
    <!-- <input type="checkbox" :checked="isAllChecked" @click="toggleAll"> -->
    <!-- <input type="text" v-model.trim="text" @keyup.enter="addTodo"> -->
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
