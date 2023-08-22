const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/productController");

// Documentation

/**
 *  /items?search={search}:
 *   get:
 *    summary: Get products by search value
 *    description: Use to request all products by search value
 *
 *  responses:
 *  '200':
 *   description: A successful response limited to 4 products
 *  '400':
 *  description: Bad request, send a search value
 */
router.get("/items", (req, res) => {
  const search = req.query.search;
  if (!!search) {
    ProductController.getProducts(search, res);
  } else {
    res.status(400).send({
      error: "Ingrese un valor de búsqueda",
    });
  }
});

/**
 * /items/{id}:
 * get:
 * summary: Get product details
 * description: Use to request product details
 *
 * required: true
 * responses:
 * '200':
 * description: A successful response with product details
 * '400':
 * description: Bad request, send a product id
 */

router.get("/items/:id", (req, res) => {
  const productId = req.params.id;
  if (!!productId) {
    ProductController.getProductDetails(productId, res);
  } else {
    res.status(400).send({ error: "Ingrese un id de producto" });
  }
});

module.exports = router;
