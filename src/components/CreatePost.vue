<template>
  <div class="row justify-content-center">
    <form
      class="col-10 p-3 elevation-2 rounded mt-2 bg-light"
      action=""
      
    >
      <div class="row">
    <div class="col-2 d-flex justify-content-center align-items-center">
      <img class="profile-img selectable" :src="account.picture" alt="" @click="goToProfile">
    </div>
      <div class="col-10 d-flex flex-column">
      <h4 class="m-1">Create a post</h4>

      <textarea
        class="m-1"
        name=""
        id=""
        cols="30"
        rows="4"
        placeholder="whats on your mind..."
        v-model="postData.body"
      ></textarea>
      
      <input
        class="m-1"
        type="text"
        placeholder="image..."
        v-model="postData.imgUrl"
      />
      <button class="btn btn-primary m-1" @click.prevent="createPost">create</button>
      </div>
      </div>
    </form>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { postService } from "../services/PostService";
import { AppState } from "../AppState";
import { onUpdated, watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router"
export default {
  // props: { post: {type: Object, required: true}},
  setup(){
    const router = useRouter();
    const postData = ref ({});
    return {
      postData,
      posts: computed(() => AppState.posts),
      profile: computed(() => AppState.profile),
      account: computed(() => AppState.account),
      async createPost() {
        try {
          await postService.createPost(postData.value)
          Pop.toast('post created', 'success')
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      // goToProfile(){
      //   router.push({
      //     name: "Profile",
      //     params: {id: props.post.creatorId}
      //   })
      // }
    }
  }
  }
</script>


<style lang="scss" scoped>
.profile-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50em;
}
</style>