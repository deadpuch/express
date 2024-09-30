const express = require("express");
const {allProduct,query,idParam,newproduct,overwrite,alluser,singleuser,addnewuser,overwriteuser} =require("../Controller/control")
const router = express.Router();


router.get("/product",allProduct)

router.get("/product/query", query);

router.get("/product/:id",idParam);

router.post("/newproduct",newproduct);

router.put("/newproduct/:id",overwrite);

router.get("/users",alluser)

router.get("/singleuser/:id",singleuser)

router.post("/newuser",addnewuser)

router.put("/updateuser/:id",overwriteuser)


module.exports = router;
