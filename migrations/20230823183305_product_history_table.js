/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable('product_history', (table) => {
        table.uuid('id').primary();
        table.string('product_uid').notNullable();
        table.double('price',2).notNullable();
        table.text('comments').notNullable();
        table.timestamp('price_change_timestamp').notNullable();
        // table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('product_history');
};
