"use strict";

var chalk 	= 	require('chalk');

var config 	=  	require('../Config');
var helper	= 	require('./helper');	


class Robot{
	constructor(){
		this.size 			=  		config.tableSize;
		this.position		=		{x:0,y:0,f:'N'}// default position is {x:0,y:0,f:'N'}
		this.facing			=		{
										"N" : "NORTH",
										"S"	: "SOUTH",
										"W"	: "WEST",
										"E"	: "EAST"
 									}
	}
	//To prevent robot from falling, robot's current x or y value should be greater than 0 but less than the given table size that is config.tableSize-1
	preventFalling(value){
		var value =  value;
		if (value <= 0) return 0;
		if (value >= this.size-1) return this.size-1;
		return value; 
	}
	//Set new poistion for Robot
	place(newPosition){
		this.position.x  =	this.preventFalling(parseInt(newPosition.x));
		this.position.y  =	this.preventFalling(parseInt(newPosition.y));
		this.position.f  =	newPosition.f;
		return this.position;
	}

	report(){
		console.log(chalk.cyan.bold(`Output: ${this.position.x},${this.position.y},${this.facing[this.position.f]}`));
	}

	move(){
		var newPosition	 = 	helper.moveHelp(this.position.x,this.position.y,this.position.f);
		this.position.x  =	this.preventFalling(newPosition.x);
		this.position.y  =	this.preventFalling(newPosition.y);
		return this.position;
	}

	left(){
		var newDirection =	helper.leftHelp(this.position.f);
		this.position.f  =	newDirection;
		return this.position;
	}

	right(){
		var newDirection =	helper.rightHelp(this.position.f);
		this.position.f  =	newDirection;
		return this.position;
	}
}


module.exports = Robot;