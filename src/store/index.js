import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
  state: () => ({
    filter: ''
  }),
  actions:{
    kFormater(number){
      const formatter = Intl.NumberFormat('en', { notation: 'compact' })
      return formatter.format(number)
    },
    setFilter(text){
      this.filter = text
    }
  },
})

export default useMainStore
