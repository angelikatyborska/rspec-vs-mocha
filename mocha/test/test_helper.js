import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import proxyquire from 'proxyquire'
import timekeeper from 'timekeeper'
import old from './support/assertions/old';

chai.use(sinonChai);
chai.use(old);

global.sinon = sinon;
global.expect = chai.expect;
global.proxyquire = proxyquire;
global.timekeeper = timekeeper;
