const app = require('../server/app.js');
const request = require('supertest');

describe('test for the route', ()=>{
  test('It should response the GET method',()=>{
    request(app).get('/api/restaurant').then((response)=>{
      expect(response.statusCode).toBe(200)
    })
  })
})
