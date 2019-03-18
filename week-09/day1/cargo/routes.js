'use strict';

const express = require('express');
const app = express();
const shipEquipments = {
  "caliber25": 0,
  "caliber30": 0,
  "caliber50": 0,
  "shipstatus": "empty",
  "ready": false
}

const checkStatus = () => {
  ammo = shipEquipments.caliber25 +
    shipEquipments.caliber30 +
    shipEquipments.caliber50;

  shipEquipments.shipstatus = ammo === 0 ? 'empty' :
    ammo === 12500 ? 'full' :
      ammo > 12500 ? 'overloaded' :
        `${ammo / 12500 * 100}%`;

  shipEquipments.ready = shipEquipments === 'full' ? true : false;
}

app.get('/rocket', (req, res) => {
  res.json(shipEquipments);
});

app.get('/rocket/fill', (req, res) => {
  if ('caliber' in req.query && 'amount' in req.query) {
    caliber = req.query.caliber;
    switch (caliber) {
      case '.25':
        shipEquipments.caliber25 += parseFloat(req.query.amount);
        break;
      case '.30':
        shipEquipments.caliber30 += parseFloat(req.query.amount);
        break;
      case '.50':
        shipEquipments.caliber50 += parseFloat(req.query.amount);
        break;
      default:
        res.status(500).send('The ship doesnt receive this type of ammo');
        break;
    }
    checkStatus();
    res.json({
      'received': caliber,
      'amount': req.query.amount,
      'shipstatus': shipEquipments.shipstatus,
      'ready': shipEquipments.ready
    })

  } else {
    res.status(500).send('Please provide the proper data for filling')
    return;
  }
});


module.exports = app;