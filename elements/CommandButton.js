'use strict';

const Float = require('float-ui');

Float.createElement('CommandButton', {
  getDefaultProps: function() {
    return {command: ''}
  },

  render: function() {
    return '<button name="send" value="' + this.props.command + '">' + this.children + '</button>';
  }
});

module.exports = Float.getElements()['CommandButton'];
