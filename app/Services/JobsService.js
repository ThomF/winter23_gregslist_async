import { appState } from "../AppState.js"
import { Job } from "../Models/Job.js"
import { sandboxApi } from "./AxiosService.js"


class JobsService{
    async createJob(formData) {
        const res = await sandboxApi.post('/jobs', formData)
        console.log('[create job]', res.data)
        let realJob = new Job(res.data)
        appState.jobs.push(realJob)
        appState.emit('jobs')
    }


    async getJobs(){
        const response = await sandboxApi.get('/jobs')
        console.log('[get jobs]', response.data)
        const newArray = response.data.map(job => new Job(job))
        appState.jobs = newArray
        console.log(appState.jobs)
    }



}

export const jobsService = new JobsService()