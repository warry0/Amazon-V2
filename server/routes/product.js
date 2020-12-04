const router = require("express").Router();
const Product = require("../models/product");

const upload = require("../middlewares/upload-photo");
// POST req => creer new produit

router.post("/products", upload.single("photo"), async (req, res) => {
  try {
    const product = new Product();
    product.ownerID = req.body.ownerID;
    product.categoryID = req.body.categoryID;
    product.price = req.body.price;
    product.title = req.body.title;
    product.description = req.body.description;
    product.photo = req.file.location;
    product.stockQuantity = req.body.stockQuantity;

    await product.save();

    res.json({
      status: true,
      message: "enregistrer",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// GET req => tt les peoduit
router.get("/products", async (req, res) => {
  try {
    let products = await Product.find().populate("owner category").exec();

    res.json({
      success: true,
      products: products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// GET req => un produit
router.get("/products/:id", async (req, res) => {
  try {
    let product = await Product.findOne({ _id: req.params.id }).populate("owner category").exec();

    res.json({
      success: true,
      product: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// PUT req => ajouter ou mettre a jour
router.put("/products/:id", upload.single("photo"), async (req, res) => {
  try {
    let product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          photo: req.file.location,
          category: req.body.categoryID,
          price: req.body.price,
          stockQuantity: req.body.stockQuantity,
          owner: req.body.ownerID,
        },
      },
      { upsert: true }
    );

    res.json({
      success: true,
      updateProduct: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// DELETE req => one by one
router.delete("/products/:id", async (req, res) => {
  try {
    let deletedProduct = await Product.findOneAndDelete({ _id: req.params.id });

    if (deletedProduct) {
      res.json({
        status: true,
        message: "Produit supprimer",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
