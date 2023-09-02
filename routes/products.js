//  return all products
const express = require("express");
const router = express.Router();
const fs = require("fs");

const config = require("../knexfile.js");
const { error } = require("console");
const knex = require("knex")(config);

const { v4: uuidv4 } = require('uuid');


router.route("/")
    .get((req, res)=>{
        knex
        .from("products")
        .then((data)=>{
            res.json(data)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
    


router.route("/product")
.get((req, res)=>{


    // console.log('params',req.params.id)
    knex
    .select(
        "products.product_name",
        "products.product_id",
        "products.description",
        "products.category_1",
        "products.category_2",
        "products.category_3",
        "product_inventory.product_uid",
        "product_inventory.colour",
        "product_inventory.size",
        "product_inventory.materials",
        "product_inventory.status",
        "product_inventory.units_instock",
        "product_inventory.price",
        "product_inventory.created_on",
        "product_inventory.updated_on"
    )
    .from("products")
    .join("product_inventory", "product_inventory.product_name","=","products.product_name")
    // .where("product_inventory.product_name","=",req.params.id)
    .andWhere(req.query)
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>{
        console.log(error)
    })
})

module.exports = router;