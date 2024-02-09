export class User {
  constructor(name = "", email = "", password = "", id = 0) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }
  get id() {
    return this._id;
  }

  set id(value) {
    this_id = value;
  }
  getCardUi() {
    return `
            <div class="col-md-4 mb-3">
                <div class="card border">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <p class="card-text"><b>Email:</b> ${this.email}<br></p>
                        <div class='d-flex w-100 justify-content-around'>
                            <a id='delete' data-id='${this._id}' style='width: 40%' class='deleteBtn btn btn-secondary'>Delete</a>
                            <a id='edit'  data-id='${this._id}' style='width: 40%' class='editBtn btn btn-secondary'>Edit</a>
                        </div>
                    </div>
                </div>
            </div>`;
  }
}
