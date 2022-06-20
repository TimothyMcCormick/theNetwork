<template>

    <form @submit.prevent="searchPosts">
      <input
        v-model="search"
        type="text"
        class="col-10"
        placeholder="search"
      />
      
      <button class="col-2 p-1 btn btn-primary">
        <i class="mdi mdi-magnify"></i>
      </button>
    </form>
          
</template>


<script>
import { AppState } from "../AppState";
import { computed, reactive, onMounted, ref } from "vue";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { postService } from "../services/PostService";

export default {
  setup() {
    const search = ref("");
    return {
      search,
      async searchPosts() {
        try {
          logger.log("searching", search.value);
          await postService.searchPosts(`query=${search.value}`);
        } catch (error) {
          Pop.toast(error.message, "error");
          logger.error(error);
        }
      },
      
    };
  },
};
</script>


<style lang="scss" scoped>

</style>