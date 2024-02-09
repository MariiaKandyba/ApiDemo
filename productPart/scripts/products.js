import { RequestService } from "/shared/services/requestService.js";
import { Product } from "/shared/models/product.js";

$(document).ready(function () {
  const productService = new RequestService("http://api/products");
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get("id");
  if (id !== null) {
    productService.getEntityById(id, function (response) {
      const product = response.product[0];
      if (product == null) {
        window.location.href = "/productPart/views/notFound.php";
      } else {
        const productObj = new Product(product.title, product.price, product.id);
        $("#cards").append(productObj.getCardUi());
      }
    });
  } else {
    productService.getAllEntities(function (response) {
      response.products.forEach(function (product) {
        const productObj = new Product(
          product.title,
          product.price,
          product.id
        );
        $("#cards").append(productObj.getCardUi());
      });
    });
  }
  $("#cards").on("click", ".deleteBtn", function (e) {
    e.preventDefault();
    productService.deleteEntity(
      $(this).attr("data-id"),
      function (response) {
        window.location.href = "/productPart/products.php"

      },
      function (xhr, status, error) {
        console.error(error);
      }
    );
  });
  $("#cards").on("click", ".editBtn", function (e) {
    e.preventDefault();
    window.location.href = "views/edit.php?id=" + $(this).attr("data-id");
  });
});
