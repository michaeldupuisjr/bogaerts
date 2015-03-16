import Ember from 'ember';

export default Ember.Component.extend({
  hasBeenDrafted: Ember.computed.bool('player.fantasyTeam'),
  selectedTeam: null,
  tagName: '',

  assignPlayerToTeam: Ember.observer('selectedTeam', function() {
    this.player.set('fantasyTeam', this.selectedTeam);
    this.player.save();
  }),

  actions: {
    dropPlayer: function(player) {
      player.set('fantasyTeam', null);
      player.save();
    }
  }
});
