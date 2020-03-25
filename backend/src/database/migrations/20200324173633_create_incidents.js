
exports.up = function(knex) {
      //cria tabela 'incidents' com os campos de dentro da função
      return knex.schema.createTable('incidents', function(table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); //chave estrangeira
        
        table.foreign('ong_id').references('id').inTable('ongs'); //liga chave estrangeira a tabela de referencia
        
    });
};

exports.down = function(knex) {
  //apaga a tabela caso der algum erro
  return knex.schema.dropTable('incidents');
};
