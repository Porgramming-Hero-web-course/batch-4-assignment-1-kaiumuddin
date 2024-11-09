const sumArray = (nums : number[]): number => {
    return nums.reduce((acc: number, curr: number) => acc + curr, 0);
}


console.log(sumArray([1, 2, 3, 4, 5]));

