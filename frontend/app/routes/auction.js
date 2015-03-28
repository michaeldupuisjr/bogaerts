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
    this.controllerFor('auction').set('catchers', model.players.filterBy('pos', 'C'));
    this.controllerFor('auction').set('firstBasemen', model.players.filterBy('pos', '1B'));
    this.controllerFor('auction').set('outfielders', model.players.filterBy('pos', 'OF'));
    this.controllerFor('auction').set('secondBasemen', model.players.filterBy('pos', '2B'));
    this.controllerFor('auction').set('shortstops', model.players.filterBy('pos', 'SS'));
    this.controllerFor('auction').set('thirdBasemen', model.players.filterBy('pos', '3B'));
    this.controllerFor('auction').set('designatedHitters', model.players.filterBy('pos', 'UTIL'));
  }
});
