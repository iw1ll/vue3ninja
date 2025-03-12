<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
const data = ref<Post | null>(null);
const isLoading = ref(false);
const error = ref('');
const msg = ref('Hello');
const maxClicks = 100;

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

const handleClick = () => {
  if (count.value >= maxClicks) {
    alert('Достигнут лимит кликов!');
    return;
  }

  count.value++;
  console.log(`Кликов: ${count.value}`);

  if (count.value % 2 === 0) {
    document.title = `Четный клик: ${count.value}`;
  }
};

const fetchData = async () => {
  try {
    isLoading.value = true;
    error.value = '';

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    data.value = await response.json() as Post;
  } catch (err: unknown) {
    if (err instanceof Error) {
      error.value = `Ошибка: ${err.message}`;
      console.error(err);
    } else {
      error.value = 'Неизвестная ошибка';
    }
  } finally {
    isLoading.value = false;
  }
};

setInterval(() => {
  count.value++;
}, 1000);
</script>

<template>
  <div class="test-container">
    <h1>Vue 3 Works! 🎉</h1>
    <button @click="handleClick">Click {{ count }} раз</button>
    <div
      class="color-box"
      v-bind:style="{ backgroundColor: `hsl(${count * 100}, 70%, 50%)` }"
    ></div>

    <span>Message: {{ msg }}</span>
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
