<script setup>
import { computed, ref } from 'vue';

// 템플릿 Ref를 위한 변수
const inputRef = ref(null);

// 입력 값을 위한 반응형 변수
const inputValue = ref('');

const buttonClick = () => {
  if (inputRef.value) {
    inputRef.value.focus();
  }

  alert(`현재 입력 값: ${inputValue.value}`);
};
</script>

<template>
  <div>
    <input v-model="inputValue" ref="inputRef" placeholder="여기에 입력하시오"></input>
    <button @click="buttonClick">포커스 이동 및 값</button>
  </div>
</template>