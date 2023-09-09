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
        // console.log('req  ',req.body)
        const items = req.body
        items.map((item)=>{

            knex("orders")
            .insert({
                order_id:uuidv4(),
                order_no:item.order_no,
                user_id:item.user_id,
                product_uid:item.product_uid,
                quantity: item.quantity,
                created_on:new Date(),
                updated_on:new Date()
            })
            .then((response)=>{
                res.status(200).send({success:true})
           
            })
            .catch((err)=>{console.log(err)})
        })
    })
    .put((req,res)=>{
        // update orders, edit account details

    })

    module.exports = router;