<script setup lang="ts">
defineProps<{
    count? : number
}>();

</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ count }}</h1>
    </div>
</template>