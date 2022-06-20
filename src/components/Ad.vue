<template>
  <div class="container-fluid">
      <div class="col-12 d-flex justify-content-center">
      <img class="img-fluid" :src="ad" alt="">
      </div>
    </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core"
import { adsService } from "../services/AdsService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { AppState } from "../AppState"
export default {
  setup(){
    onMounted(async () => {
      try {
        await adsService.getAd()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      ad: computed(() => AppState.ad),
      
    }
  }
}
</script>


<style lang="scss" scoped>
.ads{
  height: 10vh;
}
</style>