<script setup lang="ts">
import CardGrid from '@/components/home/card-grid.vue'

import { useCharacterListStore } from '@/stores/character'

const store = useCharacterListStore()

store.fetchCharacterList()
</script>

<template>
  <main class="container">
    <CardGrid />
  </main>
</template>

<style scoped lang="scss">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
</style>
