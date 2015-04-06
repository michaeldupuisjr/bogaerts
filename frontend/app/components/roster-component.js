import Ember from 'ember';

var computed = Ember.computed;
var observer = Ember.observer;

var avgTarget = 0.266;
var hrTarget = 234;
var rTarget = 927;
var rbiTarget = 895;
var sbTarget = 140;

export default Ember.Component.extend({
  classNames: 'roster',

  catcher: computed('team.catcher', function() {
    this.updateStats();
    return this.get('team.catcher');
  }),

  firstBaseman: computed('team.firstBaseman', function() {
    this.updateStats();
    return this.get('team.firstBaseman');
  }),

  secondBaseman: computed('team.secondBaseman', function() {
    this.updateStats();
    return this.get('team.secondBaseman');
  }),

  thirdBaseman: computed('team.thirdBaseman', function() {
    this.updateStats();
    return this.get('team.thirdBaseman');
  }),

  shortstop: computed('team.shortstop', function() {
    this.updateStats();
    return this.get('team.shortstop');
  }),

  middleInfielder: computed('team.middleInfielder', function() {
    this.updateStats();
    return this.get('team.middleInfielder');
  }),

  cornerInfielder: computed('team.cornerInfielder', function() {
    this.updateStats();
    return this.get('team.cornerInfielder');
  }),

  of1: computed('team.of1', function() {
    this.updateStats();
    return this.get('team.of1');
  }),

  of2: computed('team.of2', function() {
    this.updateStats();
    return this.get('team.of2');
  }),

  of3: computed('team.of3', function() {
    this.updateStats();
    return this.get('team.of3');
  }),

  of4: computed('team.of4', function() {
    this.updateStats();
    return this.get('team.of4');
  }),

  util: computed('team.util', function() {
    this.updateStats();
    return this.get('team.util');
  }),

  bench1: computed('team.bench1', function() {
    this.updateStats();
    return this.get('team.bench1');
  }),

  bench2: computed('team.bench2', function() {
    this.updateStats();
    return this.get('team.bench2');
  }),

  bench3: computed('team.bench3', function() {
    this.updateStats();
    return this.get('team.bench3');
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
