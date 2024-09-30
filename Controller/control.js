const Allproducts = require("../store/product");
const users = require("../store/users");

const allProduct = (req, res) => {
  res.status(200).json(Allproducts);
};

const query = (req, res) => {
  console.log(req.query);
  req.query;
};

const idParam = (req, res) => {
  const id = parseInt(req.params.id);

  for (const element of Allproducts) {
    if (element.id === id) {
      res.status(200).json(element);
      break;
    } else {
      res.status(404);
    }
  }
};

const newproduct = (req, res) => {
  console.log(req.body);
  res.status(200).json(req.body);
};

const overwrite = (req, res) => {
  const id = parseInt(req.params.id);
  const updated = req.body;
  let productFound = false;

  for (const element of Allproducts) {
    if (element.id === id) {
      Object.assign(element, updated);
      productFound = true;
      res.status(200).json(element);
    }
  }

  if (!productFound) {
    res.status(404).json({ message: "Product not found" });
  }
};

const alluser = (req, res) => {
  res.status(200).json(users);
};

const singleuser = (req, res) => {
  const id = parseInt(req.params.id);

  users.forEach((element) => {
    if (element.id === id) {
      res.status(200).json(element);
    } else {
      res.status(404);
    }
  });
};

const addnewuser = (req, res) => {
  console.log(req.body);

  res.status(200).json(req.body);
};

const overwriteuser = (req, res) => {
  const id=parseInt(req.params.id);
  const updated=req.body;
  let productFound=false;

  for (const element of users) {
    
    if(element.id===id){
        Object.assign(element,updated)
        productFound=true;
        res.status(200).json(element)
    }
    if (!productFound) {
        res.status(404).json({ message: "Product not found" });
      }

  }
};
module.exports = {
  allProduct,
  query,
  idParam,
  newproduct,
  overwrite,
  alluser,
  singleuser,
  addnewuser,
  overwriteuser
};
