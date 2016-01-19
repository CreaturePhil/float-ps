'use strict';

const assert = require('assert');
const Float = require('float-ui');
const Float_PS = require('../');

describe('rendering break', () => {
  before(() => {
    Float.extendElements(Float_PS);
  });

  it('should render 0 break elements', () => {
    assert.deepEqual(Float.renderElement('<break amount="0" />'), '');
  });

  it('should render 1 break element', () => {
    assert.deepEqual(
      Float.renderElement('<break amount="1" />'),
      '<br></br>'
    );
  });

  it('should render 2 break elements', () => {
    assert.deepEqual(
      Float.renderElement('<break amount="2" />'),
      '<br></br><br></br>'
    );
  });

  it('should render 3 break elements', () => {
    assert.deepEqual(
      Float.renderElement('<break amount="3" />'),
      '<br></br><br></br><br></br>'
    );
  });

  it('should render 4 break elements', () => {
    assert.deepEqual(
      Float.renderElement('<break amount="4" />'),
      '<br></br><br></br><br></br><br></br>'
    );
  });
});
