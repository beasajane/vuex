<template>
  <div>
    <TodoLeftCount></TodoLeftCount>
    <el-radio-group v-model="show">
      <el-radio-button label="all"></el-radio-button>
      <el-radio-button label="active"></el-radio-button>
      <el-radio-button label="completed"></el-radio-button>
    </el-radio-group>

     <!-- // 234 -->
    <!-- <el-radio-group v-model="show"> 
      <el-radio-button @click.native="setVisible('all')" :value="show1 == 'all'" label="all"></el-radio-button>
      <el-radio-button @click.native="setVisible('active')" :value="show1 == 'active'" label="active"></el-radio-button>
      <el-radio-button @click.native="setVisible('completed')" :value="show1 == 'completed'" label="completed"></el-radio-button>
    </el-radio-group>  -->

    <!-- <div>
      <label><input type="radio" @click="setVisible('all')" :checked="show == 'all' ">All</label>
      <label><input type="radio" @click="setVisible('active')" :checked="show == 'active' ">Active</label>
      <label><input type="radio" @click="setVisible('completed')" :checked="show == 'completed' ">Completed</label>
    </div> -->
    <ClearTodo />
  </div>
</template>
<script>
import ClearTodo from './ClearTodo.vue'
import TodoLeftCount from './TodoLeftCount.vue'

import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['setVisible']),
    // setVisible(type) {
    //   this.$store.commit('setVisible', type)
    // }
  },
  computed: {
    show: {
      get() {
        return this.$store.state.show
      },
      set(val) {
        this.$store.commit("setVisible", val)
      }
    }
  },
  components: {
    ClearTodo,
    TodoLeftCount,
  }
}
//  // 234
// import { mapMutations, mapState } from 'vuex'
  // export default {
  //   data() {
  //     return {
  //       show: this.$store.state.show
  //     }
  //   },
  //   methods: {
  //     // ...mapMutations(['setVisible']),
  //     setVisible(type) {
  //       this.$store.commit('setVisible', type)
  //     }
  //   },
  //   computed: {
  //     // ...mapState(['show'])
  //     show1() {
  //       return this.show
  //     }
  //   },
  //   components: {
  //     ClearTodo,
  //     TodoLeftCount,
  //   }
  // }
</script>
