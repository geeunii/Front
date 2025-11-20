<script setup="setup">
import { ref, watch } from 'vue';
// 객체 자료형 속성 count에 값 0을 할당하여 반응형데이터로 만들어 주십쇼
const state = ref({ count: 0 });

watch(
  state,
  (currentValue, preValue) => {
    console.log(currentValue, preValue);
  },
  { deep: true }
);
</script>

<template>
  <h1>WatchEx2: {{ state.count }}</h1>
  <button @click="state.count--">ref 다운</button>
</template>
