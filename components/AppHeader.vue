<template>
    <header class="w-full bg-slate-800 py-3">
        <div class=" container mx-auto flex items-center justify-between">
            <h1 class="text-3xl text-white">Nuxt3</h1>
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/">首頁</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>

    </header>
</template>

<script setup>
</script>

<style lang="scss">
@import url('@/assets/css/Header.scss');
</style>