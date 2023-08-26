/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


exports.up = function(knex) {
    return knex.schema.createTable('product_inventory', (table) => {
        table.uuid('product_uid').primary();
        table.string('product_name').notNullable();
        table.string('colour').notNullable();
        table.string('size').notNullable();
        table.string('materials').notNullable();
        table.string('status').notNullable();
        table.bigint('units_instock').notNullable();
        table.double('price').notNullable();
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
    return knex.schema.dropTable('product_inventory');
};
