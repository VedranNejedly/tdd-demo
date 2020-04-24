var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const convertToRoman = require("../arabicToRoman");

//funkcija ne smije biti dulja od 5-6 redaka

describe('arabicToRoman', function() {
    it('arabicRoman_Number should be a function', function () {
        convertToRoman();
    });
    it('Broj 1 daje "I"', function () {
        assert.strictEqual(convertToRoman(1), "I");
    });
    it('Broj 2 daje "II"', function () {
        assert.strictEqual(convertToRoman(2), "II");
    });
    it('If number 3 convertToRoman should return III', function () {
        assert.strictEqual(convertToRoman(3), "III")
    })
    it('If number 4 convertToRoman should return IV', function () {
        assert.strictEqual(convertToRoman(4), "IV");
    })
    it('If number 5 convertToRoman should return V', function () {
        assert.strictEqual(convertToRoman(5), "V");
    })
    it('If number 6 convertToRoman should return VI', function(){
        assert.strictEqual(convertToRoman(6), "VI");
    })
    it('If number 9 convertToRoman should return IV', function(){
        assert.strictEqual(convertToRoman(9), "IX");
    })
    

    
    

  

});

//R-G-R