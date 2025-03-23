


<script setup lang="ts">

  import jsonData from 'public/cards.json';
  const data = useState(() => jsonData);
  
</script>

<template>
  <div class="flex flex-col p-8">

    <div class="flex content-center justify-center">
      <img src="/anydeck-logo.png" alt="Anydeck logo" class="max-w-xs" />
    </div>    
    
    <div class="flex flex-col">

      <p class="mt-5">AnyDeck is a generic deck of numbered cards for playing a variety of different card games. The deck 
      consists of 8 suits with cards numbered 0-15 with 4 of those suits including numbers -3, -2 and -1.</p>
      <br/>
      <p>Available using print on demand @ <a href="https://www.makeplayingcards.com/sell/reallydigitalstuff">Make Playing Cards</a>.</p>
      
      <h3 class="text-3xl font-bold dark:text-white mb-5 mt-5">Games playable using Anydeck</h3>
      
      <p>The following are some of the games playable using AnyDeck.</p>
      
      <UCard v-for="(game) in data" class="mt-5">
        {{ game.name }} ({{game.year}})
        
        <table class="table-auto border-separate border-spacing-2 border border-gray-200 dark:border-gray-500">
          <tbody>
            <tr>
              <td>BGG</td><td><a target="_blank" :href="game.bgg">Link</a></td>
            </tr>            
            <tr>
              <td>Players</td><td>{{ game.minPlayers }} - {{ game.maxPlayers }}</td>
            </tr>
            <tr>
              <td>Deck</td><td>{{ game.deck }}</td>
            </tr>
            <tr>
              <td>Components</td><td></td>    
            </tr>
          
          
          </tbody>
        </table>
      </UCard>
    </div>
    
  </div>
</template>

<style scoped></style>
