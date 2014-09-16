function getTeam() {
  var match = window.location.href.match(/(\w+).html/);
  if (match) {
    return match[1];
  }
  return null;
}

function getWeek() {
  var match = window.location.href.match(/\?week=(\d+)/);
  if (match) {
    return parseInt(match[1], 10);
  }
  return 4;
}

function getTeamRank(team, week) {
  return teamRanks[week - 1].indexOf(team) + 1;
}

function getHigherRankedTeams(rank, week) {
  return teamRanks[week - 1].slice(0, rank - 1);
}

function findLosses(games) {
  var game;
  var losses = [];
  for (var i=0, len=games.length; i<len; i++) {
    game = games[i];
    if (game && game.match(/LOSS/)) {
      losses.push(game);
    }
  }
  return losses;
}

function findBigGamesRemaining(team, week) {
  var game;
  var rankedGames = [];
  for (var i=0, len=team.sched.length; i<len; i++) {
    game = team.sched[i];
    if (game && game.match(/#/) && (i + 1 >= week)) {
      rankedGames.push(game);
    }
  }
  return rankedGames;
}
