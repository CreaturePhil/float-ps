'use strict';

const Float = require('float-ui');

Float.createElement('JoinRoom', {
  getDefaultProps: function() {
    return {room: ''}
  },

  render: function() {
    return '<a href="/' + this.props.room + '"><button>' + this.children + '</button></a>';
  }
});

module.exports = Float.getElements()['JoinRoom'];
