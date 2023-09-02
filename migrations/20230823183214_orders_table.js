/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


exports.up = function(knex) {
    return knex.schema.createTable('orders', (table) => {
        table.uuid('order_id').primary();
        table.string('order_no').notNullable();
        table.string('user_id').notNullable();
        table.string('product_id').notNullable();
        table.integer('quantity').notNullable();
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
    return knex.schema.dropTable('orders');
};
