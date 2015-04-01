import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      fantasyTeams: this.store.find('fantasyTeam'),
      players: this.store.find('player')
    })
  },

  setupController: function(controller, model) {
    var catchers = model.players.filterBy('pos', 'C');
    var firstBasemen = model.players.filterBy('pos', '1B');
    var secondBasemen = model.players.filterBy('pos', '2B');
    var thirdBasemen = model.players.filterBy('pos', '3B');
    var shortstops = model.players.filterBy('pos', 'SS');
    var outfielders = model.players.filterBy('pos', 'OF');
    var designatedHitters = model.players.filterBy('pos', 'UTIL');

    this._super(controller, model);
    this.controllerFor('auction').set('fantasyTeams', model.fantasyTeams);
    this.controllerFor('auction').set('mdFantasyTeam', model.fantasyTeams.filterBy('abbreviation', 'MD')[0]);
    this.controllerFor('auction').set('catchers', this.sortDesc(catchers, "sum"));
    this.controllerFor('auction').set('firstBasemen', this.sortDesc(firstBasemen, "sum"));
    this.controllerFor('auction').set('outfielders', this.sortDesc(outfielders, "sum"));
    this.controllerFor('auction').set('secondBasemen', this.sortDesc(secondBasemen, "sum"));
    this.controllerFor('auction').set('shortstops', this.sortDesc(shortstops, "sum"));
    this.controllerFor('auction').set('thirdBasemen', this.sortDesc(thirdBasemen, "sum"));
    this.controllerFor('auction').set('designatedHitters', this.sortDesc(designatedHitters, "sum"));
  },

  sortDesc: function(players, keys) {
    var sortKeys = [keys];

    return players.toArray().sort(function(a, b) {
      for (var i = 0; i < sortKeys.length; i++) {
        var key = sortKeys[i];
        var propA = Ember.get(a, key);
        var propB = Ember.get(b, key);
        // return 1 or -1 else continue to the next sortKey
        var compareValue = Ember.compare(propB, propA);

        if (compareValue) {
          return compareValue;
        }
      }
      return 0;
    });
  }
});
