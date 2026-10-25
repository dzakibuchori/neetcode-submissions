class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        examined = {}

        for i, v in enumerate(nums):
            comp = target - v

            if comp in examined:
                return [examined[comp], i]
            
            examined[v] = i
