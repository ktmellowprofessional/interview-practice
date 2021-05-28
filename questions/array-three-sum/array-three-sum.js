// Sort the given array.
// Loop over the array and fix the first element of the possible triplet, arr[i].
// Then fix two pointers, one at i + 1 and the other at n – 1. And look at the sum, 
// If the sum is smaller than the required sum, increment the first pointer.
// Else, If the sum is bigger, Decrease the end pointer to reduce the sum.
// Else, if the sum of elements at two-pointer is equal to given sum then print the triplet and break.

let x = [1, 2, 3, 4, 5]
let target = 7
let found = []

const twoPointer = (l ,r, current) => {
  while(l<r){
    const totalSum = current + x[l] + x[r]
    if (totalSum === target) {
      found.push([current, x[l], x[r]])
      return
    } else if (totalSum > target) {
      r--
    } else {
      l++
    }
  }
}

const threeSum = (x, target) => {
    for (let i=0;i<x.length;i++) {
      const current = x[i];
      let leftPointer = i+1
      let rightPointer = x.length - 1

      if (current+x[leftPointer]+x[rightPointer] === target) {
        found.push([current, x[leftPointer], x[rightPointer]])
      } else {
        twoPointer(leftPointer, rightPointer, current)
      }
  }
  return found
}