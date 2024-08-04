<template>
  <main class="container">
    <slot />
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
