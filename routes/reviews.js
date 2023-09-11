


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
            'reviews.product_id',
            'reviews.user_id',
            'reviews.review',
            'reviews.rating',
            'reviews.updated_on',
            'users.first_name',
            'users.last_name'
        )
        .from('reviews')
        .join("users","reviews.user_id","=","users.user_id")
        
        // convert query object to where clause
        for (const key in req.query) {
            if (req.query.hasOwnProperty(key)) {
                // Add a condition for each property in req.query
                query.where(key,"=", req.query[key]);
            }
        }

        query
        .then((data)=>{
            coneols.log(data)
            res.status(200).json(data)
        })
        .catch((err)=>{console.log(err)})
    })
    .post((req,res)=>{
        const {user_id, product_id, review, rating} = req.body
        console.log('debug:',req.body)
        knex('reviews')
        .insert({
            // user_id:uuidv4(),
            user_id:user_id,
            product_id:product_id,
            review:review,
            rating:rating,
            created_on:new Date(),
            updated_on:new Date()
        })
        .then((data)=>{
            res.status(200).json({success:true})
        })
        .catch((err)=>{console.log(err)})
    })


module.exports = router;