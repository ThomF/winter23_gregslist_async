export class Job{
    static FormButton() {
        throw new Error("Method not implemented.")
    }
    static JobForm(arg0) {
        throw new Error("Method not implemented.")
    }

    constructor(data){
        this.id = data.id
        this.company = data.company
        this.jobTitle = data.jobTitle
        this.hours = data.hours
        this.rate = data.rate
        this.description = data.description
        this.img = data.img
    }

    get JobCard(){
        return /* HTML */`
        <div class="col-md-4 mb-3">
                <div class="card">
                <div class="card-body">
                    <div class="card-title fs-5">${this.company + ' ' + this.jobTitle}</div>
                    <p>${this.description ? this.description : "It's a cool job"}</p>
                    <p>${this.rate} + ' ' + ${this.hours}</p>
                    <div class="d-flex justify-content-between">
                    <button class="btn ms-1 btn-danger" type="button" onclick="app.jobsController.removeJob('${this.id}')">Delete Jobs!</button>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn ms-1 btn-info" type="button" onclick="app.jobsController.drawForm('${this.id}')">Edit HOME!</button>
                    </div>
                    </div>
                </div>
            </div>
        
        
        `
    }

}