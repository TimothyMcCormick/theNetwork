import { applyStyles } from "@popperjs/core"
import { VueElement } from "vue"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"




class PostService{
  async getAll(){
    const res = await api.get('api/posts')
    logger.log(res.data)
    AppState.posts = res.data.posts
    AppState.pageDetails = res.data.page
  }

  async getProfilePosts(profileId){
    const res = await api.get(`api/profiles/${profileId}/posts`)
    // logger.log('get profile posts', res.data)
    AppState.posts = res.data.posts
  }
  async prevPage(pageNumber) {
    AppState.posts = []
    const res = await api.get('api/posts?page=' + pageNumber)
    logger.log(res.data)
    AppState.homeCurrentPage--
    AppState.posts = res.data.posts
    AppState.homePageDetails = res.data.page
  }
  
  async nextPage(pageNumber) {
    AppState.posts = []
    const res = await api.get('api/posts?page=' + pageNumber)
    logger.log(res.data)
    AppState.homeCurrentPage++
    AppState.posts = res.data.posts
    AppState.homePageDetails = res.data.page
  }

  async createPost(postData) {
    const res = await api.post('api/posts', postData)
    // logger.log('creating post', res.data)
    AppState.posts.unshift(res.data)
  }

  async likePost(id) {
      const res = await api.post(`api/posts/${id}/like`)
      logger.log(res.data)
      AppState.posts = res.data
      // AppState.currentLikes = AppState.posts.likes
    }

  async deletePost(id) {
    const res = await api.delete('api/posts/' + id)
    // logger.log('deleting post', res.data)
    AppState.posts = AppState.posts.filter(p => p.id != id)
  }

  async searchPosts(query=''){
    AppState.query = query
    logger.log('searching', query)
    const postRes = await api.get(`api/posts?${query}`)
    const profileRes = await api.get(`api/profiles?${query}`)
    logger.log('searching', postRes.data)
    logger.log('searching', profileRes.data)
    AppState.posts = postRes.data.posts
    AppState.profiles = profileRes.data.profiles
    // AppState.currentPage = res.data.page
    // AppState.totalPages = res.data.total_pages
  }
}

export const postService = new PostService()