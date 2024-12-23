<script setup lang="ts">
import JobListing, { type Job } from './JobListing.vue';
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

const state = reactive<{
    jobs: Job[]
    isLoading: boolean
}>({
    jobs: [],
    isLoading: true
})

defineProps<{
    limit?: number
}>()

onMounted(async ()=>{
    
    try {
        const response = await axios.get('/api/jobs')
        state.jobs = response.data
    } catch (error) {
        console.error(error)
    }finally{
        state.isLoading = false
    }
})
</script>



<template>
    <div class="container container-bg">
     <div class="jobs-title">
        Browse Jobs
     </div>
     <div class="jobs-loader">
        <PulseLoader v-if="state.isLoading" color="#20ac66" size="10px"/>
     </div>
     <div class="jobs-grid">
        <div v-for="job in state.jobs.slice( 0 , limit) || state.jobs " :key="job.id">
           <JobListing :job="job"/>
        </div>
     </div>
     
    </div>
    <section class="jobs-footer" v-if="limit">
      <RouterLink
        to="/jobs"
        class="jobs-footer__btn"
        >View All Jobs
        </RouterLink>
    </section>
</template>

<style lang="scss" scoped>

.container-bg {
 background-color: rgb(211, 223, 220);
 padding-bottom: 10rem;
}
.jobs-title {
    font-weight: 700;
    color: rgb(32, 172, 102);
    font-size: 3rem;
    text-align: center;
    padding: 2rem;
}
.jobs-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
}
.jobs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-auto-rows: 1fr;
    grid-gap: 1rem;
}
.jobs-footer {
    text-align: center;
    padding: 2rem 0;
    &__btn {
        &:link,
        &:visited {
            background-color: rgb(7, 7, 85);
            color: white;
            text-decoration: none;
            width: 30%;
            display: inline-block;
            padding: 1rem 2rem;
            border-radius: .7rem
        }
        &:hover,
        &:active {
            background-color:rgb(21, 21, 140)
        }
    }
}
</style>