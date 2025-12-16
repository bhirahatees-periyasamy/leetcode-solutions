class Solution:
    def getDescentPeriods(self, nums):
        """
            nums: int[]
            rtype: int
        """
        n = len(nums)
        result = 1
        pointer = 1
        for i in range(1, n):
            if nums[i] == nums[i - 1] - 1:
                pointer += 1
            else:
                pointer = 1
            result += pointer 
        return result
    

solution = Solution()
print(solution.getDescentPeriods(nums = [1,2,3,4,5]))
print(solution.getDescentPeriods(nums = [4,1,3,2]))
print(solution.getDescentPeriods(nums = [2,1])) 