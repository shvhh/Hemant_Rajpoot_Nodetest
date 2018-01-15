let serv = require('../../');
const chai = require('chai');
const assert = chai.assert;
let http = require('http');
const supertest = require('supertest');
const server = supertest.agent('http://127.0.0.1:6000');
describe('ACCURACY CHECK', function() {
  this.timeout(10000);
  before(() => {
    let server = http.createServer(serv);
    server.listen(6000);
  });

  it('test all element of response', function(done) {
    server.get('/marcopolo').end(function(err, res) {
      let response = res.text.split(',');
      let l = response.length;
      for (let i = 1; i < l; i++) {
        if (i % 28 == 0) assert.equal(response[i - 1], 'marcopolo');
        else if (i % 7 == 0) assert.equal(response[i - 1], 'polo');
        else if (i % 4 == 0) assert.equal(response[i - 1], 'marco');
        else assert.equal(response[i - 1], '' + i);
      }
      done();
    });
  });
});
