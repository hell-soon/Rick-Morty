<script setup lang="ts">
import { useCharacterListStore } from '@/stores/character'

const store = useCharacterListStore()
</script>

<template>
  <div class="card-grid">
    <slot name="contant" />
  </div>

  <vue-awesome-paginate
    v-model="store.params.page"
    :total-items="store.res?.info.count"
    :items-per-page="20"
    :max-pages-shown="5"
  />
</template>

<style scoped lang="scss">
.card-grid {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
