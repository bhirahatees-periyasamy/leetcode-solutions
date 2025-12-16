class Solution(object):
    def exclusiveTime(self, n, logs):
        """
        :type n: int
        :type logs: List[str]
        :rtype: List[int]
        """
        stack = []
        result = [0] * n
        
        func_id,cycle,timing = logs[0].split(":")
        
        stack.append(int(func_id))
        
        prev_time = int(timing)
        
        for log in logs:
            func_id,cycle,timing = log.split(":")
            
            if cycle == "start":
                if stack: 
                    result[stack[-1]] += int(timing) - prev_time    
                    stack.append(int(func_id))
                    prev_time = int(timing)
            else:
                result[stack.pop()] += int(timing) - prev_time + 1
                prev_time = int(timing) + 1
        
        return result 
                        
                        
solution = Solution()
print(solution.exclusiveTime(n = 2, logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]))