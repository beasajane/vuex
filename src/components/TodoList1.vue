<template>
  <ul>
    <TodoItem v-for="todo of visibleTodos" :key="todo.id" :todo="todo" />
  </ul>
</template>
<script>
  import TodoItem from "./TodoItem.vue";
  // import { mapGetters, mapState } from 'vuex'

  // function mapGetters(fields) {
  //   let obj = {}
  //   for(let i = 0; i < fields.length; i++) {
  //     let name = fields[i]
  //     obj[name] =  
  //       function name() {
  //         return this.$store.getters[name]
  //       }
  //   }
  //   return obj
  // }
  function mapGetters(fields) {
    let obj = {}
    for(let field of fields) {
      obj[field] =  
        function () {
          // return this.$store.getters.field // 出错地方
          return this.$store.getters[field]
        }
    }
    return obj
  }

  function mapState(maps) {
    let obj = {}
    if(Array.isArray(maps)) {
        for(let field of fields) {
        obj[field] =  
          function () {
            // return this.$store.getters.field // 出错地方
            return this.$store.getters[field]
          }
      }
    } else {
      for(let key in maps) {
        let val = maps[key]
        if(typeof val === 'string') {
          obj[key] = function() {
            return this.$store.state[val]
          }
        }else {
          obj[key] = function() {
            return val(this.$store.state)
          }
        }
      }
    }
    return obj
  }
  export default {
    computed: {
      ...mapState({
        foo: 'bar',
        baz: state => state.baz * state.bae
      }),

      // visibleType() {
      //   return this.$store.state.show
      // },
      ...mapGetters(['visibleTodos']),
      ...{
        visibleTodos() {
          return this.$store.getters.visibleTodos
        },
        isAllChecked() {
          return this.$store.getters.isAllChecked
        },
      }
      // visibleTodos() {
      //   return this.$store.getters.visibleTodos
      //   // switch(this.visibleType) {
      //   //   case 'active':
      //   //     return this.$store.state.todos.filter(it => !it.done)
      //   //   case 'completed':
      //   //     return this.$store.state.todos.filter(it => it.done)
      //   //   default:
      //   //     return this.$store.state.todos
      //   // }
      // },
    },
    components: {
      TodoItem,
    },
  };
</script>

<script>
  import TodoItem from "./TodoItem.vue";
  // import { mapGetters } from 'vuex'

  function mapGetters(fields) {
    let obj = {}
    for(let field of fields) {
      obj[field] = function () {
        return this.$store.getters[field]
      }
    }
    return obj
  }


  export default {
    computed: {
      ...mapGetters(['visibleTodos']),
    },
    components: {
      TodoItem,
    },
  };
</script>