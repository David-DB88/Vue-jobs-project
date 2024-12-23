<script setup lang="ts">
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';



const form = reactive({
  title: '',
  type: '',
  location: '',
  description: '',
  salary: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
  }
})
const toast = useToast()
const router = useRouter()
const handleSubmit = async() => {
    try {
        const respons = await axios.post('/api/jobs', form)
        router.push(`/jobs/${respons.data.id}`)
        toast.success('Job Added successfully')
    } catch (error) {
        toast.error('Job Was Not Added')
    }
}
</script>

<template>
   <section class="container continer-bg">
          <form class="form" @submit.prevent="handleSubmit">
            <h2 class="form__title">Add Job</h2>

            <div class="mb-4">
              <label for="type" class="form__label"
                >Job Type</label
              >
              <select
                id="type"
                name="type"
                v-model="form.type"
                class="form__input"
                required
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div class="mb-4">
              <label class="form__label"
                >Job Listing Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                v-model="form.title"
                class="form__input"
                placeholder="eg. Beautiful Apartment In Miami"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="description"
                class="form__label"
                >Description</label
              >
              <textarea
                id="description"
                name="description"
                v-model="form.description"
                class="form__input"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="type" class="form__label"
                >Salary</label
              >
              <select
                id="salary"
                name="salary"
                v-model="form.salary"
                class="form__input"
                required
              >
                <option value="Under $50K">under $50K</option>
                <option value="$50K - $60K">$50 - $60K</option>
                <option value="$60K - $70K">$60 - $70K</option>
                <option value="$70K - $80K">$70 - $80K</option>
                <option value="$80K - $90K">$80 - $90K</option>
                <option value="$90K - $100K">$90 - $100K</option>
                <option value="$100K - $125K">$100 - $125K</option>
                <option value="$125K - $150K">$125 - $150K</option>
                <option value="$150K - $175K">$150 - $175K</option>
                <option value="$175K - $200K">$175 - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div class="mb-4">
              <label class="form__label">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                v-model="form.location"
                class="form__input"
                placeholder="Company Location"
                required
              />
            </div>

            <h3 class="text-2xl mb-5">Company Info</h3>

            <div class="mb-4">
              <label for="company" class="form__label"
                >Company Name</label
              >
              <input
                type="text"
                id="company"
                name="company"
                v-model="form.company.name"
                class="form__input"
                placeholder="Company Name"
              />
            </div>

            <div class="mb-4">
              <label
                for="company_description"
                class="form__label"
                >Company Description</label
              >
              <textarea
                id="company_description"
                name="company_description"
                v-model="form.company.description"
                class="form__input"
                rows="4"
                placeholder="What does your company do?"
              ></textarea>
            </div>

            <div class="mb-4">
              <label
                for="contact_email"
                class="form__label"
                >Contact Email</label
              >
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                v-model="form.company.contactEmail"
                class="form__input"
                placeholder="Email address for applicants"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="contact_phone"
                class="form__label"
                >Contact Phone</label
              >
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                v-model="form.company.contactPhone"
                class="form__input"
                placeholder="Optional phone for applicants"
              />
            </div>

            <div>
              <button
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
    </section>

</template>

<style lang="scss" scoped>
.continer-bg {
    background-color: rgb(213, 244, 233);
}
.form {
    background-color: white;
    box-shadow: .1rem .1rem .1rem .1rem gray;
    border-radius: .5rem;
    overflow: hidden;
    padding: 2rem;
    width: 30vw;
    margin: 0 auto;
    &__title {
        text-align: center;
        font-weight: 700;
    }
    &__label {
        color: black;
        font-weight: 700;
        font-size: 1.6rem;
        display: block;
    }
    &__input {
        width: 100%;
        border-radius: .1rem;
        padding: 1rem 0;
        margin-bottom: 1rem;
        
    }
}
</style>