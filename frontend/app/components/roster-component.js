import Ember from 'ember';

var computed = Ember.computed;
var observer = Ember.observer;

var avgTarget = 0.266;
var hrTarget = 234;
var rTarget = 927;
var rbiTarget = 895;
var sbTarget = 140;

export default Ember.Component.extend({
  players: computed('team.players', function() {
    this.updateStats();
    return this.get('team.players');
  }),

  updateStats: observer('team.players', function() {
    var players = this.get('team.players');
    var avgArray = players.mapBy('avg');
    var hrArray = players.mapBy('hr');
    var rArray = players.mapBy('r');
    var rbiArray = players.mapBy('rbi');
    var sbArray = players.mapBy('sb');

    this.set('avgArray', avgArray);
    this.set('hrArray', hrArray);
    this.set('rArray', rArray);
    this.set('rbiArray', rbiArray);
    this.set('sbArray', sbArray);
  }),

  // stat calculations
  avgAverage: computed('avgArray', function() {
    var avgArray = this.get('avgArray');
    var average =  this.get('avgSum') / avgArray.length;
    return average.toFixed(3);
  }),

  avgDifference: computed('avgArray', function() {
    var difference = this.get('avgSum') - avgTarget;
    return difference.toFixed(2);
  }),

  avgPercentage: computed('avgArray', function() {
    var decimal = Math.floor(this.get('avgSum') / avgTarget * 100);
    return decimal + "%";
  }),

  avgSum: computed.sum('avgArray'),

  hrDifference: computed('hrArray', function() {
    return this.get('hrSum') - hrTarget;
  }),

  hrPercentage: computed('hrArray', function() {
    var decimal = Math.floor(this.get('hrSum') / hrTarget * 100);
    return decimal + "%";
  }),

  hrSum: computed.sum('hrArray'),

  rDifference: computed('rArray', function() {
    return this.get('rSum') - rTarget;
  }),

  rPercentage: computed('rArray', function() {
    var decimal = Math.floor(this.get('rSum') / rTarget * 100);
    return decimal + "%";
  }),

  rSum: computed.sum('rArray'),

  rbiDifference: computed('rbiArray', function() {
    return this.get('rbiSum') - rbiTarget;
  }),

  rbiPercentage: computed('rbiArray', function() {
    var decimal = Math.floor(this.get('rbiSum') / rbiTarget * 100);
    return decimal + "%";
  }),

  rbiSum: computed.sum('rbiArray'),

  sbDifference: computed('sbArray', function() {
    return this.get('sbSum') - sbTarget;
  }),

  sbPercentage: computed('sbArray', function() {
    var decimal = Math.floor(this.get('sbSum') / sbTarget * 100);
    return decimal + "%";
  }),

  sbSum: computed.sum('sbArray'),
});
