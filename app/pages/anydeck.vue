<script setup lang="ts">

const title = 'Really Digital Stuff - AnyDeck'
const description = 'AnyDeck is a generic deck of numbered cards for playing a variety of different card games.'
const image = '/logo-combined.png'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: image,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image
})

useHead({
  title: title,
  meta: [
    { name: 'description', content: description }
  ]
})

onMounted(() => {
  useTrackEvent("anydeck_event", {
    when: new Date().toUTCString(),
    page: 'anydeck'
  });
})

interface CardGame {
  name: string;
  bgg: string;
  year: string;
  minPlayers: string;
  maxPlayers: string;
  components: string[];
  extraComponents: string[];
  deck: string;
}

import jsonData from "~/assets/data/cards.json";
const cardGames = jsonData as CardGame[];

const searchValue = ref<string>("");

const filteredList = computed(() => {
  return cardGames
      .filter(game => game.name.toLowerCase().includes(searchValue.value.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));
});

</script>

<template>
  <div class="flex flex-col pt-5 pb-20">
    <div class="flex content-center justify-center">
      <img src="/logo-combined.png" alt="Anydeck logo" class="max-w-lg h-auto w-full"/>
    </div>

    <div class="flex flex-col">
      <p class="mt-5">AnyDeck is a generic deck of numbered cards for playing a variety of different card games. The
        deck
        consists of 8 coloured suits with cards numbered 0 to 15 with 4 of those suits including the numbers -3, -2 and
        -1 and another 0 card for a total of a 144 cards.</p>
      <br/>
      <p>Available using print on demand @ <a target="_blank" href="https://www.thegamecrafter.com/games/anydeck">The Game Crafter</a> and <a target="_blank" href="https://www.makeplayingcards.com/sell/reallydigitalstuff">Make
        Playing Cards</a>.</p>
      
      <h3 class="text-3xl font-bold dark:text-white mb-5 mt-5">Games playable using AnyDeck</h3>

      <p>The following are some of the games playable using AnyDeck.</p>

      <div class="mt-4 max-w-2xl">
        <UInput v-model="searchValue" icon="i-lucide-search" size="xl" variant="outline" placeholder="Search by name"/>
      </div>
      
      <p class="pt-8" v-if="filteredList.length == 0">No matches found</p>

      <p class="pt-8" v-if="filteredList.length > 0">{{ filteredList.length }} matches found</p>
      
      <div class="flex-col gap-4">
      <UCard v-for="game in filteredList" :key="game.name" class="mt-4 max-w-2xl">
        
        <template #header>
          <ULink target="_blank" :to="game.bgg" external>
            <span class="text-xl">{{ game.name }} ({{ game.year }})</span>
            <UIcon name="ic:baseline-launch" size="16" class="ml-2"></UIcon>
          </ULink>
        </template>
        
        <div class="flex">
          <div>
            <table class="table-auto border-separate border-spacing-2">
              <tbody>
              <tr>
                <td>Players</td>
                <td>{{ game.minPlayers }} - {{ game.maxPlayers }}</td>
              </tr>
              <tr>
                <td class="align-top">Components</td>
                <td>
                  <ul class="flex-col">
                    <li v-for="(item) in game.components">
                      {{ item }}
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td class="align-top">Extra Components</td>
                <td class="align-top">
                  <ul class="flex-col">
                    <li v-for="(item) in game.extraComponents">
                      {{ item }}
                    </li>
                  </ul>
                </td>
              </tr>
              </tbody>
            </table>            
          </div>
        </div>
      </UCard>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
