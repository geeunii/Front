<script>
import TodoFilter from './components/TodoFilter.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoInput,
    TodoFilter,
    TodoList,
  },

  data() {
    return {
      todos: [], // 전체 할 일 목록
      filter: 'all', // 현재 필터 상태 ('all', 'active', 'completed')
    };
  },

  // 앱 실행 시 로컬스토리지에서 데이터 불러오기
  created() {
    const saved = localStorage.getItem('todos');
    if (saved) {
      this.todos = JSON.parse(saved);
    }
  },

  // todos 데이터가 변경될 때마다 로컬스토리지에 저장 (watch)
  watch: {
    todos: {
      deep: true, // 객체 내부(completed 등) 변경까지 감지
      handler(newTodos) {
        localStorage.setItem('todos', JSON.stringify(newTodos));
      },
    },
  },

  computed: {
    // 필터링된 목록 계산
    filteredTodos() {
      if (this.filter === 'active') {
        return this.todos.filter((todo) => !todo.completed);
      } else if (this.filter === 'completed') {
        return this.todos.filter((todo) => todo.completed);
      }
      return this.todos;
    },
  },

  methods: {
    // 할 일 추가
    addTodo(inputMsg) {
      const newTodo = {
        id: Date.now().toString(), // 유니크 ID 생성
        text: inputMsg,
        completed: false,
      };
      this.todos.push(newTodo);
    },

    // 완료 상태 토글
    toggleTodo(id) {
      this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    },

    // 수정
    updateTodoText(id, newText) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          // 해당 ID의 할 일 객체의 'text' 속성만 새로운 텍스트로 교체
          return { ...todo, text: newText };
        }
        return todo;
      });
    },

    // 개별 삭제
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },

    // 전체 삭제
    deleteAll() {
      if (confirm('정말 모든 할 일을 삭제하시겠습니까?')) {
        this.todos = [];
      }
    },

    // 필터 상태 변경
    updateFilter(newFilter) {
      this.filter = newFilter;
    },
  },
};
</script>

<template>
  <div id="app">
    <div class="container">
      <h1 class="title">Todo List</h1>

      <todo-input @add-todo="addTodo" />

      <todo-filter
        :current-filter="filter"
        :show-delete-all="todos.length > 0"
        @update-filter="updateFilter"
        @delete-all="deleteAll"
      />

      <todo-list
        :computed-todo="filteredTodos"
        @toggle-todo="toggleTodo"
        @delete-todo="deleteTodo"
        @update-text="updateTodoText"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.title {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}
</style>
