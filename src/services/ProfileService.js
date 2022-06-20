import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"




class ProfileService{
  async getProfile(id){
    const res = await api.get(`api/profiles/${id}`)
    // logger.log('getting profile', res.data)
    AppState.profile = res.data
  }

  async prevPage(id, pageNumber) {
    AppState.posts = []
    const res= await api.get(`api/posts?creatorId=${id}&page=${pageNumber}`)
    // logger.log(res.data.posts)
    AppState.profileCurrentPage--
    AppState.posts = res.data.posts
    AppState.profilePageDetails = res.data.page
  }
  
  async nextPage(id, pageNumber) {
    AppState.posts = []
    const res= await api.get(`api/posts?creatorId=${id}&page=${pageNumber}`)
    // logger.log(res.data.posts)
    AppState.profileCurrentPage++
    AppState.posts = res.data.posts
    AppState.profilePageDetails = res.data.page
  }
}


export const profileService = new ProfileService()