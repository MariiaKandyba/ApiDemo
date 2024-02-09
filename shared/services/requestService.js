export class RequestService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  getAllEntities(successCallback, errorCallback) {
    $.ajax({
      url: this.apiUrl,
      method: "GET",
      success: successCallback,
      error: errorCallback,
    });
  }

  getEntityById(id, successCallback, errorCallback) {
    $.ajax({
      url: `${this.apiUrl}/${id}`,
      method: "GET",
      success: successCallback,
      error: errorCallback,
    });
  }

  createEntity(entityData, successCallback, errorCallback) {
    $.ajax({
      url: this.apiUrl,
      method: "POST",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(entityData),
      success: successCallback,
      error: errorCallback,
    });
  }

  updateEntity(id, entityData, successCallback, errorCallback) {
    $.ajax({
      url: `${this.apiUrl}/${id}`,
      method: "PUT",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(entityData),
      success: successCallback,
      error: errorCallback,
    });
  }

  deleteEntity(id, successCallback, errorCallback) {
    $.ajax({
      url: `${this.apiUrl}/${id}`,
      method: "DELETE",
      success: successCallback,
      error: errorCallback,
    });
  }
}
