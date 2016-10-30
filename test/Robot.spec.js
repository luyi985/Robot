"use strict";


var expect    	= 	require("chai").expect;
var Robot 		=  	require('../app/Robot');
var config 		=  	require('../Config');


var robot= new Robot();

describe('Robot Test', function() {
	
	describe('#place() #report', function() {
		it("Robot's current position should be the same as input (the position is in the table area)", function() {
			var newPositionList =[
				{x:0,y:1,f:'N'},
				{x:3,y:1,f:'S'},
				{x:3,y:3,f:'W'},
				{x:2,y:1,f:'E'},
				{x:3,y:1,f:'N'}
			]
			newPositionList.map(function(np){
				var robotPosition = robot.place(np);
				expect(robotPosition).to.be.an('object');
				expect(robotPosition).to.deep.equal(np);
				//robot.report();
			})
    	});


     	it("If the new place position is not in the table area", function() {
     		expect(robot.place({x:-1,y:1000,f:'N'})).to.deep.equal({x:0,y:config.tableSize-1,f:'N'});
     		//robot.report();
			expect(robot.place({x:1,y:-1000,f:'N'})).to.deep.equal({x:1,y:0,f:'N'});
			//robot.report();
			expect(robot.place({x:1,y:200,f:'N'})).to.deep.equal({x:1,y:config.tableSize-1,f:'N'});
			//robot.report();
     	});
	})
});


describe('Robot roam around', function() {

	describe('#MOVE', function() {
		it("Set position to 0,0,E, let the robot move to the end", function() {
			robot.place({x:'0',y:'0',f:'E'});
			expect(robot.move()).to.deep.equal({x:1,y:0,f:'E'});
			expect(robot.move()).to.deep.equal({x:2,y:0,f:'E'});
			expect(robot.move()).to.deep.equal({x:3,y:0,f:'E'});
			expect(robot.move()).to.deep.equal({x:4,y:0,f:'E'});
			expect(robot.move()).to.deep.equal({x:4,y:0,f:'E'});
			expect(robot.move()).to.deep.equal({x:4,y:0,f:'E'});
		})

		it("Set position to 0,0,S, let the robot move to the end", function() {
			robot.place({x:'4',y:'4',f:'S'});
			expect(robot.move()).to.deep.equal({x:4,y:3,f:'S'});
			expect(robot.move()).to.deep.equal({x:4,y:2,f:'S'});
			expect(robot.move()).to.deep.equal({x:4,y:1,f:'S'});
			expect(robot.move()).to.deep.equal({x:4,y:0,f:'S'});
			expect(robot.move()).to.deep.equal({x:4,y:0,f:'S'});
			expect(robot.move()).to.deep.equal({x:4,y:0,f:'S'});
		})

		it("Set position to 0,0,N, let the robot move to the end", function() {
			robot.place({x:'0',y:'0',f:'N'});
			expect(robot.move()).to.deep.equal({x:0,y:1,f:'N'});
			expect(robot.move()).to.deep.equal({x:0,y:2,f:'N'});
			expect(robot.move()).to.deep.equal({x:0,y:3,f:'N'});
			expect(robot.move()).to.deep.equal({x:0,y:4,f:'N'});
			expect(robot.move()).to.deep.equal({x:0,y:4,f:'N'});
			expect(robot.move()).to.deep.equal({x:0,y:4,f:'N'});
		})

		it("Set position to 4,4,W, let the robot move to the end", function() {
			robot.place({x:'4',y:'4',f:'W'});
			expect(robot.move()).to.deep.equal({x:3,y:4,f:'W'});
			expect(robot.move()).to.deep.equal({x:2,y:4,f:'W'});
			expect(robot.move()).to.deep.equal({x:1,y:4,f:'W'});
			expect(robot.move()).to.deep.equal({x:0,y:4,f:'W'});
			expect(robot.move()).to.deep.equal({x:0,y:4,f:'W'});
			expect(robot.move()).to.deep.equal({x:0,y:4,f:'W'});
		})
	})
	describe('#LEFT', function() {
		it("Stand still and keep turning left", function() {
			robot.place({x:0,y:0,f:'N'});
			expect(robot.left()).to.deep.equal({x:0,y:0,f:'W'});
			expect(robot.left()).to.deep.equal({x:0,y:0,f:'S'});
			expect(robot.left()).to.deep.equal({x:0,y:0,f:'E'});
			expect(robot.left()).to.deep.equal({x:0,y:0,f:'N'});
		});
	})
	describe('#RIGHT', function() {
		it("Stand still and keep turning right", function() {
			robot.place({x:0,y:0,f:'N'});
			expect(robot.right()).to.deep.equal({x:0,y:0,f:'E'});
			expect(robot.right()).to.deep.equal({x:0,y:0,f:'S'});
			expect(robot.right()).to.deep.equal({x:0,y:0,f:'W'});
			expect(robot.right()).to.deep.equal({x:0,y:0,f:'N'});
		});
	})
})