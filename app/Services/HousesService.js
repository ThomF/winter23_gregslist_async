import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { sandboxApi } from "./AxiosService.js"



class HousesService{

    async createHouse(formData) {
        const res = await sandboxApi.post('/houses', formData)
        console.log('[create house]', res.data)
        let realHouse = new House(res.data)
        appState.houses.push(realHouse)
        appState.emit('houses')
    }

    async removeHouse(homeId){
        const res = await sandboxApi.delete('/houses/' + homeId)
        console.log('[removing house]', res.data)
        appState.houses = appState.houses.filter(house => house.id != homeId)
    }


    async editHouse(formData, homeId){
        const res = await sandboxApi.put(`/houses/${homeId}`, formData)
        console.log('[editing Home]', res.data)
        let oldHome = appState.houses.findIndex(h => h.id == homeId)
        appState.houses.splice(oldHome, 1, new House(res.data))
        appState.emit('houses')
    }
    
    async getHouses() {
        const response = await sandboxApi.get('/houses')
        console.log('[get houses]', response.data)
        const newArray = response.data.map(house => new House(house))
        appState.houses = newArray
        console.log(appState.houses);
    }


}

export const housesService = new HousesService()