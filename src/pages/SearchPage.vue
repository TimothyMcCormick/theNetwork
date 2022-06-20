<template>
  <div class="container-fluid">
    
    <div class="row justify-content-center">
      <div class="col-9">
        <ProfileSearchResult />
        
        <Post v-for="p in posts" :key="p.id" :post="p" />
      </div>
      <div class="col-3">
    <img class="img-fluid p-2" :src="tallAd" alt="">
    </div>
    </div>
    <div class="row justify-content-center">
    <!-- <div class="col-10 d-flex justify-content-between">
      <button class="btn btn-secondary m-2 selectable" @click="prevPage(profileCurrentPage - 1)">Newer</button>
      <p> {{ profilePageDetails }} </p>
      <button class="btn btn-secondary m-2 selectable" @click="nextPage(profileCurrentPage + 1)">Older</button>
    </div> -->
  </div>

  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import ProfileSearchResult from "../components/ProfileSearchResult.vue"
import { AppState } from "../AppState"
export default {
  
  setup(){
    return {
      tallAd: computed(() => AppState.tallAd),
    }
  }
}
</script>


<style lang="scss" scoped>

</style>