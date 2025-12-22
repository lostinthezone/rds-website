
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

onMounted(() => {
  useTrackEvent("shirts_event", {
    when: new Date().toUTCString(),
    page: 'shirts'
  });
})

</script>

<template>
  <div class="flex flex-col pt-5 pb-20">
    <div class="flex content-center justify-center">
      <img src="/spin-small.png" alt="Spin shirt" class="max-w-lg h-auto w-full"/>
    </div>
    
    <h3 class="text-3xl font-bold dark:text-white mb-5 mt-5">Shirts</h3>
    <p>Available @ <a target="_blank" href="https://www.redbubble.com/people/reallydigital/shop?asc=u">Redbubble</a>.</p>
  </div>
</template>