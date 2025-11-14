<script setup lang="ts">
import type {NavigationMenuItem} from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'AnyDeck',
    to: '/anydeck'
  },
  {
    label: 'Buy',
    to: 'https://www.thegamecrafter.com/games/anydeck',
    target: '_blank'
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
<!--      <ul class="flex space-x-10 text-xl items-center">-->
<!--        <li>-->
<!--          <NuxtLink to="/anydeck">AnyDeck</NuxtLink>-->
<!--        </li>-->
<!--        <li>-->
<!--          <NuxtLink to="/contact">Contact</NuxtLink>-->
<!--        </li>-->
<!--        <li>-->
<!--          <UColorModeButton/>-->
<!--        </li>-->
<!--      </ul>-->
      
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

  <!--  <div class="border-b-1 border-gray-200">-->
  <!--    <header class="container mx-auto flex justify-between items-center pt-3 pb-3">-->
  <!--      <div>-->
  <!--        <NuxtLink to="/">-->
  <!--          <img src="/rds-long-logo.png" alt="RDS logo" class="max-w-xs"/>-->
  <!--        </NuxtLink>-->
  <!--      </div>-->
  <!--      <nav>-->
  <!--        <ul class="flex space-x-10 text-xl">-->
  <!--          <li><NuxtLink to="/anydeck">AnyDeck</NuxtLink></li>-->
  <!--          <li><NuxtLink to="/contact">Contact</NuxtLink></li>-->
  <!--        </ul>-->
  <!--      </nav>-->
  <!--    </header>-->
  <!--  </div>-->
  <!--  -->
  <!--  <div class="container mx-auto">-->
  <!--    <slot/>-->
  <!--  </div>-->

  <!--  <div class="border-t-1 border-gray-200 mt-10">-->
  <!--    <div class="container mx-auto pt-8 pb-8">-->
  <!--      Copyright @ 2025  -->
  <!--    </div>-->
  <!--  </div>-->

</template>

<style scoped></style>
