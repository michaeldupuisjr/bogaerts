import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      players: this.store.find('player'),
      fantasyTeams: this.store.find('fantasyTeam')
    })
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    this.controllerFor('players').set('players', model.players);
    this.controllerFor('players').set('fantasyTeams', model.fantasyTeams);
  }
});
