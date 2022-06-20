<template>
<div class="row justify-content-center">
  <div class="col-md-10 elevation-2 rounded mt-2 bg-light">
      <div class="col-12 d-flex justify-content-between align-items-center">
        <div class="col-1">
          <img class="profile-img selectable" :src="post.creator?.picture" alt="" @click="goToProfile">
          </div>
        <div class="col-2">
          <h5 class="m-1"> {{post.creator?.name}} </h5>
          <p class="m-1"> {{formatDate(post.createdAt)}} <i v-if="profile.graduated" class="mdi mdi-school"></i></p>
          <p class="m-1"> {{formatTime(post.createdAt)}} </p>
        </div>
        <div class="col-7 text-end"><i v-if="post.creatorId == account.id" class="mdi mdi-delete-forever selectable" @click="deletePost"></i></div>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <img class="img-fluid" :src="post.imgUrl" alt="">
      </div>
      <div class="col-12">
        <p> {{post.body}} </p>
      </div>
      <div class="col-12 text-end">
        <i class="mdi mdi-heart selectable" > {{post.likes?.length}} </i>
      </div>
      
    </div>
</div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router"
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { postService } from "../services/PostService";
export default {
  props: { post: {type: Object, required: true}},
  setup(props){
    const router = useRouter();
    return {
      posts: computed(() => AppState.posts),
      profile: computed(() => AppState.profile),
      account: computed(() => AppState.account),
      likes: computed(() => AppState.likes),
      async deletePost(){
        try {
          await postService.deletePost(props.post.id)
          Pop.toast('post deleted', 'success')
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async likePost(){
        try {
          await postService.likePost(props.post.id)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      
      },
      goToProfile(){
        router.push({
          name: "Profile",
          params: {id: props.post.creatorId}
        })
      },
      formatDate(rawDate) {
        return new Date(rawDate).toLocaleDateString()
      },
      formatTime(rawDate) {
        return new Date(rawDate).toLocaleTimeString()
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 45px;
  object-fit: cover;
}
</style>