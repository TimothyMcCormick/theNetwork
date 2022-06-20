<template>
<div class="container-fluid">
  


  <div class="row">
    <div class="col-9">
  <CreatePost v-show="user.isAuthenticated" />
    <Post  v-for="p in posts" :key="p.creatorId" :post="p" />
    </div>
    <div class="col-3">
    <img class="img-fluid p-2" :src="tallAd" alt="">
    </div>
  </div>
  
  <div class="row justify-content-center">
    <div class="col-10 d-flex justify-content-between">
      <button class="btn btn-secondary m-2 selectable" @click="prevPage(homeCurrentPage - 1)">Newer</button>
      <p> {{ homePageDetails }} </p>
      <button class="btn btn-secondary m-2 selectable" @click="nextPage(homeCurrentPage + 1)">Older</button>
    </div>
  </div>
</div>

</template>

<script> 
import { AppState } from "../AppState"
import { computed } from "@vue/reactivity"
import { onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { postService } from "../services/PostService"
import { adsService } from "../services/AdsService"
export default {
  name: 'Home',
  setup(){
    onMounted(async () => {
      try {
        await postService.getAll()
        await adsService.getTallAd()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }

    })
    return {
      user: computed(() => AppState.user),
      profile: computed(() => AppState.profile), 
      profiles: computed(() => AppState.profiles), 
      posts: computed(() => AppState.posts), 
      homeCurrentPage: computed(() => AppState.homeCurrentPage),
      totalPages: computed(() => AppState.totalPages),
      tallAd: computed(() => AppState.tallAd),
      homePageDetails: computed(() => AppState.homePageDetails),
      async prevPage(pageNumber){
        try {
          await postService.prevPage(pageNumber)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async nextPage(pageNumber){
        try {
          await postService.nextPage(pageNumber)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
.profile-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50em;
}
</style>
