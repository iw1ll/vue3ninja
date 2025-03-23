<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import MemoryCard from './components/MemoryCard.vue'
import { symbols } from './components/symbols'
import { shuffleCards } from './components/shuffleCards.ts';

const cards = ref([]);
const moves = ref(0);
const totalPairs = symbols.length * 2;
const matchedCards = ref(new Set<number>());
const openedCards = ref(new Set<number>());
const matches = computed(() => matchedCards.value.size);
const isGameWon = computed(() => matches.value === totalPairs);

function resetGame() {
  moves.value = 0;
  openedCards.value.clear()
  matchedCards.value.clear();

  cards.value = shuffleCards([...symbols, ...symbols]);
}

function openCard(index: any) {
  moves.value += 1;
  openedCards.value.add(index);
}

function getStatus(index: any) {
  if (openedCards.value.has(index)) {
    return "opened";
  }

  if (matchedCards.value.has(index)) {
    return "matched";
  }

  return "closed";
}

const CLOSE_TIMEOUT = 1000;
const hasTwoCardsOpened = computed(() => openedCards.value.size === 2);
watch(hasTwoCardsOpened, (areTwoCardsOpened) => {
  if (!areTwoCardsOpened) {
    return;
  }

  setTimeout(() => {
    openedCards.value.clear()
  }, CLOSE_TIMEOUT);

  const [firstIndex, secondIndex] = [...openedCards.value.values()];
  if (cards.value[firstIndex].name === cards.value[secondIndex].name) {
    matchedCards.value.add(firstIndex);
    matchedCards.value.add(secondIndex);
  }
});


resetGame();

</script>

<template>
  <div id="app">
    <h1>Memory Game</h1>

    <div class="game-info">
      <div>Moves: {{ moves }}</div>
      <div>Matches: {{ matches }} / {{ totalPairs }}</div>
    </div>

    <div class="board">
      <memory-card 
        v-for="(card, index) in cards" 
        :key="index" 
        :status="getStatus(index)" 
        :disabled="hasTwoCardsOpened"
        :image="card.image" 
        @click="openCard(index)"
      />
    </div>

    <button @click="resetGame">New Game</button>

    <div v-if="isGameWon" class="win-message">
      Congratulations! You won in {{ moves }} moves!
    </div>
  </div>
</template>

<style>
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: "Arial", sans-serif;
        background-color: #f4f7f9;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        padding: 20px;
      }

      #app {
        width: 100%;
        max-width: 800px;
        text-align: center;
      }

      h1 {
        color: #2c3e50;
        margin-bottom: 20px;
      }

      .game-info {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
      }

      .game-info div {
        font-size: 1.2rem;
        font-weight: bold;
        color: #34495e;
      }

      .board {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 15px;
        margin: 0 auto;
      }

      

      button {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #3498db;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      button:hover {
        background-color: #2980b9;
      }

      .win-message {
        margin-top: 20px;
        font-size: 1.5rem;
        color: #27ae60;
        font-weight: bold;
      }

      @media (max-width: 600px) {
        .board {
          grid-template-columns: repeat(3, 1fr);
        }
        .card {
          height: 100px;
        }
      }
</style>