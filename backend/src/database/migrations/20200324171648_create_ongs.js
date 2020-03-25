
exports.up = function(knex) {
  
    //cria tabela 'ongs' com os campos de dentro da função
    return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary;
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
    });
};

exports.down = function(knex) {
  
    //apaga a tabela caso der algum erro
    return knex.schema.dropTable('ongs');
};
