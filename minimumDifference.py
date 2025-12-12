class Solution(object):
    def minimumDifference(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        if k == 1:
            return 0
        nums.sort()
        minimum = float('inf')
        for i in range(k-1, len(nums)):
            minimum = min(minimum, nums[i] - nums[i - k + 1])
        return minimum
    

solution = Solution()
print(solution.minimumDifference(nums = [90], k = 1))
print(solution.minimumDifference(nums = [9,4,1,7], k = 2))
print(solution.minimumDifference(nums = [2,5,3,9,5,3], k = 3))
print(solution.minimumDifference(nums = [1,3,5,6,7], k = 4))