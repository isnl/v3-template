import { service } from '@/service'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTokenStore = defineStore('token', () => {
  const token = ref('')

  const getToken = async () => {
    const res = await service.get('/api/token')
    token.value = res.data.token
  }

  return { token, getToken }
})
