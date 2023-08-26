/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


exports.up = function(knex) {
    return knex.schema.createTable('products', (table) => {
        table.uuid('product_id').primary();
        table.string('product_name').notNullable();
        table.text('description').notNullable();
        table.string('category_1').notNullable();
        table.string('category_2').notNullable();
        table.string('category_3').notNullable();
        table.string('status').notNullable();
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
    return knex.schema.dropTable('products');
};
