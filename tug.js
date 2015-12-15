function sum_array(array){
	return array.reduce(function(a,b){
		return a +b;
	});
}

var teams = [[1,2,3,4,5], [1,2,3,4,5]];

function tug_o_war(teams){


	var teamOne = sum_array(teams[0]);
	var teamTwo = sum_array(teams[1]);

	if(teamOne>teamTwo){
		return "Team One Wins";
	}
	else if(teamOne < teamTwo){
		return "Team Two Wins";
	}
	else { 
		var anchor1 = teams[0][0];
		var anchor2 = teams[1][teams[1].length-1];
		console.log(anchor1);
		console.log(anchor2);
		if(anchor1 > anchor2){
			return "Team 1 anchor wins!";
		}
		else if(anchor2 > anchor1){
			return "Team 2 anchor wins!";
		}
		else{
			return "it is a tie!";
		}
		}
};
