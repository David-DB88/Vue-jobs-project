<script setup lang="ts">
defineProps<{
    bg: string,
    bgBtn: string,
    addJob?: boolean
}>()
</script>

<template>
  <div class="card" :style="{backgroundColor: `${bg}`}">
        <h2 class="text-2xl font-bold">For Developers</h2>
            <p>
            Browse our Vue jobs and start your career today
            </p>
                <RouterLink
                :style="{backgroundColor: `${bgBtn}`}"
                :to="addJob ? '/job/add': '/jobs' "
                class="card__btn"
                    >
                {{addJob ? 'Add Job': 'Browse Jobs'}}
                </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
.card {
    padding: 2rem;
    box-shadow: .2rem .3rem .2rem .2rem gray;
    p {
        margin-bottom: 2rem;
    }
    &__btn {
        &:link,
        &:visited {
            display: inline-block;
            color: white;
            border-radius: .4rem;
            padding: .7rem 1rem;
            text-decoration: none
        };
        &:hover,
        &:active {
            cursor: pointer;
            opacity: .9;
        }
    }
}
</style>