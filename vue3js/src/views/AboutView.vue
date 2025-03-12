<script setup lang="ts">
import CounterComponent from '../components/CounterComponent.vue';
</script>
<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div class="app-container">
            <CounterComponent />
        </div>

    </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
