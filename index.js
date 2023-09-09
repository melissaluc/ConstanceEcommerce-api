const express = require('express');
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 8080; 
const host = process.env.DB_HOST
//  routes
// write to users
// write to orders

const app = express();
app.use(cors());
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(express.static('public'));


// const usersRouter = require('./routes/users');
// app.use('/api/v1/users', usersRouter);

const productInventoryRouter = require('./routes/products.js');
app.use('/api/v1/product_inventory', productInventoryRouter);

// const productsRouter = require('./routes/products');
// app.use('/api/v1/products', productsRouter);

const ordersRouter = require('./routes/orders');
app.use('/api/v1/orders', ordersRouter);

const reviewsRouter = require('./routes/reviews.js');
app.use('/api/v1/reviews', reviewsRouter);

const usersRouter = require('./routes/users');
app.use('/api/v1/users', usersRouter);

app.listen(port, ()=>console.log(`server running at ${host}`))

app.get("/",(req,res)=>{
    res.status(200).send('constance_luxury_db')
})


function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}