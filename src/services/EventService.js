import axios from 'axios'

const apiClient = axios.create({
})

export default{
  getEvents(){
    const payload = { id_crime: 12, id_ent: 14, id_mun1: 39 }
    const url = 'https://spotlight-unfpa.datacivica.org/api/v1/timeline'
      return apiClient.post(url,payload)
  },
  getRandom(payload){
    const url = 'https://spotlight-unfpa.datacivica.org/api/v1/timeline'
      return apiClient.post(url,payload)
  },
  getState(){
    const url = 'https://api.npoint.io/2e9129c41e1f250faa90'
      return apiClient.get(url)
  }


}


