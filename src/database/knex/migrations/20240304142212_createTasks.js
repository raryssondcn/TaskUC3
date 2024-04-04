exports.up = (knex) => {
  return knex.schema.createTable(
    "tasks", (table) => {
        table.increments('id').primary()
        table.string("title").notNullable()
        table.string("description").notNullable()
        table.boolean("isCompleted").defaultTo("false")
        //table.integer("user_id").unsigned().index().references("id").inTable("users")
        table.timestamp("created_at").defaultTo(knex.fn.now())
        table.timestamp("updated_at").defaultTo(knex.fn.now())
    }
  )
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists("tasks")
};
