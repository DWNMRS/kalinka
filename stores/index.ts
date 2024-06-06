import { defineStore } from 'pinia'

const url = 'https://kalinka.phuket.forsale/objects'

export const useObjectsStore = defineStore('objectsStore', {
  state: () => ({
    data: [],
  }),
  actions: {
    async getObjects() {
      try {
        const res = await fetch(url)
        const dataObjects = await res.json()
        this.data = dataObjects
      } catch (error) {
        console.error('Error fetching objects:', error)
      }
    },
  },
})
