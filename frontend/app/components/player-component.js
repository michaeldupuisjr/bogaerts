import Ember from 'ember';

export default Ember.Component.extend({
  selectedTeam: null,
  tagName: '',

  assignPlayerToTeam: Ember.observer('selectedTeam', function() {
    this.player.set('fantasyTeam', this.selectedTeam);

    if (this.selectedTeam === null) {
      this.player.set('hasBeenDrafted', false);
    } else {
      this.player.set('hasBeenDrafted', true);
    }
  })
});
