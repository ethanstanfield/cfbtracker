var aheadList = document.getElementById('ahead');
var aheadGamesList = document.getElementById('ahead-games');

function makeLink(team, week) {
  var link = document.createElement('a');
  var rank = getTeamRank(team, week);
  link.setAttribute('data-team', team);
  team = teams[team];
  link.innerHTML = [
    rank, '. ', team.name, ', (', team.wins, '-', team.losses, ')'
  ].join('');
  return link;
}

function whoisabove(team, week) {
  var bigGames;
  var elem;
  var link;
  var rank = getTeamRank(team, week);
  var rankedTeams = getHigherRankedTeams(rank, week);

  for (var i=0, len=rankedTeams.length; i<len; i++) {
    aheadList.appendChild(makeLink(rankedTeams[i], week));
  }

  bigGames = findBigGamesRemaining(teams[rankedTeams[0]], week);
  for (var i=0, len=bigGames.length; i<len; i++) {
    elem = document.createElement('span');
    elem.innerHTML = bigGames[i];
    aheadGamesList.appendChild(elem);
  }

  if (rank <= 4) {
    // DO SOMETHING
  }


  // var result = top25.slice(0, a);
  // if(a <= 3) {
  // document.write(result.join("<br>") + "<br>" + "<br>" + "Currently one of the four teams in for the College Football Playoff.");
  // }
  // else {
  // document.write(result.join("<br>"));
  // }
}

var team = getTeam();
var week = getWeek();
whoisabove(team, week);

$('#ahead').delegate('a', 'click', function(ev) {
  var elem = $(ev.currentTarget);
  var bigGames = findBigGamesRemaining(teams[elem.data('team')], week);
  aheadGamesList.innerHTML = '';
  for (var i=0, len=bigGames.length; i<len; i++) {
    elem = document.createElement('span');
    elem.innerHTML = bigGames[i];
    aheadGamesList.appendChild(elem);
  }
});
