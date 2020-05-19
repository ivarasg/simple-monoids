const SumMonoid = {
  concat: (x, y) => x + y,
  empty: 0
}

const ProductMonoid = {
  concat: (x, y) => x * y,
  empty: 1
}

const ObjectMonoid = {
  concat: (x, y) => Object.assign({}, x, y),
  empty: {}
}

const AllMonoid = {
  concat: (x, y) => x && y,
  empty: true
}

const fold = M => ms => ms.reduce(M.concat, M.empty)

module.exports = {
  SumMonoid,
  ProductMonoid,
  ObjectMonoid,
  AllMonoid,
  fold
}

