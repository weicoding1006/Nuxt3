<template>
    <div class="border border-black p-3">
        <p>{{ id }}</p>
        <p>{{ title }}</p>
        <p>{{ price }}</p>
        <Button @click="$emit('log')">按鈕</Button>
    </div>
</template>

<script setup>
defineProps(['id', 'title', 'price']);
defineEmits(['log']);
</script>