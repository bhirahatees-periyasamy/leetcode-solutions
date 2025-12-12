class Solution(object):
    def containsNearbyDuplicate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """
        hset = set()
        for i in range(len(nums)):
            
            if nums[i] in hset:
                return True
            
            hset.add(nums[i])
            
            if len(hset) > k:
                hset.remove(nums[i - k])
        
        return False
    

solution = Solution()
print(solution.containsNearbyDuplicate(nums=[1,2,3,1], k=3))
print(solution.containsNearbyDuplicate(nums=[1,0,1,1], k=1))
print(solution.containsNearbyDuplicate(nums=[1,2,3,1,2,3],k=2))