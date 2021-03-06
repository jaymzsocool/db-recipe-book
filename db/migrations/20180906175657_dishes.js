
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl){
      tbl.increments();
      tbl
        .string('dish')
        .notNullable()
        .unique('dish_name')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('dishes')
};
