import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"
import { Job } from "../Models/Job.js"
import { Pop } from "../Utils/Pop.js"
import { jobsService } from "../Services/JobsService.js"
import { getFormData } from "../Utils/FormHandler.js"

function _drawJobs(){
    let template = ''
    appState.jobs.forEach(j => template += j.JobCard)
    setHTML('listings', template)
    setHTML('modal-content', Job.JobForm({}))
    setHTML('form-button', Job.FormButton())
}

export class JobsController{

    constructor(){
        console.log('JOB STUFF')
        this.getJobs()
        appState.on('jobs', _drawJobs)
        
    }

    async getJobs(){
        try {
            await jobsService.getJobs()
        } catch (error) {
            console.error(error)
            Pop.error(error.message)
        }
    }

    async createJobs(){
        try {
            console.log('creating jobz')

            window.event.preventDefault()
            const form = window.event.target 
            const formData = getFormData(form)

            console.log(formData)
            await jobsService.createJob(formData)
        } catch (error) {
            console.error(error)
            Pop.error(error.message)
        }
    }




}