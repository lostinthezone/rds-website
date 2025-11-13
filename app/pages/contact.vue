<script setup lang="ts">
useTrackEvent("contact_event", {
  when: new Date().toUTCString(),
  page: 'contact'
});

useHead({
  title: 'Really Digital Stuff - Contact',
  meta: [
    {name: 'description', content: 'Contact Really Digital Stuff'}
  ]
})
</script>

<template>
  <div class="pt-8">
    <div class="flex content-center justify-center">
      <div class="flex flex-col items-center">
        <img src="/liame.png" alt="Anydeck logo" class="max-w-56"/>

        <div class="pt-2">
          reallydigitalstuff at gmail dot com
        </div>        
      </div>

    </div>
  </div>
</template>

<style scoped></style>
