let arr = [1,2,[3,4, [5,6, [7, [8, 9, 10]]]]]

const flattener = (arr) => {
  let result = []
  arr.forEach((val) => {
    if (Array.isArray(val)) {
      result = result.concat(flattener(val))
    } else {
      result = result.concat([val])
    }
  })

  return result
}

console.log(flattener(arr))