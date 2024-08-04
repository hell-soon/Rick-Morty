<script setup lang="ts">
import Contant from '@/components/home/index.vue'
import Default from '@/layouts/default.vue'

import { useCharacterListStore } from '@/stores/character'

const store = useCharacterListStore()

watch(store.params, () => {
  store.fetchCharacterList(store.params)
})

store.fetchCharacterList()
</script>

<template>
  <Default>
    <Contant />
  </Default>
</template>
