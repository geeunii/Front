<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="todo-item">
    <div class="todo-content">
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="$emit('toggle-todo', todo.id)"
      />
      <span :class="{ completed: todo.completed }">
        {{ todo.text }}
      </span>
    </div>
    <button class="btn-delete" @click="$emit('delete-todo', todo.id)">
      🗑️
    </button>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #eee;
  margin-bottom: 8px;
  border-radius: 4px;
}
.todo-item:hover {
  background-color: #f9f9f9;
}
.todo-content {
  display: flex;
  align-items: center;
  gap: 10px;
}
.completed {
  text-decoration: line-through;
  color: #aaa;
}
.btn-delete {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
}
</style>
