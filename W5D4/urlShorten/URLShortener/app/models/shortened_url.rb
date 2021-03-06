class ShortenedUrl < ApplicationRecord
  validates :long_url, presence: true, uniqueness: true
  validates :short_url, presence: true, uniqueness: true
  validates :user_id, presence: true, uniqueness: false
end
