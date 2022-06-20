<template>
  <div class="row justify-content-center">
    <div class="col-md-10 elevation-2 rounded mt-2 bg-light">
      <div class="row">
      <div class="col-md-3 profile">
      <img class="profile-img m-4" src="https://tse1.mm.bing.net/th/id/OIP.j4uqoQqHX14hsF1y5Xs4BQHaLG?w=197&h=296&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="">
      
      </div>
      <div class="col-md-1 d-flex align-items-center">
        <i class="graduated-icon mdi mdi-school f-18 " >  </i>
      </div>
    <div class="col-md-4 d-flex flex-column justify-content-center">
      <h4 class="m-2"> Summer 2018 </h4>
    <h2 class=" m-2"> Name </h2>
    
      </div>
      </div>
      </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
export default {
  setup(){
    return {
      profile: computed(() => AppState.profile)
    }
  }
}
</script>


<style lang="scss" scoped>
.profile-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50em;
}
</style>