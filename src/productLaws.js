const M = require('./simpleMonoids')
const L = require('./monoidLaws.js')
const eq = (x, y) => x === y

const productLaws = L.monoidLaws(M.ProductMonoid, eq)

module.exports = productLaws

