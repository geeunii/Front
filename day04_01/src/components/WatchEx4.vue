<script setup="setup">
import { reactive, ref, watch } from 'vue';
// 객체 자료형 속성 count에 값 0을 할당하여 reactive() 반응형데이터로 만들어 주십쇼
// const state = ref({ count: 0 });
const state = reactive({ count: 0 });

// 반응형 데이터를 콜백 함수 형태로 사용한 인자로 watch()에게 넘겨주기
watch(
  () => state.count,
  (currentValue, preValue) => {
    console.log(currentValue, preValue);
  }
);
</script>

<template>
  <h1>WatchEx4: {{ state.count }}</h1>
  <button @click="state.count++">watch 콜백 함수 형태 사용</button>
</template>
