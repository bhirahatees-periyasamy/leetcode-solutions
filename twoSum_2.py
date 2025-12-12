class Solution(object):
    def twoSum(self, numbers, target):
        """
        :type numbers: List[int]
        :type target: int
        :rtype: List[int]
        """
        right = len(numbers) -1 
        left = 0
        
        while(numbers[left] + numbers[right] != target):
            if(left == right):
                continue
            else:
                if(numbers[left] + numbers[right] < target):
                    left += 1
                else:
                    right -= 1
        
        return [left + 1, right + 1]
    
    
solution = Solution()
print(solution.twoSum(numbers = [2,7,11,15], target = 9))
print(solution.twoSum(numbers = [2,3,4], target = 6))
print(solution.twoSum(numbers = [-1,0], target = -1))