export class Product {
  constructor(title = "", price = "", id = 0) {
    this._title = title;
    this._price = price;
    this._id = id;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }
getCardUi() {
    return `
        <div class="col-md-4 mb-3">
            <div class="card border">
                <div class="card-body">
                    <h5 class="card-title">${this._title}</h5>
                    <p class="card-text"><b>Price:</b> $${this._price}<br></p>
                    <div class='d-flex w-100 justify-content-around'>
                        <a id='delete' data-id='${this._id}' style='width: 40%' class='deleteBtn btn btn-secondary'>Delete</a>
                        <a id='edit'  data-id='${this._id}' style='width: 40%' class='editBtn btn btn-secondary'>Edit</a>
                    </div>
                </div>
            </div>
        </div>`;
  }
}
