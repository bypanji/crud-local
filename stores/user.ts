import { defineStore } from 'pinia'

interface data {
    _id: string,
    name : string,
    gender : string,
    address: string,
    file: File
}

export const useUserStore = defineStore('user', () => {
    const users = ref<Array<data>>([])

    const actionUser = () => {
        const data = localStorage.getItem('data')
        
        users.value = data ? JSON.parse(data) : []
    }

    return {
        users,
        actionUser
    }
})