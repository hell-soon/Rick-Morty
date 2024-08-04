<script setup lang="ts">
import CardGrid from '@/components/shared/card-grid.vue'
import card from '@/components/ui/card.vue'

import { useCharacterListStore } from '@/stores/character'

const store = useCharacterListStore()
</script>

<template>
  <CardGrid>
    <template #contant>
      <card
        v-for="item in store.characterList"
        :key="item.id"
        links="character"
        :item="item"
      />
    </template>
  </CardGrid>
</template>
