'use strict';

const fs = require('fs');

let elements = {};

fs.readdirSync(__dirname + '/elements')
  .forEach((filename) => {
    const name = filename.slice(0, -3);
    elements[name] = require('./elements/' + filename);
  });

module.exports = elements;
