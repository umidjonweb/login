import axios from 'axios'

export const main = axios.create({
   baseURL: "https://plag.m1.uz",
   headers: {
      Authorization: `Bearer ${localStorage.getItem('user_token')}`
   }
})

export const auth = axios.create({
   baseURL: "https://plag.m1.uz",
})