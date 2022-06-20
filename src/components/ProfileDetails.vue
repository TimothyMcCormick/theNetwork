<template>
  <div class="row justify-content-center">
      <div class="col-md-10 elevation-2 rounded bg-light p-0 g-2" style="">
  <img :src="profile.coverImg" class="card-img-top bg-img" alt="...">
    <div class="row">
    <div class="col-md-4">
      <a :href="profile.github">
        <i class="mdi mdi-github mt-2 p-2 f-24 selectable"> </i>
      </a>
      </div>
      <div class="col-md-4 d-flex justify-content-center profile">
      <img class="profile-img" :src="profile.picture" alt="">
      <i v-if="profile.graduated" class="graduated-icon mdi mdi-school f-24 z-index-3" >  </i>
      </div>
      <div class="col-md-4 d-flex justify-content-end">
      <a :href="profile.linkedin">
      <i class=" mdi mdi-linkedin mt-2 p-2 f-24 selectable">  </i>
      </a>
      </div>
      </div>
    
  
  
    <h4 class="m-2"> {{profile.class}} </h4>
    <h2 class="card-title m-2"> {{profile.name}} </h2>
    <p class="card-text m-2">  {{profile.bio}} </p>
    <div class="d-flex justify-content-end">
      
      <!-- Button trigger modal -->
      
      
      <!-- Modal -->
      <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Profile</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form
          class="d-flex flex-column"
          action=""
          
        >
          <label for="">name</label>
          <input type="text" v-model="editable.name" />
          <label for="">email</label>
          <input type="text" v-model="editable.email" />
          <label for="">picture</label>
          <input type="text" v-model="editable.picture" />
          <label for="">bio</label>
          <input type="text" v-model="editable.bio" />
          <label for="">cover image</label>
          <input type="text" v-model="editable.coverImg" />
          <label for="">github</label>
          <input type="text" v-model="editable.github" />
          <label for="">linkedin</label>
          <input type="text" v-model="editable.linkedin" />
          <label for="">resume</label>
          <input type="text" v-model="editable.resume" />
          <label for="">class</label>
          <input type="text" v-model="editable.class" />
          <label for="">graduated</label>
          <input type="checkbox" v-model="editable.graduated" />
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="saveAccount">Save</button>
            </div>
        </form>
            </div>
            
          </div>
        </div>
      </div>
      
    
    <button v-show="profile.id == account.id" type="button" class="btn btn-primary btn-md m-2" data-bs-toggle="modal" data-bs-target="#modelId">
    Edit
  </button>
  
      
    </div>
  
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import { AppState } from "../AppState"
import { watchEffect } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { accountService } from "../services/AccountService";
export default {
  props: { profile: {type: Object, required: true} },
  setup(){
    const editable = ref ({});
    watchEffect (() => {
      AppState.account;
      // logger.log("account updated", AppState.account, editable.value);
      editable.value = { ...AppState.account };
    })
    return {
      editable,
      profile: computed (() => AppState.profile),
      account: computed (() => AppState.account),
      async saveAccount() {
        try {
          await accountService.editAccount(editable.value)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
  .bg-img {
  height: 25vh;
  object-fit: cover;
  background-position: center;
}
.profile {
  transform: translateY(-8vh);
}
.graduated-icon {
  transform: translateY(+12vh);
}
.profile-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50em;
}
</style>