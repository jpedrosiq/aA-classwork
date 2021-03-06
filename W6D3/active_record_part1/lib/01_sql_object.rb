require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  
  def self.columns
    columns ||= DBConnection.execute(<<-SQL)
    SELECT
      *
    FROM
      "#{self.table_name}"
SQL
    # columns[0].map(&:to_sym)
    columns[0].keys.map(&:to_sym)
    
    # ...     %i[""]
  end

  def self.finalize!
    self.columns.each do |column|
      define_method(column) {self.attributes[column] = instance_variable_get("@#{column}")} 

      define_method("#{column}=") do |val|
        self.attributes[column] = instance_variable_set("@#{column}", val)
      end
      
      # self.attributes[column] = instance_variable_get("@#{column}")
      # self.attributes[column] = instance_variable_get("@#{column}")
    end
    p self.attributes
  end

  def self.table_name=(table_name)
    @table_name = table_name
    # ...
  end

  def self.table_name
    self.to_s.downcase + "s"
    # ...
  end

  def self.all
    # ...
  end

  def self.parse_all(results)
    # ...
  end

  def self.find(id)
    # ...
  end

  def initialize(params = {})
    # ...
  end

  def attributes
    @attributes ||= {}
    # ...
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
