# Bogaerts
This rotisserie baseball tool allows for a more dynamic draft-day
experience. The user must specify a target goal for each statistical
category, supply her own player projections, and input the number of
fantasy teams in her league. Once the data side is provided, Bogaerts
allows the user "draft" players and project how the team will approach
it's statistical goals.

## Warning: Use at your own risk
This tool was spiked in the spring of 2015. It has no tests, was simply
designed to be run locally, and is not really in a state for public
consumption. With that being said, if you'd like to give it a try, begin
with the following.

### seeder.rb
1. Set the `FIREBASE_URI` environment variable. It should be your app's
   Firebase URI.
1. Update the file name of the csv file you will be using for
   projections.
1. Update the `fantasyTeamAbbreviations` to match those of the teams in
   your league.

### Projections CSV
You will need to have a CSV file with all of your hitter projections
(pitchers are not yet supported). Here's an explanation of the
non-baseball properties we're building out in the `seeder.rb` file:

* `fg_playerid` is the Fangraphs playerid
* `sum` is the overall value of the player
* `value_lower` is the dollar value of the player
* `value_upper` used to represent the higher end of the player's dollar
  value. This is no longer displayed in the template and can be
disregarded.

