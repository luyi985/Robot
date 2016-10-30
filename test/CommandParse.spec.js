"use strict";

var config 			= 	require('../Config');
var expect  		= 	require("chai").expect;


var commpandParse			=	require('../app/CommandParse.js');
var readJson				= 	commpandParse.readJson;
var popCommand				=	commpandParse.popCommand;
var trimBeforePlaceCommand	=	commpandParse.trimBeforePlaceCommand;

describe("Command Line Parse", function() {

	it("#readJson()", function() {
		expect(readJson()).to.be.an('array');
	})


	it("#popCommand()", function() {
		var commandList = ["PLACE 1,3,W","LEFT","RIGHT","MOVE","MOVE","LEFT"];
		expect(popCommand(commandList)).to.equal("PLACE 1,3,W");
		expect(popCommand(commandList)).to.equal("LEFT");
		expect(popCommand(commandList)).to.equal("RIGHT");
		expect(popCommand(commandList)).to.equal("MOVE");
		expect(popCommand(commandList)).to.equal("MOVE");
		expect(popCommand(commandList)).to.equal("LEFT");
		expect(popCommand(commandList)).to.be.false;
	})

	it("#trimBeforePlaceCommand() The command list includes a PLACE command", function() {
		var commandList = ["LEFT","RIGHT","MOVE","PLACE 1,3,W","LEFT","RIGHT","MOVE","MOVE","LEFT"];
		trimBeforePlaceCommand(commandList);
		expect(commandList).to.deep.equal(["PLACE 1,3,W","LEFT","RIGHT","MOVE","MOVE","LEFT"]);
	})
	
	it("#trimBeforePlaceCommand() The command list doesn't inclued a PLACE command", function() {
		var commandList = ["LEFT","RIGHT","MOVE","LEFT","RIGHT","MOVE","MOVE","LEFT"];
		trimBeforePlaceCommand(commandList);
		expect(trimBeforePlaceCommand(commandList)).to.be.false;
		expect(commandList).to.deep.equal([]);
	})
})


