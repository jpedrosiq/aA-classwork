require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do
  scenario 'has a new user page' do
    visit new_user_url
    expect(page).to have_content("Sign Up")
  end

  feature 'signing up a user' do

    scenario 'shows email on the user show page after signup' do
        visit new_user_url
        fill_in "user[email]", with: "tjS2karen@email.com" 
        fill_in "user[password]", with: "kareniscool?" 
        click_on "DO IT!"
        expect(page).to have_content("tjS2karen@email.com")
    end

  end
end

feature 'logging in' do
  background :each do
    visit new_user_url
    fill_in "user[email]", with: "tjS2karen@email.com" 
    fill_in "user[password]", with: "kareniscool?" 
    click_on "DO IT!"
    click_on "Logout"
  end
  scenario 'shows email on the user\'s page after login' do
    visit new_session_url
    fill_in "user[email]", with: "tjS2karen@email.com" 
    fill_in "user[password]", with: "kareniscool?" 
    click_on "Check In!"
    expect(page).to have_content("tjS2karen@email.com")
  end

end

feature 'logging out' do
  scenario 'begins with a logged out state'

  scenario 'doesn\'t show username on the homepage after logout'

end