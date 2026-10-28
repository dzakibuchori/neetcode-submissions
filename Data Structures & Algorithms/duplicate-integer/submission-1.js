class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = {};

        for(let i=0;i < nums.length; i++) {
            let n = nums[i];
            if (seen[n] !== undefined && seen[n] > 0) {
                return true;
            } else {
                seen[n] ? seen[n] = seen[n]+1 : seen[n] = 1;
            }
        }
        
        return false;
    }
}
