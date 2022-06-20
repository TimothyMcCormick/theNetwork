<template>
  <header>
    <Navbar />
  </header>

  <main>
    
    <router-view />
  </main>
  <footer>
    <Ad />
  </footer>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import { logger } from "./utils/Logger"
import Pop from "./utils/Pop"
import { adsService } from "../src/services/AdsService"
export default {
  name: 'App',
  setup() {
    return{
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
