const M = require('./simpleMonoids')
const L = require('./monoidLaws.js')
const isDeepStrictEqual = util.isDeepStrictEqual

const objectLaws = L.monoidLaws(M.ObjectMonoid, isDeepStrictEqual)

module.exports = objectLaws

