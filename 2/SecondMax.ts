
function secondMax(nums: number[]) : number{

    let max: number = nums[0];
    let secondMax: number = nums[0];
    let i: number = 0;
    for(i = 0;i < nums.length;i++){
        if(nums[i] > max){
            secondMax = max;
            max = nums[i];
        }
        else if(nums[i] < max && nums[i] > secondMax){
            secondMax = nums[i];
        }
    }
    return secondMax;
}

console.log(secondMax([23,89,6,29,56,45,77,32]));