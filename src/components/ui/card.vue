<script setup lang="ts">
import axios from 'axios'
import type { Character } from '@/types/models'

const props = defineProps<{ item: Character }>()

function getCharacterStatusColor(status: string) {
  switch (status) {
    case 'Alive':
      return 'green'
    case 'Dead':
      return 'red'
    default:
      return 'gray'
  }
}

const episode = ref()

async function fetchFirstEpisode(episod: string) {
  const response = await axios.get(episod)
  episode.value = response.data.name
}

fetchFirstEpisode(props.item.episode[0])
</script>

<template>
  <div class="card">
    <div class="card-img">
      <img :src="item.image" alt="">
    </div>
    <div class="card-body">
      <div class="card-body__title">
        <h2>{{ item.name }}</h2>
        <span>
          <span
            class="status"
            :style="{
              backgroundColor: getCharacterStatusColor(item.status),
            }"
          />
          <span class="footnote">{{ item.status }} - {{ item.species }}</span>
        </span>
      </div>
      <span class="section">
        <span class="footnote text-gray">
          Last known location:
        </span>
        <span class="body">{{ item.location.name }}</span>
      </span>
      <span class="section">
        <span class="footnote text-gray">
          First seen in:
        </span>
        <span class="body">{{ episode }}</span>
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 600px;
  height: 220px;
  overflow: hidden;
  background: rgb(48, 52, 54);
  border-radius: 0.5rem;
  display: flex;

  &-img {
    width: 230px;
    object-fit: cover;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &-body {
    flex: 3 1 0%;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    color: #fff;
  }

  .section {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
  }
}

.status {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin-right: 0.375rem;
  background: rgb(158, 158, 158);
}
</style>
