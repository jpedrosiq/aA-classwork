class Integer
  # Integer#hash already implemented for you

end

class Array
  def hash
    hash_code = 0
    self.each_with_index do |ele, idx|
      hash_code += ele ^ idx
    end
    hash_code
  end
end

class String 
  def hash
    self.chars.map.with_index { |ele, idx| (ele.to_i ^ idx) }.sum
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    0
  end
end
