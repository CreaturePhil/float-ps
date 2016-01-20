'use strict';

const assert = require('assert');
const Float = require('float-ui');
const Float_PS = require('../');

describe('Rendering JoinRoom Element', () => {
  before(() => {
    Float.extendElements(Float_PS);
  });

  it('should render empty JoinRoom element', () => {
    assert.deepEqual(Float.renderElement('<JoinRoom></JoinRoom>'), '<a href="/"><button></button></a>');
  });

  it('should render a JoinRoom element', () => {
    assert.deepEqual(Float.renderElement('<JoinRoom room="casino">Join Here!</JoinRoom>'), '<a href="/casino"><button>Join Here!</button></a>');
  });
});
