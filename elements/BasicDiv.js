'use strict';

const Float = require('float-ui');

Float.createElement('BasicDiv', {
    getDefaultProps: function() {
        return {background: '', cursor: '', font: '', more: ''};
    },

    render: function() {
        return '<div style="background: url(\'' + this.props.background + '\'); background-size: cover; font-family: ' + this.props.font + '; cursor: url(\'' + this.props.cursor + '\'), auto; ' + this.props.more+ '">' + this.children + '</div>';
    }
});

module.exports = Float.getElements()['BasicDiv'];
