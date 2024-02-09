import { RequestService } from "/shared/services/requestService.js";

$(document).ready(function () {
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get("id");

  const userService = new RequestService("http://api/users");

  if (id !== null) {
   userService.getEntityById(
      id,
      function (response) {
        $("input[id='name']").val(response.User[0].name);
        $("input[id='email']").val(response.User[0].email);
        $("input[id='password']").val(response.User[0].password);
      },
      function (xhr, status, error) {
        console.error("Error:", error);
      }
    );
  }

  $("#applicationForm").submit(function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#password").val();

   userService.updateEntity(
      id,
      { name: name, 
        email: email,
        password: password
       },
      function (response) {
        window.location.href = "../users.php?id=" + response.User[0].id;
      },
      function (xhr, status, error) {
        console.error("Error updatinguser:", error);
      }
    );
  });
});
