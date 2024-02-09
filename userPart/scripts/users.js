import { RequestService } from "/shared/services/requestService.js";
import { User } from "/shared/models/user.js";

$(document).ready(function () {
  const userService = new RequestService("http://api/users");
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get("id");
  if (id !== null) {
    userService.getEntityById(id, function (response) {
      const user = response.User[0];
      const userObj = new User(user.name, user.email, user.password, user.id);

      if (user.length == 0) {
        window.location.href = "views/notFound.php";
      } else {
        $("#cards").append(userObj.getCardUi());
      }
    });
  } else {
    userService.getAllEntities(function (response) {
      response.Users.forEach(function (user) {
        const userObj = new User(user.name, user.email, user.password, user.id);
        $("#cards").append(userObj.getCardUi());
      });
    });
  }
  $("#cards").on("click", ".deleteBtn", function (e) {
    e.preventDefault();
    let id = $(this).attr("data-id");
    userService.deleteEntity(
      id,
      function (response) {
        window.location.href = "/userPart/users.php"
      },
      function (xhr, status, error) {
        console.error(error);
      }
    );
  });
  $("#cards").on("click", ".editBtn", function (e) {
    e.preventDefault();
    let id = $(this).attr("data-id");
    window.location.href = "views/edit.php?id=" + id;
  });
});
