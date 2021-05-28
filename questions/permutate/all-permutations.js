function permute(nums) {
	if (!nums.length) return []
  if (nums.length === 1) return [nums]

	let result = []
  for (let i=0; i < nums.length; i++) {
    const currentNum = nums[i]
    const remainingNums = nums.slice(0, i).concat(nums.slice(i+1))
    
    const remainingNumsPermuted = permute(remainingNums)
    
    for (let j=0; j < remainingNumsPermuted.length; j++) {
			const permutateResult = [currentNum].concat(remainingNumsPermuted[j])
      result.push(permutateResult)
		}
  }
  return result
}

console.log(permute([1,2,3,4]))