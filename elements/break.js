'use strict';

const Float = require('float-ui');

Float.createElement('break', {
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

module.exports = Float.getElements()['break'];
