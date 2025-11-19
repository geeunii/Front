<script setup>
import { computed, reactive } from 'vue';

const item1 = reactive({ price: 10000, count: 10 });
const item2 = reactive({ price: 20000, count: 20 });

const cart = reactive({ item1, item2 });

const totalPrice = computed(
  () => item1.price * item1.count + item2.price * item2.count
);
</script>

<template>
  <div>
    <h1>장바구니: {{ cart }}</h1>
    <h1>총가격: {{ totalPrice }}</h1>
  </div>
</template>
