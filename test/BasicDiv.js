'use strict';

const assert = require('assert');
const Float = require('float-ui');
const Float_PS = require('../');

describe('Rendering BasicDiv element', () => {
  before(() => {
    Float.extendElements(Float_PS);
  });

  it('should render a empty element', () => {
    assert.deepEqual(
      Float.renderElement('<BasicDiv></BasicDiv>'),
      '<div style="background: url(\'\'); background-size: cover; font-family: ; cursor: url(\'\'), auto; "></div>'
    );
  });

  it('should render a element', () => {
    assert.deepEqual(
      Float.renderElement('<BasicDiv background="cool.jpg" font="monospace" cursor="epic.png" more="color: blue">Welcome!</BasicDiv>'),
      '<div style="background: url(\'cool.jpg\'); background-size: cover; font-family: monospace; cursor: url(\'epic.png\'), auto; color: blue">Welcome!</div>'
    );
  });
});
