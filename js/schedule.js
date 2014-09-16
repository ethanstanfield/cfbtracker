

// Set variable to hold proper team name for object referencing

var teamSched = getTeam();

//

function deliverSched() {
	var games = teams[teamSched].sched;
  for (var i=0, len=games.length; i<len; i++) {
    if (games[i]) {
      document.write(games[i] + '<br>');
    }
  }
}

if (teamSched) {
  deliverSched(teamSched);
}
