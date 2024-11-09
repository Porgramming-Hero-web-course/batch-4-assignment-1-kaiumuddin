const removeDuplicates = (nums: number[]): number[] => {
    return [...new Set(nums)];
}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
