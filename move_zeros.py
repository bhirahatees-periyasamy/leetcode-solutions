class Solution(object):
    def moveZeroes(self, nums):
        """
            nums: List[int]
            return: None
        """
        left = 0
        
        for right in range(len(nums)):
            if nums[right] != 0:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
        return nums        

solution = Solution()
print(solution.moveZeroes(nums = [0,1,0,3,12]))
print(solution.moveZeroes(nums = [0,0,1]))
print(solution.moveZeroes(nums = [0,1,0,3,12]))