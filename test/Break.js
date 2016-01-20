'use strict';

const assert = require('assert');
const Float = require('float-ui');
const Float_PS = require('../');

describe('Rendering Break element', () => {
  before(() => {
    Float.extendElements(Float_PS);
  });

  it('should render 0 Break elements', () => {
    assert.deepEqual(Float.renderElement('<Break amount="0" />'), '');
  });

  it('should render 1 Break element', () => {
    assert.deepEqual(
      Float.renderElement('<Break amount="1" />'),
      '<br></br>'
    );
  });

  it('should render 2 Break elements', () => {
    assert.deepEqual(
      Float.renderElement('<Break amount="2" />'),
      '<br></br><br></br>'
    );
  });

  it('should render 3 Break elements', () => {
    assert.deepEqual(
      Float.renderElement('<Break amount="3" />'),
      '<br></br><br></br><br></br>'
    );
  });

  it('should render 4 Break elements', () => {
    assert.deepEqual(
      Float.renderElement('<Break amount="4" />'),
      '<br></br><br></br><br></br><br></br>'
    );
  });
});
