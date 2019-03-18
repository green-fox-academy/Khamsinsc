'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('arrow endpoint', (t) => {

  request(app)
    .get('/rocket')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      let expected = {
        "caliber25": 0,
        "caliber30": 0,
        "caliber50": 0,
        "shipstatus": "empty",
        "ready": false
      }
      t.error(err, 'No error');
      t.same(res.body, expected,
        `checking ship's overall status`);

    });

  request(app)
    .get('/rocket/fill?caliber=.50&amount=0')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      let expected = {
        "received": ".50",
        "amount": '0',
        "shipstatus": "empty",
        "ready": false
      }

      t.error(err, 'No error');
      t.same(res.body, expected,
        `check for status after fill and empty if 0 amount`);
    });

  request(app)
    .get('/rocket/fill?caliber=.30&amount=5000')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {

      t.error(err, 'No error');
      t.same(res.body.shipstatus, '40%',
        `checking shipstatus 40%`);
      t.same(res.body.ready, false, 'check shipready false when not 100% loaded');
    });

  request(app)
    .get('/rocket/fill?caliber=.25&amount=7500')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {

      t.error(err, 'No error');
      t.same(res.body.shipstatus, 'full',
        `checking shipstatus full`);
      t.same(res.body.ready, true,
        `check ready true if 100% loaded`);
    });

  request(app)
    .get('/rocket/fill?caliber=.25')  
    .expect(500)
    .end(function (err, res) {
      let expected = 'Please provide the proper data for filling';
      t.error(err, 'No error');
      t.same(res.text, expected);
    });
  t.end();
});
