class Solution(object):
    def sortPeople(self, names, heights):
        """
        :type names: List[str]
        :type heights: List[int]
        :rtype: List[str]
        """
        self._merge_sort(
            names=names,
            heights=heights,
            start=0,
            end=len(heights) - 1
        )
        return names
    
    def _merge_sort(self, 
                    names, 
                    heights,
                    start,
                    end
                    ):
        if start < end:
            mid = start + (end - start) // 2
            self._merge_sort(
                            names=names,
                            heights=heights,
                            start=start,
                            end=mid
                            )
            self._merge_sort(
                names=names,
                heights=heights,
                start=mid + 1,
                end=end
            )
            self._merge(
                names=names,
                heights=heights,
                start=start,
                mid=mid,
                end=end
            )
            
            
    def _merge(
            self, 
            names, 
            heights,
            start,
            mid,
            end
        ):
        
        left_size = mid - start + 1
        right_size = end - mid
        
        
        left_heights = heights[start: start + left_size]
        right_heights = heights[mid + 1: mid + 1 + right_size]
        left_names = names[start: start + left_size]
        right_names = names[mid+1: mid+1 + right_size]

        left_index, right_index = 0, 0
        merge_index = start
        
        while left_index < left_size and right_index < right_size:
            if  left_heights[left_index] >= right_heights[right_index]:
                heights[merge_index] = left_heights[left_index]
                names[merge_index] = left_names[left_index]
                left_index+=1
            else:
                heights[merge_index] = right_heights[right_index]
                names[merge_index] = right_names[right_index]
                right_index+=1
            merge_index+=1
        
        while left_index < left_size:
            heights[merge_index] = left_heights[left_index]
            names[merge_index] = left_names[left_index]
            left_index+=1
            merge_index+=1
        
        while right_index < right_size:
            heights[merge_index] = right_heights[right_index]
            names[merge_index] = right_names[right_index]
            right_index+=1
            merge_index+=1
        
        
         
