import { RequestService } from "/shared/services/requestService.js";

$(document).ready(function () {
  var searchForm = $("#searchFormUsers");

  searchForm.submit(function (event) {
    event.preventDefault();
    var searchQuery = $("#searchInputUser").val();
    const userService = new RequestService("http://api/users");
    userService.getEntityById(
      searchQuery,
      function (response) {
        if (response.User != 0) {
          window.location.href =
            "../userPart/users.php?id=" + response.User[0].id;
        } else {
          window.location.href = "../userPart/views/notFound.php";
        }
      },
      function (xhr, status, error) {
        console.error("Error:", error);
      }
    );
  });
});
