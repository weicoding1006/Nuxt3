<template>
    <div class="flex justify-center items-center h-screen">
        <div class="border border-black p-3 w-96">
            <h1 class="text-3xl mb-2">登入</h1>
            <div class="flex items-center gap-2 my-3">
                <label for="account" class=" text-lg">帳號:</label>
                <input v-model="account" id="account" type="text" class="border border-black p-2 flex-1" />
            </div>

            <div class="flex items-center gap-2 my-3">
                <label for="password" class=" text-lg">密碼:</label>
                <input v-model="password" id="password" type="password" class="border border-black p-2 flex-1" />
            </div>

            <div class=" flex gap-2">
                <button @click="login" class="bg-blue-600 text-white px-3 py-1 rounded">登入</button>
                <button class="bg-gray-700 text-white px-3 py-1 rounded">註冊</button>
            </div>
        </div>
    </div>

</template>

<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter();
const config = useRuntimeConfig();
const apiUrl = config.public.apiBaseUrl
const account = ref('');
const password = ref('');

async function login() {
    let userInput = {
        account: account.value,
        password: password.value
    };

    try {
        const res = await axios.post(apiUrl + `Login`, userInput);
        const { token } = res.data;
        const expirationTime = new Date().getTime() + 300000 //300秒後過期
        // 將 token 存儲在 localStorage 中
        localStorage.setItem('token', token)
        localStorage.setItem('token_expiration',expirationTime);
        alert("登入成功")
        router.push("/")
    } catch (err) {
        console.log(err);
    }
};
//登入頁面不用Layout
definePageMeta({
    layout: false
})
</script>