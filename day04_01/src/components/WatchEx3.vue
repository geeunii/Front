<script setup="setup">
import { reactive, ref, watch } from 'vue';
// 객체 자료형 속성 count에 값 0을 할당하여 reactive() 반응형데이터로 만들어 주십쇼
// const state = ref({ count: 0 });
const state = reactive({ count: 0 });

watch(state, (currentValue, preValue) => {
  console.log(currentValue, preValue);
});
</script>

<template>
  <h1>WatchEx3: {{ state.count }}</h1>
  <button @click="state.count--">reactive 인데 프록시나옴</button>
</template>
