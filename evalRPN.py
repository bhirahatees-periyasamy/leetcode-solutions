class Solution(object):
    def evalRPN(self, tokens):
        stack = []
        
        for token in tokens:
            if token not in ('+', '-', '*', '/'):
                stack.append(int(token))
            else:
                num2 = stack.pop()
                num1 = stack.pop()
                
                if token == '+':
                    stack.append(num1 + num2)
                elif token == '-':
                    stack.append(num1 - num2)
                elif token == '*':
                    stack.append(num1 * num2)
                else:  
                    stack.append(int(float(num1) / num2))
        
        return stack[-1]

solution = Solution()
print(solution.evalRPN(tokens = ["2","1","+","3","*"]))
print(solution.evalRPN(tokens = ["4","13","5","/","+","17","-","6","*"]))
print(solution.evalRPN(tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))