"use strict";


var config        =         require('../Config');
var keypress      =         require('keypress');
var rl            =         require('readline');
var chalk		  =			require('chalk');

var stdIn         =          process.stdin;
var stdOut        =          process.stdout;


var readLine      =         rl.createInterface(stdIn,stdOut);
var data          =         [];

var helper 		  =  		require('./helper');
var commandInputValidate 	= 	helper.commandInputValidate;


console.log(chalk.green(config.wellcomeCopy));
readLine.prompt();


readLine
.on('line', function(line) {
	var line = 	line.trim().toUpperCase();
	if(commandInputValidate(line)){// command Input validation
  		data.push(line);  		
	}
 	readLine.prompt();
})
.on('close', function() {
  require('fs').writeFileSync(config.dataLocation, JSON.stringify(data));
  console.log(chalk.green.bold(config.afterCommandInput));
  console.log(chalk.green.bold('Data file has been generated and was saved to '+ config.dataLocation));
  process.exit(0);
});


stdIn.on('keypress', function (ch, key) {
  if (key && key.ctrl && key.name == 'c') {
  	readLine.close();
  }
});