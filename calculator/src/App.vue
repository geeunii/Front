<script>
// 데이터 바인딩과 이벤트 연결하기
export default {
  data() {
    return {
      output: null, // 출력 칸에 표시되어 사용자에게 보여지는 값
      prev: null, // 이전에 입력된 값 또는 연산 결과를 저장하는 데이터 영역
      cur: null, // 현재 입력된 값을 저장하는 데이터 영역
      operator: null, // 연산자
      operationActions: {
        '+': (n1, n2) => n1 + n2,
        '-': (n1, n2) => n1 - n2,
        '*': (n1, n2) => n1 * n2,
        '/': (n1, n2) => n1 / n2,
      },
    };
  },

  methods: {
    clear() {
      this.output = null;
      this.prev = null;
      this.cur = null;
      this.operator = null;
    },

    calculator(n) {},

    userInput(n) {
      if (this.cur === null || this.cur === '0') {
        // 0이거나 초기 상태일 때, 소수점 입력이 아니라면 n으로 초기화
        if (n !== '.') {
          this.cur = n;
        } else {
          // 소수점 입력시 . 붙여서 시작
          this.cur = '0.';
        }
      } else if (n === '.' && this.cur.includes('.')) {
        // 이미 소수점이 있다면 무시
        return;
      } else {
        this.cur += n;
      }

      this.output = this.cur;
    },

    operation(event) {
      const n = event.currentTarget.value;

      if (n === 'C') {
        this.clear();
      } else if (['+', '-', '/', '=', '*'].includes(n)) {
        this.calculator(n);
      } else {
        this.userInput(n); // 사용자가 입력한 숫자 저장 함수 호출
      }

      this.cur = this.cur === null ? number : (this.cur += number);
      this.output = this.cur;
    },
  },
};
</script>

<template>
  <div class="calculator">
    <form name="forms">
      <input v-model="output" type="text" name="output" readonly="readonly" />
      <input type="button" class="clear" value="C" @click="operation" />
      <input type="button" class="operator" value="/" @click="operation" />
      <input type="button" value="1" @click="operation" />
      <input type="button" value="2" @click="operation" />
      <input type="button" value="3" @click="operation" />
      <input type="button" class="operator" value="*" @click="operation" />
      <input type="button" value="4" @click="operation" />
      <input type="button" value="5" @click="operation" />
      <input type="button" value="6" @click="operation" />
      <input type="button" class="operator" value="+" @click="operation" />
      <input type="button" value="7" @click="operation" />
      <input type="button" value="8" @click="operation" />
      <input type="button" value="9" @click="operation" />
      <input type="button" class="operator" value="-" @click="operation" />
      <input type="button" class="dot" value="." @click="operation" />
      <input type="button" value="0" @click="operation" />
      <input
        type="button"
        class="operator result"
        value="="
        @click="operation"
      />
    </form>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  width: 287px;
  border: 1px solid #333;
  background-color: #ccc;
  padding: 5px;
}

.calculator form {
  display: grid;
  grid-template-columns: repeat(4, 65px);
  grid-auto-rows: 65px;
  grid-gap: 5px;
}

.calculator form input {
  border: 2px solid #333;
  cursor: pointer;
  font-size: 19px;
}

.calculator form input:hover {
  box-shadow: 1px 1px 2px #333;
}

.calculator form .clear {
  background-color: #ed4848;
}

.calculator form .operator {
  background-color: orange;
}

.calculator form .dot {
  background-color: green;
}

.calculator form input[type='text'] {
  grid-column: span 4;
  text-align: right;
  padding: 0 10px;
}

.calculator form .clear {
  grid-column: span 3;
}

.calculator form .result {
  grid-column: span 2;
}
</style>
