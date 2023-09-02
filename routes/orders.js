//  return orders for the given user

const express = require("express");
const router = express.Router();
const fs = require("fs");

const config = require("../knexfile.js");
const { error } = require("console");
const knex = require("knex")(config);

const { v4: uuidv4 } = require('uuid');

router.route("/")
    .get((req, res)=>{
        knex.select("*")
        .from("users")
        .join("orders","orders.user_id","=",users.req.body.user_id)
        .then((data)=>{
            res.json(data)
        })
        .catch((error)=>{
            console.log(error)
            res.send(false)
        })
    })
    .post((req,res)=>{
        // SEND USER_ID, PRODUCT_ID, AND QUANTITIY
        // req.body
        req.body.orders.map((item)=>{

            knex("orders")
            .insert({
                order_id:uuidv4(),
                order_no:req.body.order_no,
                user_id:req.body.user_id,
                product_id:item.product_id,
                quantity: item.quantity,
                created_on:Date.now(),
                updated_on:Date.now()
            })

            knex("product_inventory")
            .where('','=',item.product_id)
            .decrement('units_instock',item.quantity)
        })
    })
    .put((req,res)=>{
        // update orders, edit account details

    })

    module.exports = router;