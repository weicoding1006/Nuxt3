<template>
    <header class="w-full bg-slate-600">
        <div class="py-2 container mx-auto flex items-center justify-between">
            <h2 class="text-2xl text-white">Logo</h2>
            <nav>
                <ul class="flex items-center gap-3">
                    <li>
                        <NuxtLink to="/" class="text-white">首頁</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="text-white">關於</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/product" class="text-white">產品列表</NuxtLink>
                    </li>
                    <li>
                        <button @click="logout" class="text-white">登出</button>
                    </li>
                    <!-- <li class="text-white">剩餘時間: {{ remainingTime }} 秒</li> -->
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const remainingTime = ref(0);

function updateRemainingTime() {
    const tokenExpiration = localStorage.getItem('token_expiration');
    if (tokenExpiration) {
        const currentTime = new Date().getTime();
        remainingTime.value = Math.max(0, Math.ceil((tokenExpiration - currentTime) / 1000));
    } else {
        remainingTime.value = 0;
    }
};

function logout() {
    const confirmed = window.confirm("確定要登出嗎?");
    if (confirmed) {
        // 移除 localStorage 中的 token
        localStorage.removeItem('token');
        localStorage.removeItem('token_expiration');
        router.push("/login");
    }
}

onMounted(() => {
    updateRemainingTime();
    const interval = setInterval(updateRemainingTime, 1000);

    onUnmounted(() => {
        clearInterval(interval);
    });
});


</script>

<style scoped>
/* 根據需要添加你的樣式 */
</style>