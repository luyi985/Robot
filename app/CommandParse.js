"use strict";

var fs 		= 	require('fs');
var config 	= 	require('../Config');


function readJson(){
	var data			=		[];
	if(fs.existsSync(config.dataLocation)){
		var content 	= 		fs.readFileSync(config.dataLocation);
		var data		=		JSON.parse(content);
		if(typeof data 	=== 	"object" && data.length>0){
			return data;
		}
	}
}

function trimBeforePlaceCommand(commandList) {
	while(commandList.length>0){
		if(commandList[0].indexOf("PLACE")>=0) return true;	
		commandList.shift();
	}
	return false;
}


function popCommand(commandList){
	if(commandList.length <= 0) return false;
	return commandList.shift()
}




module.exports	=	 {
	readJson,
	popCommand,
	trimBeforePlaceCommand
}