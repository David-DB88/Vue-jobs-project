<script setup lang="ts">
import { useRoute } from 'vue-router';


const route = useRoute()
const isActive = (path: string)=> route.path === path
</script>

<template>
  <nav class="nav">
        <div class="nav__wrapper">
            <!-- Logo -->
            <RouterLink class="logo__wrapper" to="/">
              <img  src="@/assets/img/logo.png" alt="Vue Jobs" />
              <span>Vue Jobs</span>
            </RouterLink>
              <div class="nav__links">
                <RouterLink
                  to="/"
                  active-class="nav__isActive"
                  class="nav__links_item"
                  >Home
                </RouterLink>
                <RouterLink
                  to="/jobs"
                  active-class="nav__isActive"
                  class="nav__links_item"
                  >Jobs
                </RouterLink>
                <RouterLink
                  to="/job/add"
                  :class="['nav__links_item', {['nav__isActive']: isActive('/jobs/add')}]"class="nav__links_item"
                  >Add Job
                </RouterLink>
            </div>
        </div>
    </nav>
</template>



<style lang="scss" scoped>
.nav {
    background: green;
    padding: 0 2rem;

    

    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__links {
        width: 30%;
        display: flex;
        justify-content: space-around;
        text-decoration: none;
        text-align: center;
        &_item {
            &:link, &:visited {
                font-size: 1.6rem;
                letter-spacing: .5rem;
                text-transform: uppercase;
                padding: .2rem 2rem;
                text-decoration: none;
                color: white;
                background: linear-gradient(120deg, transparent 0, transparent 50%, white 50%);
                transition: all .2s ease;
                background-size: 230%;
                display: inline-block
            };
            &:hover, &:active {
            background-position: 100%;
            color: brown;
            transform: translateX(1rem)
        }
        }
    }
    &__isActive {
      &:visited{
        background-color: rgb(33, 118, 91);
        color: orangered;
      }
      
    }
}
.logo__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        img {
        margin-right: 2rem;
    }
}
</style>