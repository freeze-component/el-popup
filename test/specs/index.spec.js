import Vue from 'vue';
import ElCompo from './../../src/index.js';

describe('__component_name__', () => {
  it('install', done => {
    expect(ElCompo).to.respondTo('install');
    done();
  })
});