
import { URL,USER_URL } from './URL'
import axios from 'axios'

function getItems(){
    return axios.get(URL);
}
function getItemById(id){
    return axios.get(`${URL}${id}`)
}
function getUsers(){
    return axios.get(USER_URL);
}
function addUser(data){
    return axios.post(USER_URL,data)
}
export {getItems,getItemById,getUsers,addUser};