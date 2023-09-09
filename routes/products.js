//  return all products
const express = require("express");
const router = express.Router();
const fs = require("fs");

const config = require("../knexfile.js");
const { error } = require("console");
const knex = require("knex")(config);
const corejs = require('core-js')
const lodash = require('lodash')

const { v4: uuidv4 } = require('uuid');


router.route("/")
    .get((req, res)=>{


        const query = knex
        .select(
            "products.product_name",
            "products.product_id",
            "products.description",
            "products.category_1",
            "products.category_2",
            "products.category_3",
            "product_inventory.colour",
            "product_inventory.product_uid",
            "product_inventory.size",
            "product_inventory.materials",
            "product_inventory.units_instock",
            "product_inventory.price",
            "product_inventory.updated_on"
        )
        .from("product_inventory")
        .join("products","product_inventory.product_name", "=", "products.product_name")
        .where("products.status","=","active")


        // convert query object to where clause
        for (const key in req.query) {
            if (req.query.hasOwnProperty(key)) {
                // Add a condition for each property in req.query
                query.where(key,"=", req.query[key]);
            }
        }

        query
        .then((data)=>{
            res.json(data)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
    
//  Return products for the gallery
router.route("/products").get((req, res) => {
    const query= knex
        .select(
        "products.product_name",
        "products.product_id",
        "products.description",
        "products.category_1",
        "products.category_2",
        "products.category_3",
        knex.raw('MAX(product_inventory.price) as max_price'),
        knex.raw('MIN(product_inventory.price) as min_price'),
        knex.raw('MIN(product_inventory.units_instock) as min_units')
        ) // Include max_price in the SELECT clause
        .from("products")
        .innerJoin("product_inventory", function () {
        this.on("product_inventory.product_name", "=", "products.product_name");
        })
        .groupBy(
        "products.product_name",
        "products.product_id", // Include product_id in the GROUP BY clause
        "products.description", // Include other selected columns in the GROUP BY clause
        "products.category_1",
        "products.category_2",
        "products.category_3"
        )
        .where('products.status','=','active')

        
        // convert query object to where clause
        for (const key in req.query) {
            if (req.query.hasOwnProperty(key)) {
                // Add a condition for each property in req.query
                query.where(key,"=", req.query[key]);
            }
        }

        query

        query
        .then((data) => {
        res.json(data);
        })
        .catch((error) => {
        console.log(error);
        res.status(500).json({ error: 'An error occurred.' });
        });
    });


//  Search all db for products
router.route("/product_in").get((req, res) => {
    knex
        .from("products")
        .join("product_inventory", "product_inventory.product_name", "=", "products.product_name")
        .where('products.status','=','active')
        .then((data) => {
        res.json(data);
        })
        .catch((error) => {
        console.log(error);
        res.status(500).json({ error: 'An error occurred.' });
        });
    });







//  Retrieve categories for the Nav Pane
router.route("/categories")
.get((req, res)=>{
    
    knex.select(
        "products.product_id",
        "products.product_name",
        "products.category_1",
        "products.category_2",
        "products.category_3",
        "products.created_on",
    )
    .from('products')
    .join('product_inventory','products.product_name','product_inventory.product_name')
    .where("products.status","=","active")
    .orderBy('category_1')
    .distinct('category_1','category_2','category_3')
    .then((data)=>{

        // const groupedData = lodash.groupBy(data, (item) => item.category_1 +";"+ item.category_2 +";"+ item.category_3);
        const theData = []
        const result = {}
 
        const groupedData = lodash.groupBy(data, (item) => item.category_1);
        const grouped_keys = Object.keys(groupedData)
        grouped_keys.map((key)=>{result[key]=lodash.groupBy(groupedData[key], (item) => item.category_2)})
        for (const [key, value] of Object.entries(result)){
            console.log("key:",key,"\n","value:",Object.keys(value))
            theData.push({'category_1':key,"category_2":value})
        }

        // theData['keys']=Object.keys(result)
        // theData['data']=grouped_keys2
        // const groupedData_1 = lodash.groupBy(groupedData, (item) => item.category_2);


        // console.log("grouped: ",result)
        res.json({data:theData,keys:Object.keys(result)})
    })

})



module.exports = router;