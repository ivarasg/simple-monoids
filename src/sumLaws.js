const M = require('./simpleMonoids')
const L = require('./monoidLaws.js')
const eq = (x, y) => x === y

const sumLaws = L.monoidLaws(M.SumMonoid, eq)

module.exports = sumLaws

