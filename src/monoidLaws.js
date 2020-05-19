const util = require('util')

const monoidLaws = (M, equals) => ({
  identity: m =>
    equals(m, M.concat(m, M.empty))
    && equals(m, M.concat(M.empty, m)),
  associativity: (m1, m2, m3) => equals(
    M.concat(m1, M.concat(m2, m3)),
    M.concat(M.concat(m1, m2), m3)
  )
})

const testLaws = laws => (m1, m2, m3) =>
  laws.identity(m1)
  && laws.identity(m2)
  && laws.identity(m3)
  && laws.associativity(m1, m2, m3)

module.exports = {
  testLaws,
  monoidLaws
}

