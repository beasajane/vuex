<template>
  <div>
    <TodoItem v-for="todo of visibleTodos" :key="todo.id" :todo="todo" />
  </div>
</template>
<script>
import TodoItem from "./TodoItem.vue";
import { mapGetters } from 'vuex'



export default {
  computed: {
    ...mapGetters(['visibleTodos']),
  },
  components: {
    TodoItem,
  },
};
</script>
