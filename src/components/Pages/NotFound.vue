<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

</script>

<template>
    <section class="not-found">
      <i class="pi pi-exclamation-triangle not-found__icon"></i>
        <h1 class="not-found__title">404 Not Found</h1>
          <p class="not-found__paragraph">This page does not exist</p>
            <RouterLink
                :to="{}"
                @click="router.back()"
                class="not-found__btn"
                >Go Back
            </RouterLink>
    </section>
</template>

<style lang="scss" scoped>
.not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10rem;
    &__icon {
        color: yellow;
        font-size: 10rem;
    }
    &__title {
        font-size: 5rem;
        font-weight: 700;
    }
    &__paragraph {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    &__btn {
        &:link,
        &:visited {
            background-color: green;
            text-decoration: none;
            padding: .5rem 1rem;
            border-radius: .5rem;
            color: white
        };
        &:hover,
        &:active {
            background-color: rgb(22, 170, 22)
        }
    }
}
</style>