<script setup lang="ts">
import CardGrid from '@/components/shared/card-grid.vue'
import Default from '@/layouts/default.vue'
import { useLocationListStore } from '@/stores/location'

const store = useLocationListStore()

store.fetchLocationList()
</script>

<template>
  <Default>
    <CardGrid />
  </Default>
</template>
