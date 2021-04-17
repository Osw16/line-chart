import axios from 'axios';
const data = {"id_crime":12,"id_ent":14,"id_mun1":39,};
const url = 'https://spotlight-unfpa.datacivica.org/api/v1/timeline';

export const HTTP = axios.create({
    baseURL: url,
    headers:data,
    method:'POST',
  })


    