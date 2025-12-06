<template>
  <UApp>
<!--    -->
    <NuxtLayout name="app-layout">
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<script setup lang="ts">
useHead({
  title: 'Really Digital Stuff',
  meta: [
    { name: 'description', content: 'Really Digital Stuff web site.' }
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
    }
  ]
});
</script>