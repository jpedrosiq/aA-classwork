require 'action_view'

class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper

    validates :birth_date, presence: true
    validates :color, inclusion: {in: COLORS}
    validates :name, presence: true
    validates :sex, inclusion: {in: %w(M F)}
    validates :description, presence: true

    def age
        time_ago_in_words(birth_date)
    end 

end
