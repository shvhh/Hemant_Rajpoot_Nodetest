let serv = require('../../');
const chai = require('chai');
const assert = chai.assert;
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
const supertest = require('supertest');
const server = supertest.agent('http://127.0.0.1:4000');
describe('SERVER LOAD', function() {
  this.timeout(60000);
  before(done => {
    let server = http.createServer(serv);
    server.listen(4000);
    done();
  });

  it('hit 300 times for output', function(done) {
    for (let i = 0; i < 300; i++) {
      server.get('/marcopolo').end(function(err, res) {
        //console.log(res.text);
        assert.equal(res.text.split(',').length, 1000000);
        //
        //console.log(i, ' ' + res.text.split(',').length);
        if (i == 299) done();
      });
    }
  });
});
