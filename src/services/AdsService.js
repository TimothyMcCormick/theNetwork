import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"




class AdsService{
  async getAd(){
    const res = await api.get('api/ads')
    // logger.log('getting ad', res.data)
    AppState.ad = res.data[0].banner
  }
  async getTallAd(){
    const res = await api.get('api/ads')
    AppState.tallAd = res.data[0].tall
  }
}


export const adsService = new AdsService()