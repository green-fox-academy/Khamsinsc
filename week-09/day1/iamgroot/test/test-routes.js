'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
  // TODO: implement it 
  request(app)
    .get('/groot')
    .expect('Content-Type', /json/)
    .expect(500)
    .end(function (err, res) {
      let exprected = {
        'error': 'I am Groot!'
      }
      t.error(err, 'No error');
      t.same(res.body, exprected, 'return as expected');
    });

  request(app)
    .get('/groot?message=whatever')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      let exprected = {
        'received': 'whatever',
        'translated': 'I am Groot!'
      }
      t.error(err, 'No error');
      t.same(res.body, exprected, 'return as expected');
      t.end();
    });
});
