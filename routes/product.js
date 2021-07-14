const express = require("express");
const router = express.Router();

const { createProduct,getProduct,photo, getProductById ,getAllUniqueCategories,updateProduct,deleteProduct,getAllProducts} = require("../controllers/product");
const { isAdmin, isAuthenticated, isSignedIn } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//params
router.param("userId", getUserById);
router.param("productId", getProductById);

//actual routes
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);

// read routes
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//delete product
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteProduct
);

//update product
router.put(
    "/product/:productId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    updateProduct
  );
  

  //listening route
  router.get("/products",getAllProducts);

  router.get("/products/categories",getAllUniqueCategories)

module.exports = router;
