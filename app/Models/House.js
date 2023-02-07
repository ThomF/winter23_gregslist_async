

export class House{

    constructor(data){
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.img = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
    }


        get HouseCard(){
            return /*HTML */`
            <div class="col-md-4 mb-3">
                <div class="card">
                <img src="${this.img}" class="card-img-top car-img"
                    alt="car">
                <div class="card-body">
                    <div class="card-title fs-5">${this.bedrooms + ' ' + this.bathrooms}</div>
                    <p>${this.description ? this.description : "It's a Home"}</p>
                    <div class="d-flex justify-content-between">
                    <button class="btn ms-1 btn-danger" type="button" onclick="app.carsController.removeHouse('${this.id}')">Delete HOME!</button>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn ms-1 btn-info" type="button" onclick="app.housesController.drawForm('${this.id}')">Edit HOME!</button>
                    </div>
                    </div>
                </div>
            </div>
            `
        }


}