<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isEditing: false, // 현재 수정 모드인지 판별하는 상태
      editText: this.todo.text, // 수정 중인 임시 텍스트
    };
  },

  watch: {
    'todo.text'(newText) {
      this.editText = newText;
    },
  },

  methods: {
    startEdit() {
      this.isEditing = true;
      this.$nextTick(() => {
        this.$refs.editInput.focus();
      });
    },

    finishedEdit() {
      this.isEditing = false;
      const newText = this.editText.trim();

      // 내용이 변경되거나 비어있지 않을 때만 부모로 이벤트를 올립니다.
      if (newText && newText !== this.todo.text) {
        // App.vue로 id와 함께 수정된 텍스트를 전달
        this.$emit('update-text', this.todo.id, newText);
      } else {
        // 내용이 없거나 변경되지 않았으면 원래 텍스트로 되돌림 (UI)
        this.editText = this.todo.text;
      }
    },

    cancleEdit() {
      this.isEditing = false;
      this.editText = this.todo.text;
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

      <input
        v-if="isEditing"
        type="text"
        v-model="editText"
        @keyup.enter="finishedEdit"
        @keyup.esc="cancleEdit"
        @blur="finishedEdit"
        class="edit-input"
        ref="editInput"
      />

      <span v-else :class="{ completed: todo.completed }">
        {{ todo.text }}
      </span>
    </div>

    <div class="action-buttons">
      <button v-if="!isEditing" class="btn-edit" @click="startEdit">✏️</button>

      <button class="btn-delete" @click="$emit('delete-todo', todo.id)">
        🗑️
      </button>
    </div>
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
  flex-grow: 1; /* 텍스트 공간 확보 */
}
.completed {
  text-decoration: line-through;
  color: #aaa;
}
.edit-input {
  flex: 1;
  padding: 5px;
  border: 1px solid #6c5ce7; /* 수정 모드 강조 */
  border-radius: 4px;
  font-size: 1rem;
}
/* ❗❗ 버튼들을 묶는 컨테이너 스타일 */
.action-buttons {
  display: flex;
  gap: 5px;
}
.btn-delete,
.btn-edit {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem; /* 아이콘 크기 조정 */
  padding: 5px;
  line-height: 1; /* 아이콘 정렬 */
  transition: opacity 0.2s;
}
.btn-edit:hover {
  opacity: 0.7;
}
</style>
