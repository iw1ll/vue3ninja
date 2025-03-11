<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template> -->


<script setup>
import { ref } from 'vue'

const count = ref(0)
const data = ref(null)
const isLoading = ref(false)
const error = ref(null)

const maxClicks = 5

const handleClick = () => {
  if (count.value >= maxClicks) {
    alert('Достигнут лимит кликов!')
    return
  }
  
  count.value++
  console.log(`Кликов: ${count.value}`)
  
  if (count.value % 2 === 0) {
    document.title = `Четный клик: ${count.value}`
  }
}

const fetchData = async () => {
  try {
    isLoading.value = true
    error.value = null
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    
    data.value = await response.json()
  } catch (err) {
    error.value = `Ошибка: ${err.message}`
    console.error(err);
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="test-container">
    <h1>Vue 3 Works! 🎉</h1>
    <button @click="handleClick">Click {{ count }} раз</button>    
    <div 
      class="color-box" 
      v-bind:style="{ backgroundColor: `hsl(${count * 100}, 70%, 50%)` }"
    ></div>
  </div>

  <div>
    <button @click="fetchData">Загрузить данные</button>
    
    <div v-if="isLoading">Загрузка...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="data">
      <h3>{{ data.title }}</h3>
      <p>{{ data.body }}</p>
    </div>
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