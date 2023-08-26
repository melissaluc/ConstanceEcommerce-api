CREATE TABLE users (
    user_id VARCHAR(50) PRIMARY KEY,
    email_address VARCHAR(50) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    birthdate DATE NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    address_1 VARCHAR(50) NOT NULL,
    address_2 VARCHAR(50) NOT NULL,
    postalcode VARCHAR(20) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL,
    created_on DATE NOT NULL,
    updated_on DATE NOT NULL
)


CREATE TABLE orders (
    item_id VARCHAR(50) PRIMARY KEY,
    order_number VARCHAR(50) NOT NULL,
    user_id VARCHAR(50) NOT NULL,
    product_id VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    price DOUBLE NOT NULL,
    created_on DATE NOT NULL,
    updated_on DATE NOT NULL
);

CREATE TABLE product_inventory (
    product_uid VARCHAR(50) PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    colour VARCHAR(50),
    size VARCHAR(50) NOT NULL,
    materials TEXT NOT NULL,
    status VARCHAR(50) NOT NULL,
    units_instock INT NOT NULL,
    price DOUBLE NOT NULL,
    created_on DATE NOT NULL,
    updated_on DATE NOT NULL
);


CREATE TABLE products (
    product_id VARCHAR(50) PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    category_1 VARCHAR(50) NOT NULL,
    category_2 VARCHAR(50) NOT NULL,
    category_3 VARCHAR(50) NOT NULL,
    status INT NOT NULL,
    created_on DATE NOT NULL,
    updated_on DATE NOT NULL
);


CREATE TABLE product_reviews (
    product_id VARCHAR(50) PRIMARY KEY,
    user_id VARCHAR(50) NOT NULL,
    review TEXT,
    rating DOUBLE NOT NULL,
    created_on DATE NOT NULL,
    updated_on DATE NOT NULL
);


CREATE TABLE product_history (
    id VARCHAR(50) PRIMARY KEY,
    product_uid VARCHAR(50) NOT NULL,
    price DOUBLE,
    comments TEXT NOT NULL,
    price_change_date DATE NOT NULL

);
