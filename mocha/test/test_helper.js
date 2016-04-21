import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import proxyquire from 'proxyquire'
import timekeeper from 'timekeeper'

chai.use(sinonChai);

global.sinon = sinon;
global.expect = chai.expect;
global.proxyquire = proxyquire;
global.timekeeper = timekeeper;
