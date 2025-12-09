
<script setup lang="ts">

const title = 'Really Digital Stuff - Shirts'
const description = 'Retro influenced shirt designs.'
const image = '/spin-small.png'

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

</script>

<template>
  <div class="flex flex-col pt-8 pb-20">
    <div class="flex content-center justify-center">
      <img src="/spin-small.png" alt="Spin shirt" class="max-w-lg h-auto w-full"/>
    </div>
    
    <span class="text-2xl pt-8">Shirts</span>
    <span>Available @ <a target="_blank" href="https://www.redbubble.com/people/reallydigital/shop?asc=u">Redbubble</a>.</span>
  </div>
</template>