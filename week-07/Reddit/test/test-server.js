'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../server');

test('Reddit endpoints', (t) => {

  request(app)
    .get('/posts')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      let expected = {
        'id': 2,
        'title': 'Crockford',
        'url': 'http://9gag.com',
        'timestamp': '2019-03-09T20:34:28.000Z',
        'score': 0,
        'owner': 'Khamsinsc',
        'vote': 0
      };
      t.error(err, 'No error');
      t.same(res.body.posts[0], expected, 'return as expected');
    });

  request(app)
    .get('/')
    .expect('Content-Type', /html/)
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.same(res.text.slice(0, 15), '<!DOCTYPE html>', 'return as expected');
    });


  request(app)
    .post('/posts')
    .set({
      "username": "Khamsinsc",
      "content-type" : "application/json"
    })
    .send({
      "title": "supertest",
      "url": "supertest"
    })
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.same( 'id' in res.body[0], true, 'testing post');
    });

  request(app)
    .get('/hello')
    .expect('Content-Type', /text/)
    .expect(200)
    .end(function (err, res) {
      let exprected = 'Hello world!'
      t.error(err, 'No error');
      t.same(res.text, exprected, 'return as expected');
      t.end();
    });
});
