<template>
  <div class="container-fluid">
    
    <div class="row justify-content-center">
      <div class="col-9">
        <ProfileDetails />
        <CreatePost />
        <Post v-for="p in posts" :key="p.id" :post="p" />
      </div>
      <div class="col-3">
    <img class="img-fluid p-2" :src="tallAd" alt="">
    </div>
    </div>
    <div class="row justify-content-center">
    <div class="col-10 d-flex justify-content-between">
      <button class="btn btn-secondary m-2 selectable" @click="prevPage(profileCurrentPage - 1)">Newer</button>
      <p> {{ profilePageDetails }} </p>
      <button class="btn btn-secondary m-2 selectable" @click="nextPage(profileCurrentPage + 1)">Older</button>
    </div>
  </div>

  </div>
  
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { useRoute } from "vue-router"
import { onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { postService } from "../services/PostService"
import { profileService } from "../services/ProfileService"
import { adsService } from "../services/AdsService"
export default {
  setup(){
    const route = useRoute();
    onMounted(async () => {
      try {
        AppState.posts = [];
        await profileService.getProfile(route.params.id);
        await postService.getProfilePosts(route.params.id)
        await adsService.getTallAd()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      profile: computed(() => AppState.profile), 
      posts: computed(() => AppState.posts), 
      profileCurrentPage: computed(() => AppState.profileCurrentPage),
      totalPages: computed(() => AppState.totalPages),
      tallAd: computed(() => AppState.tallAd),
      profilePageDetails: computed(() => AppState.profilePageDetails),
      async prevPage(pageNumber){
        try {
          await profileService.prevPage(route.params.id, pageNumber)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async nextPage(pageNumber){
        try {
          await profileService.nextPage(route.params.id, pageNumber)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
    }
  }
}
</script>


<style lang="scss" scoped>

</style>