import Ember from 'ember';

var isEmpty = Ember.isEmpty;

export default Ember.Component.extend({
  hasBeenDrafted: Ember.computed.bool('player.fantasyTeam'),
  rank: Ember.computed('player', function() {
    var players = this.get("players");
    var player = this.get("player");

    return players.indexOf(player) + 1;
  }),
  selectedTeam: null,
  tagName: '',

  assignPlayerToTeam: Ember.observer('selectedTeam', function() {
    if (this.selectedTeam === null) { return ; }

    var fantasyTeamPos;
    var position = this.player.get('pos');

    if (position === 'C' && isEmpty(this.selectedTeam.get('catcher'))) {
      fantasyTeamPos = 'catcher';
    } else if (position === "1B" && isEmpty(this.selectedTeam.get('firstBaseman'))) {
      fantasyTeamPos = 'firstBaseman';
    } else if (position === "2B" && isEmpty(this.selectedTeam.get('secondBaseman'))) {
      fantasyTeamPos = 'secondBaseman';
    } else if (position === "SS" && isEmpty(this.selectedTeam.get('shortstop'))) {
      fantasyTeamPos = 'shortstop';
    } else if (position === "3B" && isEmpty(this.selectedTeam.get('thirdBaseman'))) {
      fantasyTeamPos = 'thirdBaseman';
    } else if ((position === "2B" || position === "SS") && isEmpty(this.selectedTeam.get('middleInfielder'))) {
      fantasyTeamPos = 'middleInfielder';
    } else if ((position === "1B" || position === "3B") && isEmpty(this.selectedTeam.get('cornerInfielder'))) {
      fantasyTeamPos = 'cornerInfielder';
    } else if (position === "UTIL" && isEmpty(this.selectedTeam.get('util'))) {
      fantasyTeamPos = 'util';
    } else if (position === "OF") {
      if (isEmpty(this.selectedTeam.get('of1'))) {
        fantasyTeamPos = 'of1';
      } else if (isEmpty(this.selectedTeam.get('of2'))) {
        fantasyTeamPos = 'of2';
      } else if (isEmpty(this.selectedTeam.get('of3'))) {
        fantasyTeamPos = 'of3';
      } else if (isEmpty(this.selectedTeam.get('of4'))) {
        fantasyTeamPos = 'of4';
      } else if (isEmpty(this.selectedTeam.get('util'))) {
        fantasyTeamPos = 'util';
      } else if (isEmpty(this.selectedTeam.get('bench1'))) {
        fantasyTeamPos = 'bench1';
      } else if (isEmpty(this.selectedTeam.get('bench2'))) {
        fantasyTeamPos = 'bench2';
      } else {
        return alert("You don't have a position for this player.");
      }
    } else if (position !== 'P' && isEmpty(this.selectedTeam.get('util'))) {
      fantasyTeamPos = 'util';
    } else if (position !== 'P' && isEmpty(this.selectedTeam.get('bench1'))) {
      fantasyTeamPos = 'bench1';
    } else if (position !== 'P' && isEmpty(this.selectedTeam.get('bench2'))) {
      fantasyTeamPos = 'bench2';
    } else if (position !== 'P' && isEmpty(this.selectedTeam.get('bench3'))) {
      fantasyTeamPos = 'bench3';
    } else {
      return alert("You don't have a position for this player.");
    }

    if (this.selectedTeam) {
      this.selectedTeam.set(fantasyTeamPos, this.player);
      this.player.setProperties({ fantasyTeam: this.selectedTeam,
                                  fantasyTeamPos: fantasyTeamPos });

      this.selectedTeam.save();
      this.player.save();
    }

  }),

  actions: {
    dropPlayer: function(player) {
      var position = player.get('fantasyTeamPos');
      var team = player.get('fantasyTeam');

      if (team.get(position) === player) {
        team.set(position, null);
        player.set('fantasyTeam', null);

        team.save();
        player.save();
      } else {
        alert("out of sync");
      }
    }
  }
});
