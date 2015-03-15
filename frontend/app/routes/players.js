import Ember from 'ember';

export default Ember.Route.extend({
  // beforeModel: function() {
    // var players = [];
    // var player = this.store.createRecord('player', {
      // name: 'Xander Bogaerts',
      // position: '3B',
      // pa: 604,
      // hr: 18
    // });
    // player.save();

    // var fantasyTeam = this.store.createRecord('fantasyTeam', { abbreviation: 'MD' });
    // fantasyTeam.save();
  // },
  model: function() {
    return Ember.RSVP.hash({
      fantasyTeams: this.store.find('fantasyTeam'),
      players: this.store.find('player')
    })
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    this.controllerFor('players').set('fantasyTeams', model.fantasyTeams);
    this.controllerFor('players').set('mdFantasyTeam', model.fantasyTeams.filterBy('abbreviation', 'MD')[0]);
    this.controllerFor('players').set('players', model.players);
  }
});
