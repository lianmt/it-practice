let quickSort = function(arr) {
  if (arr.length <= 1) { return arr }

  let k = Math.floor(arr.length / 2)
  let v = arr.splice(k, 1)[0]
  let l = []
  let r = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < v) {
      l.push(arr[i])
    } else {
      r.push(arr[i])
    }
  }

  return quickSort(l).concat([v], quickSort(r))
}
quickSort([9,3,5,78,2345,61,13,43,732134])