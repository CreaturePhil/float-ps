'use strict';

const assert = require('assert');
const Float = require('float-ui');
const Float_PS = require('../');

describe('Rendering CommandButton Element', () => {
  before(() => {
    Float.extendElements(Float_PS);
  });

  it('should render empty CommandButton element', () => {
    assert.deepEqual(Float.renderElement('<CommandButton></CommandButton>'), '<button name="send" value=""></button>');
  });

  it('should render a CommandButton element', () => {
    assert.deepEqual(Float.renderElement('<CommandButton command="/me says hi">Click me!</CommandButton>'), '<button name="send" value="/me says hi">Click me!</button>');
  });
});
