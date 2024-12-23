<script setup lang="ts">
import Card from '@/components/Card.vue';
</script>

<template>
  <section class="py-4">
      <div class="container">
        <div class="grid-temp">
          <Card bg="#f5f5f5" bgBtn="black"/>
          <Card bg="#97DEC1" bgBtn="green" :addJob="true"/>
         
        </div>
      </div>
    </section>
</template>

<style lang="scss" scoped>

.grid-temp {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-gap: 1rem;
}
</style>