<template>
    <div className="flex">
        <div v-for="user in users" :key="user.id"> 
            <p>
                <strong>{{user.first_name}}</strong>
            </p>
            <p>{{user.email}}</p>
            <img :key="user.avatar" :src="user.avatar" />
        </div>
        <br><br><br><br>
        <div>
            <input v-model="login.email" placeholder="email 입력" id="email" >
        </div>
        <div>
            <input v-model="login.password" placeholder="비밀번호 입력" id="pw">
        </div>
        <button type="button" @click="onLogin">로그인</button>
        <br><br><br><br><br>
        <h2>Axios 사용법</h2>
        <img alt="Vue logo" src="../assets/axios1.png" style="margin-bottom: 5rem;" height="4000px">
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            users: [], 
            login: {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka'
            }
        }
    },
    methods: {
        axios1() {
            axios.get('https://reqres.in/api/users').then(res => {
                this.users = res.data.data
            })
        },
        onLogin() {
            axios.post('https://reqres.in/api/login', this.login).then(res => {
                console.log(res)
            })
        }
    },
    created() {
        this.axios1()
    }
}
</script>

<style>

</style>