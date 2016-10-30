
"use strict";

var chalk 			= 	require('chalk');
var commpandParse	= 	require('./app/CommandParse');
var Robot 			= 	require('./app/Robot');



var robot 					=   new Robot(); 	

var readJson 				=	commpandParse.readJson;
var	popCommand				=	commpandParse.popCommand;
var trimBeforePlaceCommand	=	commpandParse.trimBeforePlaceCommand;


function commandMaping(command){
	switch ( command ){
		case "MOVE":
			robot.move();
		break;
		case "LEFT":
			robot.left();
		break;
		case "RIGHT":
			robot.right();
		break;
		case "REPORT":
			robot.report();
		break;
		default:
			if(command.indexOf("PLACE")>=0){
				var position=command.split(" ")[1].split(",");
				robot.place({x:position[0],y:position[1],f:position[2]});
			}
	}
}



var commandList		=	readJson();

console.log(chalk.green.bold("Command Input:"));
console.log(chalk.green.bold(commandList?commandList.join('\r\n'):"Input invalid"));

if(trimBeforePlaceCommand(commandList)){
	commandList.map(function(command){
		commandMaping(command);
	})
}

