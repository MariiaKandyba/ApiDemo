import { RequestService } from "/shared/services/requestService.js";

$(document).ready(function() {
    const productService = new RequestService("http://api/products");

    $("#createProductBtn").click(function(e) {
        e.preventDefault();

        var title = $("#titleInput").val();
        var price = $("#priceInput").val();

        productService.createEntity({ title: title, price: price }, function(response) {
            if (response.product.length != 0) {
                window.location.href = '../products.php?id=' + response.product[0].id;
            } else {
                window.location.href = './notFound.php';
            }
        }, function(xhr, status, error) {
            console.error("Error creating product:", error);
        });
    });
});
