<script setup>
import Practuce2ChildCom from './Practuce2ChildCom.vue';

const childName = 'Alice';

const handleGreeting = (message) => {
  console.log(message);
};
</script>

<template>
  <div>
    <Practuce2ChildCom :name="childName" @greet="handleGreeting" />
  </div>
</template>
