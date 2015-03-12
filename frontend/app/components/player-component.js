import Ember from 'ember';

export default Ember.Component.extend({
  cmlTeams: ['MG', 'SR', 'MC', 'MD', 'BW', 'JW', 'DW', 'TM'],
  selectedTeam: null,
  tagName: 'tr',

  assignPlayerToTeam: Ember.observer('selectedTeam', function(foo) {
    this.player.set('cml', this.selectedTeam);
  })
});
