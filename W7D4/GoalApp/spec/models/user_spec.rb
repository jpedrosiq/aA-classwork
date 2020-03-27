# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#
require 'rails_helper'

RSpec.describe User, type: :model do
  it { should validate_presence_of(:email)}
  it { should validate_presence_of(:password_digest)}
  it { should validate_presence_of(:session_token)}
  it { should validate_length_of(:password).is_at_least(6)}
  it { should validate_uniqueness_of(:email)}
  it { should validate_uniqueness_of(:session_token)}

  subject(:user) {  
    User.create!(email: "example@email.com", password: "weirdos", session_token: "asiodjasoidjaiosjd")
  }


  describe "User::find_by_credentials" do
    it "returns the user when given the correct credentials" do
      User.create!(email: "example1@email.com", password: "weirdos", session_token: "siodjasoidjaiosjd")
      user1 = User.find_by_credentials("example1@email.com", "weirdos")
      expect(user1.email).to eq("example1@email.com")
    end
  end

end
