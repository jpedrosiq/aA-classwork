class MaxIntSet
  attr_reader :store
  def initialize(max)
    @store = Array.new(max) {false}
  end

  def insert(num)
    raise "Out of bounds" if !is_valid?(num)
    @store[num] = true
  end

  def remove(num)
    raise "dude, its out of range!" if !is_valid?(num)
    @store[num] = false
  end

  def include?(num)
    raise "Out of bounds" if !is_valid?(num)
    @store[num]
  end

  private

  def is_valid?(num)
    num >= 0 && num < @store.length
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    @store[num % num_buckets] << num
  end

  def remove(num)
    if self.include?(num)
      @store[num % num_buckets].delete(num)
    end
  end

  def include?(num)
    @store[num % num_buckets].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    return if self.include?(num)
    @store[num % num_buckets] << num
    @count += 1
    resize! if @count == num_buckets
  end

  def remove(num)
    if self.include?(num)
      @store[num % num_buckets].delete(num)
      @count -= 1
    end
  end

  def include?(num)
    @store[num % num_buckets].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_size = num_buckets * 2
    new_arr = Array.new(new_size) { Array.new }
    @store.each do |bucket|
      bucket.each do |n|
        new_arr[n % new_size] << n
      end
    end
    @store = new_arr
  end
end
