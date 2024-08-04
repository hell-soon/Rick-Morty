<script setup lang="ts">
interface Props {
  id: number
  name: string
  image: string
}

defineProps<{
  item: Props
}>()
</script>

<template>
  <router-link :to="`/character/${item.id}`" class="card">
    <div class="card-img">
      <img :src="item.image" :alt="item.name">
    </div>
    <div class="card-body">
      <h2>{{ item.name }}</h2>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
.card {
  width: 300px;
  height: 400px;
  overflow: hidden;
  background: rgb(48, 52, 54);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;

  &-img {
    width: 300px;
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
    text-align: center;
    justify-content: center;
  }
}
</style>
