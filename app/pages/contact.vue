<script setup lang="ts">

const title = 'Really Digital Stuff - Contact';
const description = 'Contact details for Really Digital Stuff';

useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description
})

useHead({
  title: title,
  meta: [
    {
      name: 'description', content: description
    }
  ]
})

onMounted(() => {
  useTrackEvent("contact_event", {
    when: new Date().toUTCString(),
    page: 'contact'
  });  
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
