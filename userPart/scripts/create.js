import { RequestService } from "/shared/services/requestService.js";

$(document).ready(function () {
  const userService = new RequestService("http://api/users");

  $("#createProductBtn").click(function (e) {
    e.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#password").val();

    userService.createEntity(
      { name: name, email: email, password: password },
      function (response) {
        if (response.id !== undefined) {
          window.location.href = "../users.php?id=" + response.id;
        } else {
          alert(response.message)
        }
      },
      function (xhr, status, error) {
        console.error("Error creating user:", error);
      }
    );
  });
});
