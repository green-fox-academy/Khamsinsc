'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../route');

test('arrow endpoint', (t) => {

  request(app)
    .get('/yondu?distance=20&time=2')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      let expected = {
        "distance": 20,
        "time": 2,
        "speed": 10
      }
      t.error(err, 'No error');
      t.same(res.body, expected,
        `With giving a parameter the status is ok
      and the given respone is the same as expected`);
    });

  request(app)
    .get('/yondu')
    .expect('Content-Type', /text/)
    .expect(500)
    .end(function (err, res) {
      let expected = 'Please provide valid parameters for calculation'
      t.error(err, 'No error');
      t.same(res.text, expected,
        `without giving a parameter the status is not ok
      and the given error respone is the same as expected`);
      t.end();
    });
});
