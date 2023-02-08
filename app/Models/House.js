

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
                    alt="house">
                <div class="card-body">
                    <div class="card-title fs-5">${this.bedrooms + ' ' + this.bathrooms}</div>
                    <p>${this.description ? this.description : "It's a Home"}</p>
                    <div class="d-flex justify-content-between">
                    <button class="btn ms-1 btn-danger" type="button" onclick="app.housesController.removeHouse('${this.id}')">Delete HOME!</button>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn ms-1 btn-info" type="button" onclick="app.housesController.drawForm('${this.id}')">Edit HOME!</button>
                    </div>
                    </div>
                </div>
            </div>
            `
        }


        static FormButton() {
            return `
            <button onclick="app.housesController.drawForm()" class="btn btn-success ms-3 mb-2" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                <i class="mdi mdi-plus"></i>
            </button>
            `
            }


            static HouseForm(editable) {
                if (!editable.id) {
                    editable = new House({
                    bedrooms: '',
                    bathrooms: '',
                    levels: '',
                    price: 100,
                    imgUrl: '',
                    description: ''
                    })
                }
            
                return `
                <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form ${editable.id ? `onsubmit="app.housesController.House('${editable.id}')"` : 'onsubmit="app.housesController.createHouse()"'}>
                    <div class="modal-body">
                        <div class="mb-3">
                        <label for="make" class="form-label">Bedrooms</label>
                        <input required type="text" value="${editable.bedrooms}" class="form-control" id="Bedrooms" placeholder="Bedrooms..." name="make">
                        </div>
                        <div class="mb-3">
                        <label for="model" class="form-label">Bathrooms</label>
                        <input required type="text" value="${editable.bathrooms}" class="form-control" id="Bathrooms" placeholder="Bathrooms..." name="model">
                        </div>
                        <div class="mb-3">
                        <label for="year" class="form-label">Levels</label>
                        <input required type="Levels" value="${editable.levels}" class="form-control" id="Levels" placeholder="Levels..." name="year">
                        </div>
                        <div class="mb-3">
                        <label for="img" class="form-label">img</label>
                        <input required type="text" value="${editable.img}" class="form-control" id="img" placeholder="img..." name="imgUrl">
                        </div>
                        <div class="mb-3">
                        <label for="price" class="form-label">price</label>
                        <input required type="number" value="${editable.price}" class="form-control" id="price" placeholder="price..." name="price">
                        </div>
                        <div class="mb-3">
                        <label for="description" class="form-label">description</label>
                        <textarea name="description" class="form-control" id="description" rows="3">
                        ${editable.description}
                        </textarea>
                        </div>
            
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    </form>
                </div>
                `
                }
            

}