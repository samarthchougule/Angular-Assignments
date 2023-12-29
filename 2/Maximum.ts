
function maximum(nums: number[]) : number{

    let max: number = nums[0];
    let i: number = 0;
    for(i = 0;i < nums.length;i++){
        if(max < nums[i]){
            max = nums[i];
        }
    }
    return max;
}

console.log(maximum([23,89,6,29,55]));