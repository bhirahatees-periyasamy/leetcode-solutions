class Solution(object):
    def findLengthOfLCIS(self, nums):
        if not nums:
            return 0
        
        length = 1
        max_length = 1
        
        for i in range(1, len(nums)):
            if nums[i] > nums[i-1]:
                length += 1
            else:
                length = 1
            max_length = max(max_length, length)
        
        return max_length


solution = Solution()
print(solution.findLengthOfLCIS(nums = [2,2,2,2,2]))
print(solution.findLengthOfLCIS(nums = [1,3,5,4,7]))
print(solution.findLengthOfLCIS(nums = [1,3,5,7]))