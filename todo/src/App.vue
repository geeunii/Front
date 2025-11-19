<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoHeader,
    TodoList,
    TodoInput,
  },

  data() {
    return { todo: [], current: 'all' };
  },

  methods: {
    addTodo(inputMsg) {
      const item = {
        id: Math.random(),
        msg: inputMsg,
        complete: false,
      };
      this.todo.push(item);
    },
    // TodoHeader가 이벤트를 발생시키면 이 메서드가 실행됨
    updateTab(tab) {
      this.current = tab;
      console.log('현재 탭:', tab); // 탭 전환 확인을 위한 로그
    },

    deleteTodo(id) {
      this.todo = this.todo.filter((v) => v.id !== id);
    },

    updateTodo(id) {
      this.todo = this.todo.map((v) =>
        v.id === id ? { ...v, completed: !v.completed } : v
      );
    },
  },

  computed: {
    computedTodo() {
      if (this.current === 'all') {
        return this.todo;
      } else {
        return this.todo.filter((v) => v.completed);
      }
    },
  },
};
</script>

<template>
  <div class="todo">
    <!-- TodoInput으로 전달받은 현재 todo TodoHeader에 전달 -->
    <todo-header :current="current" @update-tab="updateTab" />
    <!-- ToList 컴포넌트로 computedTodo 데이터를 전달 -->
    <todo-list
      :computed-todo="computedTodo"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
    />
    <todo-input @add-todo="addTodo" />
  </div>
</template>
