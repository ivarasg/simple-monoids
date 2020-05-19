const M = require('./simpleMonoids')
const L = require('./monoidLaws.js')
const eq = (x, y) => x === y

const allLaws = L.monoidLaws(M.AllMonoid, eq)

const doTestRaw = () =>
     L.testLaws(allLaws)(true, true, true)
  && L.testLaws(allLaws)(true, true, false)
  && L.testLaws(allLaws)(true, false, true)
  && L.testLaws(allLaws)(true, false, false)
  && L.testLaws(allLaws)(false, true, true)
  && L.testLaws(allLaws)(false, true, false)
  && L.testLaws(allLaws)(false, false, true)
  && L.testLaws(allLaws)(false, false, false)

const all = M.fold(M.AllMonoid)

const doTestSelf = () => all([
  L.testLaws(allLaws)(true, true, true),
  L.testLaws(allLaws)(true, true, false),
  L.testLaws(allLaws)(true, false, true),
  L.testLaws(allLaws)(true, false, false),
  L.testLaws(allLaws)(false, true, true),
  L.testLaws(allLaws)(false, true, false),
  L.testLaws(allLaws)(false, false, true),
  L.testLaws(allLaws)(false, false, false)
])

module.exports = {
  allLaws,
  doTestRaw: doTestRaw,
  doTestSelf: doTestSelf,
  doTestTotal: () => eq(doTestRaw(), doTestSelf()),
  all
}

