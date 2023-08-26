/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


// CREATE TABLE product_reviews (
//     product_id VARCHAR(50) PRIMARY KEY,
//     user_id VARCHAR(50) NOT NULL,
//     review TEXT,
//     rating DOUBLE NOT NULL,
//     created_on DATE NOT NULL,
//     updated_on DATE NOT NULL
// );



exports.up = function(knex) {
    return knex.schema.createTable('reviews', (table) => {
        table.uuid('product_id').primary();
        table.string('user_id').notNullable();
        table.text('review').notNullable();
        table.double('rating', 2).notNullable();
        table.timestamp('created_on').notNullable();
        table.timestamp('updated_on').notNullable();
        // table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('reviews');
};
