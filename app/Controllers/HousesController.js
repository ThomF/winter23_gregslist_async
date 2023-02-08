import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { housesService } from "../Services/HousesService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"



function _drawHouses(){
    let template = ''
    appState.houses.forEach(h => template += h.HouseCard)
    setHTML('listings', template)
    setHTML('modal-content', House.HouseForm({}))
    setHTML('form-button', House.FormButton())


}

export class HousesController{

    constructor(){
        console.log("housesss")
        this.getHouses()
        appState.on('houses', _drawHouses)

    }


async getHouses(){
    try {
        await housesService.getHouses()
    } catch (error) {
        Pop.error(error.message)
    }
}

    async createHouse(){
        try {
            console.log('ji')
            // @ts-ignore
            window.event.preventDefault()
            const form = window.event.target
            const formData = getFormData(form)

            console.log(formData)
            await housesService.createHouse(formData)
        } catch (error) {
            console.error(error)
            Pop.error(error.message)
            
        }
    }    

    async removeHouse(homeId){
        try {
            if(await Pop.confirm()){
                await housesService.removeHouse(homeId)
            }
        } catch (error) {
            console.error(error)
            Pop.error(error.message)
        }
    }

    drawForm(homeId){
        try {
            if(homeId){
                let home = appState.houses.find(h => h.id == homeId)
                console.log(home)
                setHTML('modal-content', House.HouseForm(home))
            }
            else{
                setHTML('modal-content', House.HouseForm({}))
            }
        } catch (error) {
            console.error(error)
            Pop.error(error.message)
        }
    }

    async editHouse(homeId){
        try {
            window.event.preventDefault()
            const form = window.event.target
            const formData = getFormData(form)
            console.log(formData)
            await housesService.editHouse(formData, homeId)
        } catch (error) {
            console.error(error)
            Pop.error(error.message)
        }
    }




}