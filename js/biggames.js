var teamElim = getTeam();
var week = getWeek();

var bigGames = findBigGamesRemaining(teams[teamElim], week);
var elem;
var list = document.getElementById('biggameList');

for (var i=0, len=bigGames.length; i<len; i++) {
  elem = document.createElement('li');
  elem.innerHTML = bigGames[i];
  list.appendChild(elem);
}
