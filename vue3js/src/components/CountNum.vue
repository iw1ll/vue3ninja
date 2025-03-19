<script setup lang="ts">
defineProps<{
    count? : number
}>();
function inc() {
//  count++
}
</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ count }}</h1>
        <button @click="inc"></button>
    </div>
</template>