
function summation(nums: number[]) : number{
    let sum: number = 0;
    let i: number = 0;
    for(i = 0;i < nums.length;i++){
        sum = sum + nums[i];
    }
    return sum;
}

console.log(summation([23,89,6,29,55]));