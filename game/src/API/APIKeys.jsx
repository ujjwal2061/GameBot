 /// New Thing need to learn it 
 import  axios from "axios"
const key="cd13302ff4c64e7bba696c7cfb5b5ae9"
const  axsioLink=axios.create({
    baseURL:"https://api.rawg.io/api"
})
const getGener=axsioLink.get(`/geners?key=${key}`)
export default {
    getGener
}