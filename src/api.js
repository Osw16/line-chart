import {post} from 'axios';
const url = 'https://spotlight-unfpa.datacivica.org/api/v1/timeline';
const data = {"id_crime":12,"id_ent":14,"id_mun1":39,};

getCrime =  axios.post(url,data)
.then(response =>(console.log(response)))
.catch(error => console.log(error));

export default{
    getCrime
}