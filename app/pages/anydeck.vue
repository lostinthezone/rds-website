<script setup lang="ts">

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

import jsonData from 'public/cards.json';
const cardGames = jsonData as CardGame[];

const list = useState<CardGame[]>(() => cardGames);
const searchValue = useState<string>(() => "");

const filteredList = computed(() => {
  return cardGames.filter(game => game.name.toLowerCase().includes(searchValue.value.toLowerCase()));
});

</script>

<template>
  <div class="flex flex-col pt-8">

    <div class="flex content-center justify-center">
      <img src="/anydeck-logo.png" alt="Anydeck logo" class="max-w-lg"/>
    </div>

    <div class="flex flex-col">

      <p class="mt-5">AnyDeck is a generic deck of numbered cards for playing a variety of different card games. The
        deck
        consists of 8 coloured suits with cards numbered 0 to 15 with 4 of those suits including the numbers -3, -2 and
        -1 and another 0 card.</p>
      <br/>
      <p>Available using print on demand @ <a href="https://www.makeplayingcards.com/sell/reallydigitalstuff">Make
        Playing Cards</a>.</p>

      <h3 class="text-3xl font-bold dark:text-white mb-5 mt-5">Games playable using AnyDeck</h3>

      <p>The following are some of the games playable using AnyDeck.</p>

      <div class="mt-4">
        <UInput v-model="searchValue" icon="i-lucide-search" size="xl" variant="outline" placeholder="Search by name"/>
      </div>
      
      <p class="pt-8" v-if="filteredList.length == 0">No matches found</p>
      
      <UCard v-for="game in filteredList" :key="game.name" class="mt-5">
        <table class="table-auto border-separate border-spacing-2">
          <tbody>
          <tr>
            <td>Name</td>
            <td>
<!--              {{ game.name }} ({{ game.year }})-->
              <ULink target="_blank" :to="game.bgg">{{ game.name }} ({{ game.year }})
              <UIcon name="ic:baseline-launch" size="12"></UIcon>
              </ULink>
            </td>
          </tr>
<!--          <tr>-->
<!--            <td>BGG</td>-->
<!--            <td><a target="_blank" :href="game.bgg">Link</a></td>-->
<!--          </tr>-->
          <tr>
            <td>Players</td>
            <td>{{ game.minPlayers }} - {{ game.maxPlayers }}</td>
          </tr>
          <tr>
            <td>Deck</td>
            <td>{{ game.deck }}</td>
          </tr>
          <tr>
            <td>Components</td>
            <td>
              <ul class="flex-col">
                <li v-for="(item) in game.components">
                  {{ item }}
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Extra Components</td>
            <td>
              <ul class="flex-col">
                <li v-for="(item) in game.extraComponents">
                  {{ item }}
                </li>
              </ul>
            </td>
          </tr>


          </tbody>
        </table>
      </UCard>
    </div>

  </div>
</template>

<style scoped></style>
