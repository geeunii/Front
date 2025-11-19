<script>
    export default {
        data() {
            // return {      fruits: ['banana', 'orange', 'apple'] };

            return {
                // gender: 'male', selectTime: 'cafeLatte',
                uid: '',
                upw: ''
            };
        },

        methods: {
            login() {
                console.log(`id: ${this.uid}`);
                console.log(`pwd: ${this.upw}`);
            },
            printData() {
                console.log(`id: ${this.uid}`);
                console.log(`pwd: ${this.upw}`);
            }
        }
    };
</script>

<template>
    <form id="loginForm">
        <label for="uid">아이디:
            <input type="text" id="uid" v-model="uid"></input>
            {{ uid }}
        </label>
        <label for="upw">비밀번호:
            <input type="text" id="upw" v-model="upw"></input>
        </label>
        <button type="button" @click="login">로그인</button>

        <!-- <textarea v-model="message"></textarea> <button type="button"
        @click="printData">데이터 출력</button> -->

        <!-- <label for="banana"> <input type="checkbox" id="banana" v-model="fruits"
        value="banana">바나나</input> </label> <label for="orange"> <input type="checkbox"
        id="orange" v-model="fruits" value="orange">오렌지</input> </label> <label
        for="apple"> <input type="checkbox" id="apple" v-model="fruits"
        value="apple">사과</input> </label> <button type="button"
        @click="printData">확인</button> <label for="male"> <input type="radio"
        id="gender" v-model="gender" value="male">남자</input> </label> <label
        for="female"> <input type="radio" id="gender" v-model="gender"
        value="female">여자</input> </label> <button type="button"
        @click="printData">확인</button> -->

        <!-- 콤보박스의 요소가 사용자가 선택한 option 태그의 value 속성의 값이 v-model 연결된 selectTime 데이터와 자동연결
        -->
        <!-- <select v-model="selectTime"> <option value="americano">아메리카노</option>
        <option value="cafeLatte">카페라떼</option> <option value="espresso">에스프레소</option>
        </select> -->

        <!-- <button type="button" @click="printData">확인</button> -->
    </form>
</template>
<style></style>