<script setup>
import { computed, ref } from 'vue';

const searchText = ref('');
const MAX_LENGTH = 10;

const warningMessage = computed(() => {
  if (searchText.value.length > MAX_LENGTH) {
    return `${MAX_LENGTH}자를 초과했습니다!`;
  } else {
    return '';
  }
});
</script>

<template>
  <div>
    <input v-model="searchText" placeholder="검색어 입력" />
    <p v-if="warningMessage">{{ warningMessage }}</p>
  </div>
</template>
