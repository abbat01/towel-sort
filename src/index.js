
module.exports = function towelSort(matrix) {
  if (matrix === undefined) {
    return []
  } else {
    let newMatrix = matrix.reduce((acc, cur, i) => {
      return acc.concat((!(i % 2) ? cur : cur.reverse()));
    }, [])
    return newMatrix
  }
}

