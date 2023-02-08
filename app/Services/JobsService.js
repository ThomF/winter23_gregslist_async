import { appState } from "../AppState"
import { job } from "../Models/Job.js"
import { sandboxApi } from "./AxiosService.js"


class JobsService{
    async createJob(formData) {
        const res = await sandboxApi.post('/jobs', formData)
        console.log('[create job]', res.data)
        let realJob = new job(res.data)
        appState.jobs.push(realJob)
        appState.emit('jobs')
    }


    async getJobs(){
        const response = await sandboxApi.get('/jobs')
        console.log('[get jobs]', response.data)
        const newArray = response.data.map(jobs => new job(job))
        appState.jobs = newArray
        
    }



}

export const jobsService = new JobsService()