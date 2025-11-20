<script setup>
// 자식 컴포넌트에서는 부모 컴포넌트에서 전달한 이벤트를 defineEmits() 받는다
import { defineEmits } from 'vue';

const emit = defineEmits(['count-increment', 'state-count-increment']);

const increment = () => {
  emit('count-increment', 10, 20, 30);
};
</script>

<template>
  <button @click="increment">Count 증가</button>

  <button @click="emit('state-count-increment', [50])">state.count 증가</button>
</template>
