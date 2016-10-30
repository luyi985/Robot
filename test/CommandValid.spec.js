"use strict";

var expect    	= 	require("chai").expect;
var helper 		=  	require('../app/helper');

var commandInputValidate 	= 	helper.commandInputValidate;



describe('Command Line Validate', function(){
	it('Each Command should has one command world("PLACE","MOVE","LEFT","RIGHT","REPORT")', function() {
		var commandList= ["PLACE 1,2,E","MOVE","MOVE","LEFT","MOVE","REPORT"];
		commandList.map(function(command){
			expect(commandInputValidate(command)).to.be.true;
		})
	});
})
 
