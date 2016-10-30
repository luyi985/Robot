var config		=		require('../Config');
module.exports={
	//When moving or turning, robot's next position caculation and facing are  varing according to current facing:
	moveHelp 	: 	function(x,y,f){
		switch (f){

			case 'N': //current facing North
				return {
							x 	: 	x,
							y 	: 	y+1
						}
			case 'S': //current facing South
				return {
							x 	: 	x,
							y 	: 	y-1
						}
			case 'W': //current facing West
				return {
							x 	: 	x-1,
							y 	: 	y
						}
			case 'E': //current facing East
				return {
							x 	: 	x+1,
							y 	: 	y,
						}
			default:
				return {
					x,
					y
				};
			}
	},

	leftHelp	: 	function(f){
		switch (f){
			case 'N':
				return 'W';
			case 'S':
				return 'E';
			case 'W':
				return 'S';
			case 'E':
				return 'N';
			default:
				return f;
		}
	},

	rightHelp	: 	function(f){
		switch (f){
			case 'N':
				return 'E';
			case 'S':
				return 'W';
			case 'W':
				return 'N';
			case 'E':
				return 'S'
			default:
				return f;
		}
	},
	// each vaild command should contain a givein command keyword(eg MOVING LEFT PLACE ...)
	commandInputValidate : function(command){
		return config.commandKeyWords.some(function(keyWord){
			return command.trim().indexOf(keyWord)>=0;
		})
	}
}