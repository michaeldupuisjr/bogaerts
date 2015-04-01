import DS from 'ember-data';

var FantasyTeam = DS.Model.extend({
  abbreviation: DS.attr('string'),
  players: DS.hasMany('player'),
  catcher: DS.belongsTo('player'),
  cornerInfielder: DS.belongsTo('player'),
  firstBaseman: DS.belongsTo('player'),
  middleInfielder: DS.belongsTo('player'),
  secondBaseman: DS.belongsTo('player'),
  shortstop: DS.belongsTo('player'),
  thirdBaseman: DS.belongsTo('player'),
  util: DS.belongsTo('player'),
  of1: DS.belongsTo('player'),
  of2: DS.belongsTo('player'),
  of3: DS.belongsTo('player'),
  of4: DS.belongsTo('player'),
  bench1: DS.belongsTo('player'),
  bench2: DS.belongsTo('player'),
  bench3: DS.belongsTo('player'),
  bench4: DS.belongsTo('player'),
  bench5: DS.belongsTo('player'),
});

// FantasyTeam.reopenClass({
  // FIXTURES: [
    // {
      // id: 1,
      // abbreviation: 'MG'
    // },
    // {
      // id: 2,
      // abbreviation: 'SR'
    // },
    // {
      // id: 3,
      // abbreviation: 'MC'
    // },
    // {
      // id: 4,
      // abbreviation: 'MD'
    // },
    // {
      // id: 5,
      // abbreviation: 'BW'
    // },
    // {
      // id: 6,
      // abbreviation: 'JW'
    // },
    // {
      // id: 7,
      // abbreviation: 'DW'
    // },
    // {
      // id: 8,
      // abbreviation: 'TM'
    // },
  // ]
// });

export default FantasyTeam;
