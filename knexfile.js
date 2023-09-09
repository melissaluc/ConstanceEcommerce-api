
require('dotenv').config()

module.exports = {
    client: "pg",
    connection: {
        host:process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_LOCAL_USER,
        password: process.env.DB_LOCAL_PASSWORD,
        database: process.env.DB_LOCAL_DBNAME,
        charset: "utf8"

    }
};

console.log(process.env.DB_LOCAL_USER)