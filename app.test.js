const supertest = require('supertest');
const {app, server} = require('./app');


test('Get data of all artists', async ()=>{
    const response = await supertest(app).get('/api/artists')

    expect(response.statusCode).toBe(200);
    server.close();
    
})