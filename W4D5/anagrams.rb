
# PHASE 1

def first_anagrams?(str1, str2) # O(n!)
  result = str1.chars.permutation(str1.length).to_a # O(n!)

  result.map! do |word_arr| # O(n^2)
    word_arr.join("")
  end

  result.include?(str2)     # O(n)
end

# p first_anagrams?("gizmo", "sally")    #=> false
# p first_anagrams?("elvis", "lives")    #=> true

# PHASE 2

def second_anagram?(str1, str2)   # O(nm) = O(n^2)
  str2_arr = str2.chars
  str1.each_char do |char|     
    if str2_arr.include?(char)    
      index_deleted = str2_arr.find_index(char) 
      str2_arr.delete_at(index_deleted) 
    end
  end
  str2_arr.length == 0
end

# p second_anagram?("gizmo", "sally")    #=> false
# p second_anagram?("elvis", "lives")    #=> true

#PHASE 3
def third_anagram?(str1, str2) #O(n log n)
  str1.chars.sort == str2.chars.sort
end

# p third_anagram?("gizmo", "sally")    #=> false
# p third_anagram?("elvis", "lives")    #=> true

# PHASE 4
def fourth_anagram?(str1, str2) # O(n)
  hash1 = Hash.new(0)
  hash2 = Hash.new(0)
  str1.each_char do |char|
    hash1[char] += 1
  end
  str2.each_char do |char|
    hash2[char] += 1
  end
  hash1 == hash2

end


# p fourth_anagram?("gizmo", "sally")    #=> false
# p fourth_anagram?("elvis", "lives")    #=> true

#BONUS

def bonus_anagram?(str1, str2) # O(n)
  hash1 = Hash.new(0)
  str1.each_char do |char|
    hash1[char] += 1
  end
  str2.each_char do |char|
    hash1[char] -= 1
  end
  hash1.values.all? {|value| value == 0}
end
p bonus_anagram?("gizmo", "sally")    #=> false

p bonus_anagram?("elvis", "lives")    #=> true