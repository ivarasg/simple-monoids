const M = require('./simpleMonoids')
const L = require('./monoidLaws.js')
const all = require('./allLaws.js').all
const eq = (x, y) => x === y

const anyLaws = L.monoidLaws(M.AnyMonoid, eq)

const test = L.testLaws(anyLaws)

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

const doTest = () => all(
  testCases.map(caseValues => test(...caseValues))
)

const any = M.fold(M.AnyMonoid)

module.exports = {
  anyLaws,
  doTest,
  any
}

