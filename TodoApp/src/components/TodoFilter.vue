<script>
export default {
  props: {
    currentFilter: {
      type: String,
      default: 'all', // 필터 상태 ('all', 'active', 'completed')
    },
    showDeleteAll: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div class="filter-container">
    <div class="tabs">
      <button
        :class="{ active: currentFilter === 'all' }"
        @click="$emit('update-filter', 'all')"
      >
        전체
      </button>
      <button
        :class="{ active: currentFilter === 'active' }"
        @click="$emit('update-filter', 'active')"
      >
        미완료
      </button>
      <button
        :class="{ active: currentFilter === 'completed' }"
        @click="$emit('update-filter', 'completed')"
      >
        완료
      </button>
    </div>

    <button
      v-if="showDeleteAll"
      @click="$emit('delete-all')"
      class="btn-delete-all"
    >
      전체 삭제
    </button>
  </div>
</template>

<style scoped>
.filter-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.tabs button {
  background: none;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  color: #666;
  font-weight: bold;
}
.tabs button.active {
  color: #000;
  border-bottom: 2px solid #000;
}
.btn-delete-all {
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}
</style>
