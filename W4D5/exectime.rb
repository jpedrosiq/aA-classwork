  
# PHASE I

def my_min(list)        # time complexity = O(n)
  min_num = list.first
  (1...list.length).each do |i|
    if min_num > list[i]
      min_num = list[i]
    end
  end
  min_num
end

# p my_min([0,3,5,4,-5,10,1,90])

# PHASE 2

def my_min(list)   # time complexity = O(n)
  min = list.min
end
# p my_min([0,3,5,4,-5,10,1,90])

#PHASE I
def largest_contiguous_subsum(list) # O(n^3)
  result = []
  i = 0
  while i < list.length
    j = i + 1
    result << [list[i]]
    while j < list.length 
      result << list[i..j]
      j += 1
    end
    i += 1
  end
  max = 0
  result.each do |subarr|
    if subarr.sum > max
      max = subarr.sum
    end
  end
  max
end

# list = [5, 3, -7]
# p largest_contiguous_subsum(list) # => 8

#Phase II
def largest_contiguous_subsum(list)   # O(2n) = O(n)
  current = 0      
  largest = list.first
  i = 0
  # return list.max if list.all? { |ele| ele < 0 }

  while i < list.length       # i = 5
    current += list[i]        # current = 7 - 6 = 1 + 7
    if largest < current      # 7 < 8
      largest = current       # largest = 8
    end
    if current < 0      # false
      current = 0       # current = 7
    end
    i+=1            
  end
  
  largest            # largest = 8
end 

p largest_contiguous_subsum([2, 3, -6, 7, -6, 7]) # => 8
p largest_contiguous_subsum([5, 3, -7]) # => 8
p largest_contiguous_subsum([-5,-1,-3]) # => -1
