<script setup lang="ts">
</script>

<template>
  <div class="border-b-1 border-gray-200">
    <header class="container mx-auto flex justify-between items-center p-2">
      <div>
        <NuxtLink to="/">
          <img src="/rds-long-logo.png" alt="RDS logo" class="max-w-xs"/>
        </NuxtLink>
      </div>
      <nav>
        <ul class="flex space-x-10 text-xl">
          <li><NuxtLink to="/games">Games</NuxtLink></li>
          <li><NuxtLink to="/anydeck">AnyDeck</NuxtLink></li>
          <li><NuxtLink to="/mixing">Mixing</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </div>
  
  <div class="container mx-auto">
    <slot/>
  </div>
</template>

<style scoped></style>
