import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      fantasyTeams: this.store.find('fantasyTeam'),
      players: this.store.find('player')
    })
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    this.controllerFor('auction').set('fantasyTeams', model.fantasyTeams);
    this.controllerFor('auction').set('mdFantasyTeam', model.fantasyTeams.filterBy('abbreviation', 'MD')[0]);
    this.controllerFor('auction').set('players', model.players);
  }
});
