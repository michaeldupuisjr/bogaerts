import Ember from 'ember';

var isEmpty = Ember.isEmpty;

export default Ember.Component.extend({
  hasBeenDrafted: Ember.computed.bool('player.fantasyTeam'),
  selectedTeam: null,
  tagName: '',

  assignPlayerToTeam: Ember.observer('selectedTeam', function() {
    if (this.selectedTeam === null) { return ; }

    var position = this.player.get('pos');

    if (position === 'C' && isEmpty(this.selectedTeam.get('catcher'))) {
      var fantasyTeamPos = 'catcher'
    } else if (position === "1B" && isEmpty(this.selectedTeam.get('firstBaseman'))) {
      var fantasyTeamPos = 'firstBaseman'
    } else if (position === "2B" && isEmpty(this.selectedTeam.get('secondBaseman'))) {
      var fantasyTeamPos = 'secondBaseman'
    } else if (position === "SS" && isEmpty(this.selectedTeam.get('shortstop'))) {
      var fantasyTeamPos = 'shortstop'
    } else if (position === "3B" && isEmpty(this.selectedTeam.get('thirdBaseman'))) {
      var fantasyTeamPos = 'thirdBaseman'
    } else if ((position === "2B" || position === "SS") && isEmpty(this.selectedTeam.get('middleInfielder'))) {
      var fantasyTeamPos = 'middleInfielder'
    } else if ((position === "1B" || position === "3B") && isEmpty(this.selectedTeam.get('cornerInfielder'))) {
      var fantasyTeamPos = 'cornerInfielder'
    } else if (position === "UTIL" && isEmpty(this.selectedTeam.get('util'))) {
      var fantasyTeamPos = 'util'
    } else if (position === "OF") {
      if (isEmpty(this.selectedTeam.get('of1'))) {
        var fantasyTeamPos = 'of1'
      } else if (isEmpty(this.selectedTeam.get('of2'))) {
        var fantasyTeamPos = 'of2'
      } else if (isEmpty(this.selectedTeam.get('of3'))) {
        var fantasyTeamPos = 'of3'
      } else if (isEmpty(this.selectedTeam.get('of4'))) {
        var fantasyTeamPos = 'of4'
      } else if (isEmpty(this.selectedTeam.get('util'))) {
        var fantasyTeamPos = 'util'
      } else {
        return alert("You don't have a position for this player.");
      }
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

      if (team.get(position) == player) {
        team.set(position, null);
        player.set('fantasyTeam', null);

        team.save();
        player.save();
      } else {
        alert("out of sync")
      }
    }
  }
});
