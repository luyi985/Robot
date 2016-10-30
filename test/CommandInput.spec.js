"use strict";

var fs 		= 	require('fs');
var config 	= 	require('../Config');
var expect  = 	require("chai").expect;

describe("Command Line Input", function() {
	it("After Input, there will be a json file generated", function() {
		expect(fs.existsSync(config.dataLocation)).to.equal(true);
	})
	it("The file content should not be empty", function() {
		var content = fs.readFileSync(config.dataLocation);
		expect(JSON.parse(content)).to.be.an('array');
	})
})