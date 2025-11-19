<script setup="setup">
import { computed, ref, reactive } from 'vue';

const refCount = ref(0);
const reactiveCount = reactive({ count: 0 });

// ref() 반응형 데이터를 활용할 때는 value 속성 사용
const refDoubleCount = computed(() => refCount.value * 2);

// reactive() 반응형 데이터를 활용할 때는 value 속성이 필요 없음
const reactiveDoubleCount = computed(() => reactiveCount.count * 2);

setTimeout(() => {
  refCount.value = 10;
  reactiveCount.count = 20;
}, 1000);
</script>

<template>
  <h1>refDoubleCount: {{ refDoubleCount }}</h1>
  <h1>reactiveDoubleCount: {{ reactiveDoubleCount }}</h1>
</template>
