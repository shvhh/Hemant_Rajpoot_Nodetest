const { readFile } = require('fs');
let serv = require('../../');
const chai = require('chai');
const assert = chai.assert;
let http = require('http');
const supertest = require('supertest');
const server = supertest.agent('http://127.0.0.1:7000');
describe('CHECK FOR CORRECT ANSWER', function() {
  this.timeout(10000);
  before(() => {
    let server = http.createServer(serv);
    server.listen(7000);
  });
  after(() => {
    process.exit();
  });
  it('comparing the input and output files', function(done) {
    server
      .post('/parsenumber')
      .attach('file', __dirname + '/input_user_story_1.txt')
      .set('Accept', 'application/octet-stream')
      .end(function(err, res) {
        readFile(__dirname + '/parsenumber', (err, file) => {
          assert.equal(res.body.toString('ascii'), file.toString('ascii'));
          done();
        });
      });
  });
});
