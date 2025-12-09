<script setup lang="ts">
import type {NavigationMenuItem} from '@nuxt/ui'

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'AnyDeck',
    to: '/anydeck'
  },
  {
    label: 'Shirts',
    to: '/shirts'
  },    
  {
    label: 'Contact',
    to: '/contact'
  }])
</script>

<template>
  <UHeader :toggle="true">
    <template #left>
      <NuxtLink to="/">
        <img src="/rds-long-logo.png" alt="RDS logo" class="max-w-xs h-10"/>
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" orientation="horizontal" class="text-xl"/>
    
    <template #right>
      <UColorModeButton/>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical"  />
    </template>
  </UHeader>

  <UMain>
    <UContainer>
      <slot/>
    </UContainer>
  </UMain>

  <UFooter>
    <template #left>
      <span>Copyright @ 2025</span>
    </template>
  </UFooter>
</template>

<style scoped></style>
