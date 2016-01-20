'use strict';

const Float = require('float-ui');

Float.createElement('Break', {
  getDefaultProps: function() {
    return {amount: 1};
  },

  render: function() {
    let br = '';
    while (this.props.amount--) {
      br += '<br>';
    }
    return br;
  }
});

module.exports = Float.getElements()['Break'];
