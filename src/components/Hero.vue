
<script setup lang="ts">


defineProps<{
    title: string
    paragraph: string
}>()
</script>

<template>
      <section class="hero">
        <div class="text-center">
          <h1
            class="hero__title"
          >
           {{ title }}
          </h1>
          <p class="hero__paragraph">
           {{ paragraph }}
          </p>
        </div>
    </section>
</template>


<style lang="scss" scoped>
  .hero {
    background: green;
    margin-bottom: .4rem;
    color: white;
    height: 20vh;
   

    &__title {
        font-size: 5rem;
        font-weight: 700;
    }

    &__paragraph {
        font-size: 3rem;
    }
  }
  .text-center {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  /* .title {
    display: inline-block;
  }
  .paragraph {
    display: inline-block;
  }  */
</style>