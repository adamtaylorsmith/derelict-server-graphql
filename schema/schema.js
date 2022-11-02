const Archery = require('../models/Archery')
const Basketball = require('../models/Basketball')
const Bicycling = require('../models/Bicycling')
const Bowling = require('../models/Bowling')
const Cornhole = require('../models/Cornhole')
const DiscGolf = require('../models/DiscGolf')
const Kayak = require('../models/Kayak')
const Pickleball = require('../models/Pickleball')
const Sprint = require('../models/Sprint')
const TeamInfo = require('../models/TeamInfo')
const Volleyball = require('../models/Volleyball')

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType,
} = require('graphql');

const ArcheryType = new GraphQLObjectType({
    name: 'Archery',
    fields: () => ({
      id: { type: GraphQLID },
      teamname: { type: GraphQLString },
      teamrole: { type: GraphQLString },
      score: { type: GraphQLInt },
      arrowone: { type: GraphQLInt },
      arrowtwo: { type: GraphQLInt },
      arrowthree: { type: GraphQLInt },
      arrowfour: { type: GraphQLInt },
      arrowfive: { type: GraphQLInt },
      arrowsix: { type: GraphQLInt },
      arrowseven: { type: GraphQLInt },
      arroweight: { type: GraphQLInt },
      arrownine: { type: GraphQLInt },
      arrowten: { type: GraphQLInt },
    }),
});
const BasketballType = new GraphQLObjectType({
    name: 'Basketball',
    fields: () => ({
      id: { type: GraphQLID },
      teamname: { type: GraphQLString },
      teamrole: { type: GraphQLString },
      score: { type: GraphQLInt },
      start: { type: GraphQLInt },
      finish: { type: GraphQLInt },
    }),
});
const BicyclingType = new GraphQLObjectType({
  name: 'Bicycling',
  fields: () => ({
    id: { type: GraphQLID },
    teamname: { type: GraphQLString },
    teamrole: { type: GraphQLString },
    score: { type: GraphQLInt },
    start: { type: GraphQLInt },
    finish: { type: GraphQLInt },
  }),
});
const BowlingType = new GraphQLObjectType({
  name: 'Bowling',
  fields: () => ({
    id: { type: GraphQLID },
    teamname: { type: GraphQLString },
    teamrole: { type: GraphQLString },
    pins: { type: GraphQLInt },
    teamscore: { type: GraphQLInt },
  }),
});
const CornholeType = new GraphQLObjectType({
  name: 'Cornhole',
  fields: () => ({
    id: { type: GraphQLID },
    teamname: { type: GraphQLString },
    teamrole: { type: GraphQLString },
    score: { type: GraphQLInt },
    roundonescore: { type: GraphQLInt },
    roundtwoscore: { type: GraphQLInt },
    roundthreescore: { type: GraphQLInt },
    roundfourscore: { type: GraphQLInt },
    roundfivescore: { type: GraphQLInt },
    roundsixscore: { type: GraphQLInt },
  }),
});
const DiscGolfType = new GraphQLObjectType({
  name: 'DiscGolf',
  fields: () => ({
    id: { type: GraphQLID },
    teamname: { type: GraphQLString },
    teamrole: { type: GraphQLString },
    score: { type: GraphQLInt },
    roundscore: { type: GraphQLInt },
  }),
});
const KayakType = new GraphQLObjectType({
  name: 'Kayak',
  fields: () => ({
    id: { type: GraphQLID },
    teamname: { type: GraphQLString },
    teamscore: { type: GraphQLInt },
    start: { type: GraphQLInt },
    finish: { type: GraphQLInt },
  }),
});
const PickleballType = new GraphQLObjectType({
  name: 'Pickleball',
  fields: () => ({
    id: { type: GraphQLID },
    teamname: { type: GraphQLString },
    teamrole: { type: GraphQLString },
    score: { type: GraphQLInt },
    roundonescore: { type: GraphQLInt },
    roundtwoscore: { type: GraphQLInt },
    roundthreescore: { type: GraphQLInt },
    roundfourscore: { type: GraphQLInt },
    roundfivescore: { type: GraphQLInt },
    roundsixscore: { type: GraphQLInt },
  }),
});
const SprintType = new GraphQLObjectType({
  name: 'Sprint',
  fields: () => ({
    id: { type: GraphQLID },
    teamname: { type: GraphQLString },
    teamscore: { type: GraphQLInt },
    start: { type: GraphQLInt },
    finish: { type: GraphQLInt },
  }),
});
const TeamInfoType = new GraphQLObjectType({
  name: 'TeamInfo',
  fields: () => ({
    id: { type: GraphQLID },
    teamname: { type: GraphQLString },
    captain: { type: GraphQLString },
    ringer: { type: GraphQLString },
    nonmale: { type: GraphQLString },
    derelict: { type: GraphQLString },
  }),
});
const VolleyballType = new GraphQLObjectType({
  name: 'Volleyball',
  fields: () => ({
    id: { type: GraphQLID },
    teamname: { type: GraphQLString },
    score: { type: GraphQLInt },
    roundonescore: { type: GraphQLInt },
    roundtwoscore: { type: GraphQLInt },
    roundthreescore: { type: GraphQLInt },
    roundfourscore: { type: GraphQLInt },
    roundfivescore: { type: GraphQLInt },
    roundsixscore: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    archerys: {
      type: new GraphQLList(ArcheryType),
      resolve(parent, args) {
        return Archery.find();
      },
    },
    archery: {
      type: ArcheryType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Archery.findById(args.id);
      },
    },
    basketballs: {
      type: new GraphQLList(BasketballType),
      resolve(parent, args) {
        return Basketball.find();
      },
    },
    basketball: {
      type: BasketballType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Basketball.findById(args.id);
      },
    },
    bicyclings: {
      type: new GraphQLList(BicyclingType),
      resolve(parent, args) {
        return Bicycling.find();
      },
    },
    bicycling: {
      type: BicyclingType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Bicycling.findById(args.id);
      },
    },
    bowlings: {
      type: new GraphQLList(BowlingType),
      resolve(parent, args) {
        return Bowling.find();
      },
    },
    bowling: {
      type: BowlingType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Bowling.findById(args.id);
      },
    },
    cornholes: {
      type: new GraphQLList(CornholeType),
      resolve(parent, args) {
        return Cornhole.find();
      },
    },
    cornhole: {
      type: CornholeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Cornhole.findById(args.id);
      },
    },
    discgolfs: {
      type: new GraphQLList(DiscGolfType),
      resolve(parent, args) {
        return DiscGolf.find();
      },
    },
    discgolf: {
      type: DiscGolfType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return DiscGolf.findById(args.id);
      },
    },
    kayaks: {
      type: new GraphQLList(KayakType),
      resolve(parent, args) {
        return Kayak.find();
      },
    },
    kayak: {
      type: KayakType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Kayak.findById(args.id);
      },
    },
    pickleballs: {
      type: new GraphQLList(PickleballType),
      resolve(parent, args) {
        return Pickleball.find();
      },
    },
    PickleballType: {
      type: PickleballType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Pickleball.findById(args.id);
      },
    },
    sprints: {
      type: new GraphQLList(SprintType),
      resolve(parent, args) {
        return Sprint.find();
      },
    },
    sprint: {
      type: SprintType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Sprint.findById(args.id);
      },
    },
    teaminfos: {
      type: new GraphQLList(TeamInfoType),
      resolve(parent, args) {
        return TeamInfo.find();
      },
    },
    teaminfo: {
      type: TeamInfoType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return TeamInfo.findById(args.id);
      },
    },
    volleyballs: {
      type: new GraphQLList(VolleyballType),
      resolve(parent, args) {
        return Volleyball.find();
      },
    },
    volleyball: {
      type: VolleyballType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Volleyball.findById(args.id);
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addArchery: {
      type: ArcheryType,
      args: {
        teamname: { type: GraphQLNonNull(GraphQLString) },
        teamrole: { type: GraphQLNonNull(GraphQLString) },
        score: { type: GraphQLInt },
        arrowone: { type: GraphQLInt },
        arrowtwo: { type: GraphQLInt },
        arrowthree: { type: GraphQLInt },
        arrowfour: { type: GraphQLInt },
        arrowfive: { type: GraphQLInt },
        arrowsix: { type: GraphQLInt },
        arrowseven: { type: GraphQLInt },
        arroweight: { type: GraphQLInt },
        arrownine: { type: GraphQLInt },
        arrowten: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const archery = new Archery({
          teamname: args.teamname,
          teamrole: args.teamrole,
          score: args.score,
          arrowone: args.arrowone,
          arrowtwo: args.arrowtwo,
          arrowthree: args.arrowthree,
          arrowfour: args.arrowfour,
          arrowfive: args.arrowfive,
          arrowsix: args.arrowsix,
          arrowseven: args.arrowseven,
          arroweight: args.arroweight,
          arrownine: args.arrownine,
          arrowten:args.arrowten,
        });
        return archery.save();
      }
    },
    // deleteArchery: {
    //   type: ArcheryType,
    //   args: {
    //     id: { type: GraphQLNonNull(GraphQLID) },
    //   },
    //   resolve(parent, args) {
    //     Archery.find({ archeryId: args.id }).then((archerys) => {
    //       archerys.forEach((archery) => {
    //         archery.remove();
    //       });
    //     });
    //     return Archery.findByIdAndRemove(args.id);
    //   },
    // },
    addBasketball: {
      type: BasketballType,
      args: {
        teamname: { type: GraphQLNonNull(GraphQLString) },
        teamrole: { type: GraphQLNonNull(GraphQLString) },
        score: { type: GraphQLInt },
        start: { type: GraphQLInt },
        finish: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const basketball = new Basketball({
          teamname: args.teamname,
          teamrole: args.teamrole,
          score: args.score,
          start: args.start,
          finish: args.finish,
        });
        return basketball.save();
      }
    },
    addBicycling: {
      type: BicyclingType,
      args: {
        teamname: { type: GraphQLNonNull(GraphQLString) },
        teamrole: { type: GraphQLNonNull(GraphQLString) },
        score: { type: GraphQLInt },
        start: { type: GraphQLInt },
        finish: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const bicycling = new Bicycling({
          teamname: args.teamname,
          teamrole: args.teamrole,
          score: args.score,
          start: args.start,
          finish: args.finish,
        });
        return bicycling.save();
      }
    },
    addBowling: {
      type: BowlingType,
      args: {
        teamname: { type: GraphQLNonNull(GraphQLString) },
        teamrole: { type: GraphQLNonNull(GraphQLString) },
        pins: { type: GraphQLInt },
        teamscore: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const bowling = new Bowling({
          teamname: args.teamname,
          teamrole: args.teamrole,
          pins: args.pins,
          teamscore: args.teamscore,
        });
        return bowling.save();
      }
    },
    addCornhole: {
      type: CornholeType,
      args: {
        teamname: { type: GraphQLNonNull(GraphQLString) },
        teamrole: { type: GraphQLNonNull(GraphQLString) },
        score: { type: GraphQLInt },
        roundonescore: { type: GraphQLInt },
        roundtwoscore: { type: GraphQLInt },
        roundthreescore: { type: GraphQLInt },
        roundfourscore: { type: GraphQLInt },
        roundfivescore: { type: GraphQLInt },
        roundsixscore: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const cornhole = new Cornhole({
          teamname: args.teamname,
          teamrole: args.teamrole,
          score: args.score,
          roundonescore: args.roundonescore,
          roundtwoscore: args.roundtwoscore,
          roundthreescore: args.roundthreescore,
          roundfourscore: args.roundfivescore,
          roundfivescore: args.roundfivescore,
          roundsixscore: args.roundsixscore
        });
        return cornhole.save();
      }
    },
    addDiscGolf: {
      type: DiscGolfType,
      args: {
        teamname: { type: GraphQLNonNull(GraphQLString) },
        teamrole: { type: GraphQLNonNull(GraphQLString) },
        score: { type: GraphQLInt },
        roundscore: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const discgolf = new DiscGolf({
          teamname: args.teamname,
          teamrole: args.teamrole,
          score: args.score,
          roundscore: args.roundscore,
        });
        return discgolf.save();
      }
    },
    addKayak: {
      type: KayakType,
      args: {
        teamname: { type: GraphQLNonNull(GraphQLString) },
        teamscore: { type: GraphQLInt },
        start: { type: GraphQLInt },
        finish: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const kayak = new Kayak({
          teamname: args.teamname,
          teamscore: args.score,
          start: args.start,
          finish: args.finish,
        });
        return kayak.save();
      }
    },
    addPickleball: {
      type: PickleballType,
      args: {
        teamname: { type: GraphQLNonNull(GraphQLString) },
        teamrole: { type: GraphQLNonNull(GraphQLString) },
        score: { type: GraphQLInt },
        roundonescore: { type: GraphQLInt },
        roundtwoscore: { type: GraphQLInt },
        roundthreescore: { type: GraphQLInt },
        roundfourscore: { type: GraphQLInt },
        roundfivescore: { type: GraphQLInt },
        roundsixscore: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const pickleball = new Pickleball({
          teamname: args.teamname,
          teamrole: args.teamrole,
          score: args.score,
          roundonescore: args.roundonescore,
          roundtwoscore: args.roundtwoscore,
          roundthreescore: args.roundthreescore,
          roundfourscore: args.roundfivescore,
          roundfivescore: args.roundfivescore,
          roundsixscore: args.roundsixscore,
        });
        return pickleball.save();
      }
    },
    addSprint: {
      type: SprintType,
      args: {
        teamname: { type: GraphQLNonNull(GraphQLString) },
        teamscore: { type: GraphQLInt },
        start: { type: GraphQLInt },
        finish: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const sprint = new Sprint({
          teamname: args.teamname,
          teamscore: args.score,
          start: args.start,
          finish: args.finish,
        });
        return sprint.save();
      }
    },
    addTeamInfo: {
      type: TeamInfoType,
      args: {
        teamname: { type: GraphQLNonNull(GraphQLString) },
        captain: { type: GraphQLNonNull(GraphQLString) },
        ringer: { type: GraphQLNonNull(GraphQLString) },
        nonmale: { type: GraphQLNonNull(GraphQLString) },
        derelict: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const teaminfo = new TeamInfo({
          teamname: args.teamname,
          captain: args.captain,
          ringer: args.ringer,
          nonmale: args.nonmale,
          derelict: args.derelict,
        });
        return teaminfo.save();
      }
    },
    addVolleyball: {
      type: VolleyballType,
      args: {
        teamname: { type: GraphQLNonNull(GraphQLString) },
        score: { type: GraphQLInt },
        roundonescore: { type: GraphQLInt },
        roundtwoscore: { type: GraphQLInt },
        roundthreescore: { type: GraphQLInt },
        roundfourscore: { type: GraphQLInt },
        roundfivescore: { type: GraphQLInt },
        roundsixscore: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const volleyball = new Volleyball({
          teamname: args.teamname,
          score: args.score,
          roundonescore: args.roundonescore,
          roundtwoscore: args.roundtwoscore,
          roundthreescore: args.roundthreescore,
          roundfourscore: args.roundfivescore,
          roundfivescore: args.roundfivescore,
          roundsixscore: args.roundsixscore,
        });
        return volleyball.save();
      }
    },
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});