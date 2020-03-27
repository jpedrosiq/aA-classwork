require 'rails_helper'

RSpec.describe UsersController, type: :controller do
    describe "GET #show" do

        it "renders the user's show page" do
            pedro = User.create!(email: 'z0000p', password: 'yeehaw')
            get :show, params: { id: pedro.id }
            expect(response).to render_template(:show)
        end
    end

    describe "GET #new" do
        it "renders the new user page" do 
            get :new
            expect(response).to render_template(:new)
        end
    end
end
