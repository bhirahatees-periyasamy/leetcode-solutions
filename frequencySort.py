from collections import Counter

def frequencySort(nums):
    """
        :type nums: List[int]
        :rtype: List[int]
    """
    freq = Counter(nums)
    return sorted(nums,key=lambda x:(freq[x] , -x))    

print(frequencySort([1,1,2,2,2,3]))