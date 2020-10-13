const M = require('./simpleMonoids')
const L = require('./monoidLaws.js')
const eq = (x, y) => x === y

const allLaws = L.monoidLaws(M.AllMonoid, eq)

const test = L.testLaws(allLaws)

const doTestRaw = () =>
     test(true, true, true)
  && test(true, true, false)
  && test(true, false, true)
  && test(true, false, false)
  && test(false, true, true)
  && test(false, true, false)
  && test(false, false, true)
  && test(false, false, false)

const all = M.fold(M.AllMonoid)

const testCases = [
  [true, true, true],
  [true, true, false],
  [true, false, true],
  [true, false, false],
  [false, true, true],
  [false, true, false],
  [false, false, true],
  [false, false, false],
]

const doTestSelf = () => all(
  testCases.map(caseValues => test(...caseValues))
)

module.exports = {
  allLaws,
  doTestRaw,
  doTestSelf,
  doTest: doTestSelf,
  doTestTotal: () => eq(doTestRaw(), doTestSelf()),
  all
}

