<script>
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem,
  },

  props: {
    computedTodo: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    onToggleTodo(id) {
      this.$emit('toggle-todo', id);
    },

    onDeleteTodo(id) {
      this.$emit('delete-todo', id);
    },
  },
};
</script>

<template>
  <div class="todo-list">
    <!-- 할 일 없을 때  -->
    <p v-if="computedTodo.length === 0" class="empty-msg">할 일이 없습니다</p>

    <todo-item
      v-for="todo in computedTodo"
      :key="todo.id"
      :todo="todo"
      @toggle-todo="onToggleTodo"
      @delete-todo="onDeleteTodo"
    />
  </div>
</template>

<style scoped>
.empty-msg {
  text-align: center;
  color: #aaa;
  padding: 20px;
}
</style>
