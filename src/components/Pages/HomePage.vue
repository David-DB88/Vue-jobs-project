<script setup lang="ts">
import Hero from '@/components/Hero.vue';
import HeroCards from '@/components/HeroCards.vue';
import JobListings from '@/components/JobListings.vue';
import { ref } from 'vue'

const title = ref('Become a Vue Dev')
const paragraph = ref('Find the Vue job that fits your skills and needs')
const limit = ref(3)
</script>

<template>
  <Hero :title="title" :paragraph="paragraph" />
  <HeroCards />
  <JobListings :limit/>
</template>

<style lang="scss" scoped>

</style>