<script setup lang="ts">
import card from '@/components/ui/card.vue'
import { useCharacterListStore } from '@/stores/character'

const store = useCharacterListStore()

function onClickHandler() {
  store.fetchCharacterList(store.params)
}
</script>

<template>
  <div class="card-grid">
    <card
      v-for="item in store.characterList"
      :key="item.id"
      :item="item"
    />
  </div>

  <vue-awesome-paginate
    v-model="store.params.page"
    :total-items="store.res?.info.count"
    :items-per-page="20"
    :max-pages-shown="5"
    @click="onClickHandler"
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
