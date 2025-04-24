<script setup lang="ts">
  useTrackEvent("contact_event", {
    when: new Date().getTimezoneOffset(),
    page: 'contact'
  });

  useHead({
    title: 'Really Digital Stuff - Contact',
    meta: [
      { name: 'description', content: 'Contact Really Digital Stuff' }
    ]
  })  
</script>

<template>
  <div class="pt-8">
    reallydigitalstuff at gmail.com 
  </div>
</template>

<style scoped></style>
