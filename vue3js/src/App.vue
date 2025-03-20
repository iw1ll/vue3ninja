<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue';
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';
import CountNum from './components/CountNum.vue';
import ColorsComponent from './components/icons/ColorsComponent.vue';
const counterStore = useCounterStore();
const count = ref(0);
</script>

<template>
    <div>
        <p>Count: {{ counterStore.count }}</p>
        <p>Double: {{ counterStore.doubleCount }}</p>
        <button @click="counterStore.increment">+1</button>
    </div>
    <header>
        <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        <div class="wrapper">
            <HelloWorld msg="You did it!" />
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div> -->
        <CountNum :count="count"/>
        <ColorsComponent/>
        <br/>
        {{ count }}
        <br/>
        <button @click="count++">+</button>
        <br/>
        <button @click="count--">--</button>
    </header>

</template>

<style scoped>

</style>
