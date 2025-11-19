<script>
export default {
  data() {
    return {
      inputMsg: '',
    };
  },

  emits: ['add-todo'],

  methods: {
    addTodo() {
      if (this.inputMsg.trim() !== '') {
        this.$emit('add-todo', this.inputMsg.trim());
        this.inputMsg = '';
      }
    },
  },
};
</script>

<template>
  <div class="input-box">
    <input
      type="text"
      v-model="inputMsg"
      @keyup.enter="addTodo"
      placeholder="할 일을 입력하세요"
      class="input-field"
    />
    <button @click="addTodo" class="btn-add">추가</button>
  </div>
</template>

<style scoped>
.input-box {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.input-field {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.btn-add {
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
