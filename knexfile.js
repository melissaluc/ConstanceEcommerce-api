
require('dotenv').config()

module.exports = {
    client: "pg",
    // version: '15.0',
    connection: {
        host:process.env.DB_HOST,
        port: process.env.PORT,
        user: process.env.DB_LOCAL_USER,
        password: process.env.DB_LOCAL_PASSWORD,
        database: process.env.DB_LOCAL_DBNAME,
        charset: "utf8"
        // connectionString: process.env.DB_URL

    },
    // migrations: {
    //   directory: './migrations',
    // },
    // seeds: {
    //   directory: './seeds',
    // },
};

console.log(process.env.DB_LOCAL_USER)