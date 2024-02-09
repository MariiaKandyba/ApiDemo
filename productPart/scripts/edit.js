import { RequestService } from "/shared/services/requestService.js";

$(document).ready(function () {
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get("id");

  const productService = new RequestService("http://api/products");

  if (id !== null) {
    productService.getEntityById(
      id,
      function (response) {
        $("input[id='titleInput']").val(response.product[0].title);
        $("input[id='priceInput']").val(response.product[0].price);
      },
      function (xhr, status, error) {
        console.error("Error:", error);
      }
    );
  }

  $("#applicationForm").submit(function (e) {
    e.preventDefault();
    var title = $("#titleInput").val();
    var price = $("#priceInput").val();

    productService.updateEntity(
      id,
      { title: title, price: price },
      function (response) {
        window.location.href = "../products.php?id=" + response.product[0].id;
      },
      function (xhr, status, error) {
        console.error("Error updating product:", error);
      }
    );
  });
});
