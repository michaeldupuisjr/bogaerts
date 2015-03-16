import Ember from 'ember';

var computed = Ember.computed;
var hrTarget = 234;

export default Ember.Component.extend({
  players: computed('team.players', function() {
    return this.get('team.players');
  }),

  // team stats for computed property calculations
  hrArray: computed('team.players', function() {
    return this.get('team.players').mapBy('hr');
  }),

  // stat calculations
  hrDifference: computed('hrArray', function() {
    return hrTarget - this.get('hrSum');
  }),
  hrPercentage: computed('hrArray', function() {
    var decimal = Math.floor(this.get('hrSum') / hrTarget * 100);
    return decimal + "%";
  }),
  hrSum: computed.sum('hrArray'),
});
