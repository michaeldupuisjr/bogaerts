import Ember from 'ember';

export default Ember.Component.extend({
  hasBeenDrafted: Ember.computed.bool('this.player.fantasyTeam'),
  selectedTeam: null,
  classNameBindings: ['hasBeenDrafted'],
  tagName: 'tr',

  assignPlayerToTeam: Ember.observer('selectedTeam', function() {
    this.player.set('fantasyTeam', this.selectedTeam);

    if (this.selectedTeam === null) {
      this.player.set('hasBeenDrafted', false);
    } else {
      this.player.set('hasBeenDrafted', true);
    }
  })
});
