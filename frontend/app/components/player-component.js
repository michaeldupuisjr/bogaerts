import Ember from 'ember';

export default Ember.Component.extend({
  selectedTeam: null,
  tagName: '',

  assignPlayerToTeam: Ember.observer('selectedTeam', function() {
    this.player.set('fantasyTeam', this.selectedTeam);
    this.player.save();
  })
});
