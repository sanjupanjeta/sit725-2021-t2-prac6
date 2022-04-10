chai = require('chai'),
chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

var should = chai.should(),
assert = chai.assert,
expect = chai.expect;

var server = require('../server');

describe("Add Two Numbers", function() {
    it("returns status 200 to check if api works", function(done){
      chai.request(server)
      .get('/api/projects/addTwoNumbers/3/5')
        .end(function(err, res){
          res.should.have.status(200);
          res.should.be.json;
          done();
        });
    });
    it("returns statusCode key in body to check if api give right result should be 200", function(done) {
        chai.request(server)
        .get('/api/projects/addTwoNumbers/3/5')
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('result');
            res.body.should.have.property('statusCode');
            done();
          });
    });
    it("returns the result as number", function(done) {
        chai.request(server)
        .get('/api/projects/addTwoNumbers/3/5')
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            expect(res.body.result).to.be.a('number');
            done();
          });
    });
    it("returns the result equal to 8", function(done) {
      chai.request(server)
        .get('/api/projects/addTwoNumbers/3/5')
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            expect(res.body.result).to.equal(8);
            done();
        });
    });
  it("returns the result not equal to 15", function(done) {
    chai.request(server)
      .get('/api/projects/addTwoNumbers/3/5')
        .end(function(err, res){
          res.should.have.status(200);
          res.should.be.json;
          expect(res.body.result).to.not.equal(15);
          done();
      });
  });
});

describe("Add Two strings", function() {
  it("should not returns status 200", function(done) {
      chai.request(server)
      .get('/api/projects/addTwoNumbers/a/b')
      .end(function(err, res){
          res.should.have.status(200);
          done();
      });
  });
  it("returns statusCode key in body to check if api gives right result should be 400", function(done) {
     chai.request(server)
      .get('/api/projects/addTwoNumbers/a/b')
      .end(function(err, res){
          res.should.have.status(200);
          expect(res.body.statusCode).to.equal(400);
          done();
      });
  });
  it("returns the result as null", function(done) {
      chai.request(server)
      .get('/api/projects/addTwoNumbers/a/b')
      .end(function(err, res){
          res.should.have.status(200);
          expect(res.body.result).to.equal(null);
          done();
      });
  });
});

