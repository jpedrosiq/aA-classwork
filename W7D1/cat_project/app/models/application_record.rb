class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  
  COLORS = ['white','black', 'gray', 'yellow']

end
