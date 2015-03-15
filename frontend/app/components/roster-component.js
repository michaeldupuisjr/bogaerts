import Ember from 'ember';

var computed = Ember.computed;

export default Ember.Component.extend({
  players: computed('team.players', function() {
    return this.get('team.players');
  }),

  // team stats for computed property calculations
  hrArray: computed('team.players', function() {
    return this.get('team.players').mapBy('hr');
  }),
  paArray: computed('team.players', function() {
    return this.get('team.players').mapBy('pa');
  }),

  // stat calculations
  hrDifference: computed('hrArray', function() {
    return 234 - this.get('hrSum');
  }),
  hrPercentage: computed('hrArray', function() {
    var decimal = Math.floor(this.get('hrSum') / 234 * 100);
    return decimal + "%";
  }),
  hrSum: computed.sum('hrArray'),
  paSum: computed.sum('paArray'),
});
