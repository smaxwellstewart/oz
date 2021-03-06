// Load modules

var Code = require('code');
var Lab = require('lab');
var Oz = require('../lib');


// Declare internals

var internals = {};


// Test shortcuts

var lab = exports.lab = Lab.script();
var describe = lab.experiment;
var it = lab.test;
var expect = Code.expect;


describe('Scope', function () {

    describe('validate()', function () {

        it('should return null for valid scope', function (done) {

            var scope = ['a', 'b', 'c'];
            var err = Oz.scope.validate(scope);
            expect(err).to.equal(null);
            done();
        });

        it('should return error when scope is null', function (done) {

            var err = Oz.scope.validate(null);
            expect(err).to.exist();
            done();
        });

        it('should return error when scope is not an array', function (done) {

            var err = Oz.scope.validate({});
            expect(err).to.exist();
            done();
        });

        it('should return error when scope contains non-string values', function (done) {

            var scope = ['a', 'b', 1];
            var err = Oz.scope.validate(scope);
            expect(err).to.exist();
            done();
        });

        it('should return error when scope contains duplicates', function (done) {

            var scope = ['a', 'b', 'b'];
            var err = Oz.scope.validate(scope);
            expect(err).to.exist();
            done();
        });

        it('should return error when scope contains empty strings', function (done) {

            var scope = ['a', 'b', ''];
            var err = Oz.scope.validate(scope);
            expect(err).to.exist();
            done();
        });
    });

    describe('isSubset()', function () {

        it('should return true when scope is a subset', function (done) {

            var scope = ['a', 'b', 'c'];
            var subset = ['a', 'c'];
            var isSubset = Oz.scope.isSubset(scope, subset);
            expect(isSubset).to.equal(true);
            done();
        });

        it('should return false when scope is not a subset', function (done) {

            var scope = ['a'];
            var subset = ['a', 'c'];
            var isSubset = Oz.scope.isSubset(scope, subset);
            expect(isSubset).to.equal(false);
            done();
        });

        it('should return false when scope is not a subset but equal length', function (done) {

            var scope = ['a', 'b'];
            var subset = ['a', 'c'];
            var isSubset = Oz.scope.isSubset(scope, subset);
            expect(isSubset).to.equal(false);
            done();
        });

        it('should return false when scope is not a subset due to duplicates', function (done) {

            var scope = ['a', 'c', 'c', 'd'];
            var subset = ['a', 'c', 'c'];
            var isSubset = Oz.scope.isSubset(scope, subset);
            expect(isSubset).to.equal(false);
            done();
        });
    });
});


