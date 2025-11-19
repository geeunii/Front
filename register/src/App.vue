<script setup>
import { ref, computed, watch } from 'vue';

// === 1. 상태 (Data) 정의 ===
const name = ref('');
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');

// 에러 메시지 상태 정의
const nameError = ref('');
const emailError = ref('');
const passwordError = ref('');
const notMatchMsg = ref('');

// === 2. 유효성 검사 (Computed) ===
// 💡 개별 유효성 검사 속성 (Computed는 .value로 접근)
const isNameValid = computed(() => name.value.length >= 2);
const isEmailValid = computed(() => email.value.includes('@'));
const isPasswordValid = computed(() => password.value.length >= 8);

const isPasswordConfirmed = computed(
  () => password.value === passwordConfirm.value && password.value.length > 0
);

// 💡 전체 폼 유효성 여부 (isValid) 계산
const isValid = computed(() => {
  return (
    isNameValid.value &&
    isEmailValid.value &&
    isPasswordValid.value &&
    isPasswordConfirmed.value
  );
});

// === 3. 비밀번호 일치 감시 (Watch) 로직 ===
// 💡 watch 함수를 사용하여 password와 passwordConfirm의 변경을 감시
const checkPasswordMatch = () => {
  if (password.value.length > 0 && passwordConfirm.value.length > 0) {
    if (password.value !== passwordConfirm.value) {
      notMatchMsg.value = '비밀번호가 일치하지 않습니다.';
    } else {
      notMatchMsg.value = '';
    }
  } else if (passwordConfirm.value.length > 0 && password.value.length === 0) {
    notMatchMsg.value = '비밀번호를 먼저 입력하세요.';
  } else {
    notMatchMsg.value = '';
  }
};

// password와 passwordConfirm이 변경될 때마다 checkPasswordMatch 실행
watch([password, passwordConfirm], checkPasswordMatch);

// === 4. 메서드 (Logic) 정의 ===
const resetForm = () => {
  name.value = '';
  email.value = '';
  password.value = '';
  passwordConfirm.value = '';

  // 에러 상태 초기화
  nameError.value = '';
  emailError.value = '';
  passwordError.value = '';
  notMatchMsg.value = '';
};

const handleSubmit = () => {
  // 폼 전체 유효성 검사 (computed 속성을 .value로 접근)
  if (!isValid.value) {
    alert('입력 조건을 확인해 주세요.');
    return;
  }

  // 모든 입력값을 alert으로 출력
  alert(
    `가입 성공!\n이름: ${name.value}\n이메일: ${email.value}\n비밀번호: ${password.value}`
  );

  // 폼 초기화
  resetForm();
};

// 💡 Blur 이벤트 핸들러 정의 (Options API의 @blur 로직 대체)
const handleBlur = (field) => {
  if (field === 'name') {
    nameError.value = isNameValid.value
      ? ''
      : '이름은 2글자 이상이어야 합니다.';
  } else if (field === 'email') {
    emailError.value = isEmailValid.value ? '' : '@를 포함해야 합니다.';
  } else if (field === 'password') {
    passwordError.value = isPasswordValid.value
      ? ''
      : '비밀번호는 8자 이상이어야 합니다.';
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label for="regName">
      이름:
      <input
        type="text"
        id="regName"
        v-model="name"
        @blur="handleBlur('name')"
        required
      />
    </label>
    <p v-if="nameError" class="error">{{ nameError }}</p>

    <label for="regEmail">
      이메일:
      <input
        type="text"
        id="regEmail"
        v-model="email"
        @blur="handleBlur('email')"
        required
      />
    </label>
    <p v-if="emailError" class="error">{{ emailError }}</p>

    <label for="regPwd">
      비밀번호:
      <input
        type="password"
        id="regPwd"
        v-model="password"
        @blur="handleBlur('password')"
        required
      />
    </label>
    <p v-if="passwordError" class="error">{{ passwordError }}</p>

    <label for="regPwdConfirm">
      비밀번호확인:
      <input
        type="password"
        id="regPwdConfirm"
        v-model="passwordConfirm"
        required
      />
    </label>
    <p v-if="notMatchMsg" class="error">{{ notMatchMsg }}</p>

    <button type="submit" :disabled="!isValid">가입하기</button>
  </form>
</template>

<style>
.error {
  color: red; /* 에러 메시지 출력 */
  font-size: 0.8em;
  margin-bottom: 10px;
}
</style>
