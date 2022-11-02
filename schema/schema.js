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
    GraphQLInt
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
});

module.exports = new GraphQLSchema({
  // query: RootQuery,
  // mutation,
});