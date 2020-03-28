const request = require('supertest');
const app = require('../../src/app');
const connection = require ('../../src/database/connection')
describe('ONG', () => {
    
    beforeEach(async () => {
        await connection.migrate.rollback(); //zera o banco de dados
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "ABC",
                email:"contato@gmail.com",
                whatsapp:"9000000000",
                city:"Leopoldina",
                uf:"MG"
            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});