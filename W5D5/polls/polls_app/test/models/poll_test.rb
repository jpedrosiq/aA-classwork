# == Schema Information
#
# Table name: polls
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  title      :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class PollTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
