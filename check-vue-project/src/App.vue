<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="test-container">
    <h1>Vue 3 Works! 🎉</h1>
    <button @click="count++">Clicked {{ count }} times</button>
    
    <div 
      class="color-box" 
      :style="{ backgroundColor: `hsl(${count * 10}, 70%, 50%)` }"
    ></div>
  </div>
</template>

<style>
.test-container {
  text-align: center;
  padding: 2rem;
}

button {
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin: 1rem;
}

.color-box {
  width: 100px;
  height: 100px;
  margin: 20px auto;
  transition: all 0.3s;
}
</style>