<script setup lang="ts">
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { reactive, onMounted, } from 'vue';
import { RouterLink, useRoute, useRouter} from 'vue-router';
import type { Job } from '../JobListing.vue';
import axios from 'axios';
import { useToast } from 'vue-toastification';

const state = reactive<{
    job: Job | null
    isLoading: boolean
}>({
    job: null,   
    isLoading: true
})

const jobId = useRoute().params.id
const router = useRouter()
const toast = useToast()
const deleteJob = async () =>{
    try {
        const confirmDelete = confirm("Are you sure you want to delete this job?");

        if (confirmDelete) {
            const respons = await axios.delete(`/api/jobs/${jobId}`)
            router.push('/jobs')
            toast.success("Job Was deleted")
        }
        
    } catch (error) {
        toast.success("Job Was Not deleted")
    }
}

onMounted(async ()=>{
    try {
        const response = await axios.get(`/api/jobs/${jobId}`)
        state.job = response.data
    } catch (error) {
        console.error(error)
    }finally{
        state.isLoading = false
    }
})
</script>

<template>
  <section v-if="!state.isLoading" class="container modify-cont">
        <div class="job-grid">
          <main>
            <div class="job-header">
              <div class="job-header__title">{{ state.job?.type }}</div>

              <h1 class="job-header__text">{{ state.job?.title }}</h1>

              <div class="job-header__location" >
                <i class="pi pi-map-marker job-header__icon"></i>
                <p class="text-orange-700">{{ state.job?.location }}</p>
              </div>
            </div>

            <div class="job-desc">
              <h3 class="job-desc__title">
                Job Description
              </h3>

              <p class="job-desc__text">
                {{ state.job?.description }}
              </p>

              <h3 class="job-desc__salary">Salary</h3>

              <p class="mb-4">{{ state.job?.salary }} / Year</p>
            </div>
          </main>

          <!-- Sidebar -->
          <aside class="job-sidebar">
            <!-- Company Info -->
            <div class="job-sidebar__company">
              <h3 class="text-xl font-bold mb-6">Company Info</h3>

              <h2 class="text-2xl">{{ state.job?.company.name }}</h2>

              <p class="job-sidebar__company_paragraph">
                {{ state.job?.company.description }}
              </p>

              <hr class="my-4" />

              <h3 class="text-xl">Contact Email:</h3>

              <p class="job-sidebar__company_input">
                {{ state.job?.company.contactEmail }}
              </p>

              <h3 class="text-xl">Contact Phone:</h3>

              <p class="job-sidebar__company_input">{{ state.job?.company.contactPhone }}</p>
            </div>

            <!-- Manage -->
            <div class="job-sidebar__manage">
              <h3 class="text-xl font-bold mb-6">Manage Job</h3>
              <RouterLink
                :to="`/jobs/edit/${state.job?.id}`">Edit Job
              </RouterLink>
              <button @click="deleteJob">
                Delete Job
              </button>
            </div>
          </aside>
        </div>
    </section>
    <div v-else class="jobs-loader">
        <PulseLoader v-if="state.isLoading" color="#20ac66" size="10px"/>
     </div>
</template>

<style lang="scss" scoped>
.modify-cont {
    margin: 0 auto;
    background-color: rgb(174, 241, 215)
}
.job-grid {
    display: grid;
    grid-template-columns: 1fr 20vw;
    grid-gap: 2rem;
}
.job-header {
    background-color: white;
    padding: 3rem;
    box-shadow: .1rem .1rem .1rem .1rem gray;
    border-radius: .5rem;
    overflow: hidden;
    margin-bottom: 2rem;
    &__title {
        color: rgb(172, 171, 171)
    }
    &__text {
        font-weight: 700;
    }
    &__location {
        display: flex;
        align-items: center;
        color: orangered;
        i {
            margin-right: 1rem;
        }
    }
}

.job-desc {
    background-color: white;
    padding: 3rem;
    box-shadow: .1rem .1rem .1rem .1rem gray;
    border-radius: .5rem;
    overflow: hidden;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 45vh;
    &__title {
        color: green;
        font-weight: 700
    }
    &__text {
        color: black
    }
    &__salary {
        color: green;
        font-weight: 700;
    }
}
.job-sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__company {
        background-color: white;
        padding: 3rem;
        margin-bottom: 2rem;
        box-shadow: .1rem .1rem .1rem .1rem gray;
        border-radius: .5rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%
        h2 {
            font-weight: 400;
            color: black;
            padding: 1rem 0;
           
        }
        &_paragraph {
            color: black;
            padding: 1rem 0;
        }
        h3 {
            color: black;
            font-weight: 400;
        }
        &_input {
            color: black;
            font-weight: 700;
            padding: 1rem;
            display: block;
            background-color: rgb(174 241 215);
        }
    }
    &__manage {
        background-color: white;
        padding: 3rem;
        box-shadow: .1rem .1rem .1rem .1rem gray;
        border-radius: .5rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h3 {
            color: black;
            font-weight: 400;
        }
        button {
            background-color: #ef4444; 
            color: #ffffff;          
            font-weight: bold;        
            padding: .9rem 1rem;    
            border-radius: 9999px;    
            width: 100%;    
            border: none;          
            margin-top: 1rem;         
            display: block;           
            
            &:hover {
                background-color: #dc2626;
            }

            &:focus {
                outline: none;         
                box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.5); 
            }
      }
        a {
            background-color: #22c55e; 
            color: #ffffff;           
            text-align: center;      
            font-weight: bold;        
            padding: 0.5rem 1rem;     
            border-radius: 9999px;    
            width: 100%;              
            margin-top: 1rem;       
            display: block;
            text-decoration: none;
            &:hover {
                background-color: #16a34a; 
            }

            &:focus {
                outline: none;          
                box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.5); 
            }
        }
    }
}
</style>