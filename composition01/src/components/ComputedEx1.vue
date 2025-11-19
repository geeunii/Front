<script setup="setup">
import { computed, ref, reactive } from 'vue';

const refCount = ref(0);
const reactiveCount = reactive({ count: 0 });

// ref() 반응형 데이터를 활용할 때는 value 속성 사용
const refDoubleCount = computed(() => refCount.value * 2);

// reactive() 반응형 데이터를 활용할 때는 value 속성이 필요 없음
const reactiveDoubleCount = computed(() => reactiveCount * 2);

// computed로 계산된 값(데이터)를 출력할 때는 value 사용함.
console.log(refDoubleCount.value);
console.log(reactiveDoubleCount.value);
</script>
<template>
  <h1>refDoubleCount: {{ refDoubleCount }}</h1>
  <h1>reactiveDoubleCount: {{ reactiveDoubleCount }}</h1>
</template>
