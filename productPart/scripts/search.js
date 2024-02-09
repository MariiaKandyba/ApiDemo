import { RequestService } from "/shared/services/requestService.js";

$(document).ready(function () {
  var searchForm = $("#searchForm");
  searchForm.submit(function (event) {
    event.preventDefault();
    var searchQuery = $("#searchInput").val();
    const userService = new RequestService("http://api/products");
    userService.getEntityById(
      searchQuery,
      function (response) {
        if (response.product.length != 0)
          window.location.href =
            "../productPart/products.php?id=" + response.product[0].id;
        else window.location.href = "../productPart/views/notFound.php";
      },
      function (xhr, status, error) {
        console.error("Error:", error);
      }
    );
  });
});
