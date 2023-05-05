import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
  state: () => ({
    active: false
  }),
  actions:{
    kFormater(number){
      const formatter = Intl.NumberFormat('en', { notation: 'compact' })
      return formatter.format(number)
    }
  },
  persist: true
})

export default useMainStore
