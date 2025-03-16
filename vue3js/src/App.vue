<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue';
import { ref } from 'vue';

const SIZE = 60;

const randomValue = ref<number>(0);
const a = ref<string>('a');

const colors = ref([
    { r: 255, g: 0, b: 0 },
    { r: 0, g: 255, b: 0 },
    { r: 0, g: 0, b: 255 },
]);

function addColor() {
    colors.value.push({
        r: Math.random() * 255,
        g: Math.random() * 255,
        b: Math.random() * 255,
    });
};

function resetColors() {
    colors.value = [];
};

function shuffle(arr: any) {
    return arr.toSorted(() => (Math.random() < .5 ? 1 : -1));
}

function shuffleColors() {
    colors.value = shuffle(colors.value);
};

function randomNum() {
    randomValue.value =  Math.floor(Math.random() * 100);
    a.value = a.value + ' kek';
}


</script>

<template>
    <header>
        <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
          
            <HelloWorld msg="You did it!" />

            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div> -->
    </header>
    <div id="colors">
        <div class="color" v-for="(c, i) in colors" :style="{
            backgroundColor: `rgb(${c.r}, ${c.g}, ${c.b})`,
            borderColor: `rgb(${c.r * 0.8}, ${c.g * 0.8}, ${c.b * 0.8})`,
            transform: `translateX(${SIZE * i}px)`
        }" :key="`rgb(${c.r}, ${c.g}, ${c.b})`"></div>

    </div>
    <input placeholder="a" v-model="a"/>
    <button id="add" v-if="colors.length < 5" @click="addColor">Add</button>
    <button id="reset" @click="resetColors">Reset</button>
    <button id="shuffle" @click="shuffleColors">Shuffle</button>
    <button @click="randomNum">{{ randomValue }}</button>
    <!-- <RouterView /> -->
</template>

<style scoped>
#colors {
  border: solid lightblue 1px;
  height: 60px;
  position: relative;
  margin-bottom: 5px;
}

.color {
  top: 0;
  left: 0;
  box-sizing: border-box;
  border-style: solid;
  border-width: 4px;
  display: inline-block;
  height: 60px;
  width: 60px;
  border-radius: 5px;

  position: relative;
  transition: all 0.5s;
}

.app-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
