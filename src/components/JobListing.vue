<script setup lang="ts">
import { computed, ref } from 'vue';

export interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  salary: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
}
const props = defineProps<{
    job: Job
}>()
const showFullDescription = ref(false)
const trancetedDescription = computed(()=>{
    const description = props.job.description
    if(!showFullDescription.value){
        return description.substring(0, 90) + '...'
    }
    return description
})
</script>

<template>
   <div class="job-card">
              <div class="job-card__header">
                <div class="job-card__header_title">{{ job.type }}</div>
                <h3 class="job-card__header_text">{{ job.title }}</h3>
              </div>

              <div class="job-card__description">
                <div>
                    {{ trancetedDescription }}
                </div>
              <button class="job-card__description_btn" @click="showFullDescription = !showFullDescription">
                {{ !showFullDescription ? "More": "less" }}
              </button>
              </div>
                <div class="footer">
                    <h3 class="job-card__salary">{{ job.salary }}</h3>

                        <hr>

                        <div class="job-card__footer">
                            <div class="job-card__footer_location">
                            <i class="pi pi-map-marker job-card__footer_icon"></i>
                            {{ job.location }}
                        </div>
                            <RouterLink
                            :to="'/jobs/'+`${job.id}`"
                            class="job-card__footer_btn"
                            >
                            Read More
                            </RouterLink>
                        </div>
                </div>
              
          </div>
</template>

<style lang="scss" scoped>

.job-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: .5rem;
    box-shadow: .2rem .4rem .3rem .1rem gray;
    padding: 1rem;
    height: 100%;
    &__header {
      margin-bottom: .6rem;

      &_title {
       color: rgb(168, 164, 164)
     }
      &_text {
        color: black;
     }
      
    }
    &__description {
        margin-bottom: 1rem;
        &_btn{
            color: green;
            background: transparent;
            border: none;
            cursor: pointer;
            
        }
        
    }
    &__salary {
        margin-bottom: 1rem;
        color: rgb(21, 182, 21)
    }

    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem .5rem;
        &_location {
            color: orange
        }
        &_icon {
            color: orange
        }
        &_btn {
            &:link,
            &:visited {
                text-decoration: none;
                background-color:rgb(21, 182, 21);
                color: white;
                padding: .7rem 1.1rem;
                border-radius: .5rem
            }
            &:hover,
            &:active {
                background-color:rgb(16, 119, 16);
            }
        }
    }
    
}
</style>