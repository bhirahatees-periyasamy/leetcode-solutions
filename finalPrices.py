class Solution:
    def finalPrices(self, prices):
        n = len(prices)
        result = prices[:]   
        stack = []           

        for i in range(n):
            while stack and prices[stack[-1]] >= prices[i]:
                idx = stack.pop()
                result[idx] -= prices[i]
            stack.append(i)

        return result


solution = Solution()
print(solution.finalPrices([8, 4, 6, 2, 3]))
