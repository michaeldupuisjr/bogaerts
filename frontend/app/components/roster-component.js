import Ember from 'ember';

export default Ember.Component.extend({
  players: Ember.computed('team.players', function() {
    return this.get('team.players');
  })
});
