function threeSum(arr, target) {
// write your code here
	arr1.sort((a,b)=>{
        return a-b;
    });
    let closestSum=arr1[0]+arr1[1]+arr1[2];

    for(let i=0; i<arr1.length-2; i++){
        let left=i+1, right=arr1.length-1;

        while(left<right){
            let sum = arr1[i]+arr1[left]+arr1[right];
            if(sum === target){
                return sum;
            }
            else if(sum > target){
                right--;
            }
            else {
                left++;
            }
            if(Math.abs(sum - target) < Math.abs(closestSum - target)){
                closestSum = sum;
            }
        }
    }
    return closestSum;
  
}

module.exports = threeSum;
