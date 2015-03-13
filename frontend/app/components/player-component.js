import Ember from 'ember';

export default Ember.Component.extend({
  selectedTeam: null,
  tagName: 'tr',

  assignPlayerToTeam: Ember.observer('selectedTeam', function() {
    this.player.set('fantasyTeam', this.selectedTeam);
  })
});
