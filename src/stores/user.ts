import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userInfo: {
      avatar: '',
      name: '',
      total: 0,
      current: 0
    }
  }),
  actions: {
    async getUserInfo() {
      this.userInfo = {
        avatar: '',
        name: '',
        total: 0,
        current: 0
      }
    },
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
    }
  },
  getters: {
    userName: (state) => {
      return state.userInfo.name
    },
  },
  // 数据持久化
  persist: {
    enabled: true,
    strategies: [
      {
        paths: ['userInfo'],
        storage: localStorage
      }
    ]
  }
})
export interface UserInfo {
  avatar: string
  name: string
  total: number
  current: number
}
