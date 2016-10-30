var config		=		require('../Config');
module.exports={
	moveHelp 	: 	function(x,y,f){
		switch (f){

			case 'N':
				return {
							x 	: 	x,
							y 	: 	y+1
						}
			case 'S':
				return {
							x 	: 	x,
							y 	: 	y-1
						}
			case 'W':
				return {
							x 	: 	x-1,
							y 	: 	y
						}
			case 'E':
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

	commandInputValidate : function(command){
		return config.commandKeyWords.some(function(keyWord){
			return command.trim().indexOf(keyWord)>=0;
		})
	}
}