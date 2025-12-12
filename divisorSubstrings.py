class Solution(object):
    def divisorSubstrings(self, num, k):
        """
        :type num: int
        :type k: int
        :rtype: int
        """

        s = str(num)
        n = len(s)
        
        window = int(s[:k])
        count = 0
        print(num , window)
        if window != 0 and num % window == 0:
            count += 1
        
        for i in range(k, n):
            window = window % (10**(k-1)) * 10 + int(s[i])
            print(num , window, k,s[i])
            if window != 0 and num % window == 0:
                count += 1
        
        return count


solution = Solution()
print(solution.divisorSubstrings(num = 12, k = 2))
print(solution.divisorSubstrings(num = 240, k = 2))
print(solution.divisorSubstrings(num = 430043, k = 2))