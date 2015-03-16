require 'Firebase'
require 'smarter_csv'

# Firebase config
base_uri = 'https://amber-inferno-8722.firebaseio.com/'
firebase = Firebase::Client.new(base_uri)

players = SmarterCSV.process('csv/hitters.csv')
players.each do |player|
  firebase.push('players', { avg: player[:avg],
                             fg_playerid: player[:playerid],
                             hr: player[:hr],
                             name: player[:name],
                             pos: player[:pos],
                             r: player[:r],
                             rbi: player[:rbi],
                             sb: player[:sb],
                             sum: player[:sum],
                             value_lower: player[:lower],
                             value_upper: player[:upper] })
end

fantasyTeamAbbreviations = %w{ MG SR MC MD BW JW DW TM}
fantasyTeamAbbreviations.each do |team|
  firebase.push('fantasyTeams', { abbreviation: team })
end

