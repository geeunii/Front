<script>
export default {
  props: {
    current: {
      // App.vue로부터 현재 활성화된 탭 상태를 받음
      type: String,
      default: 'all',
    },
  },
  emits: ['update-tab'],
  methods: {
    updateTab(tab) {
      // 탭 클릭 시 App.vue로 새 상태를 이벤트로 올림
      this.$emit('update-tab', tab);
    },
  },
};
</script>

<template>
  <div class="todo__title">
    <h1 class="todo__text">Todo List</h1>
    <ul class="todo__tab">
      <li
        :class="{ 'todo__tab--active': current === 'all' }"
        @click="updateTab('all')"
      >
        전체
      </li>
      <li
        :class="{ 'todo__tab--active': current === 'completed' }"
        @click="updateTab('completed')"
      >
        완료
      </li>
    </ul>
  </div>
</template>
