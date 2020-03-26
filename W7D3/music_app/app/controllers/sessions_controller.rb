class SessionsController < ApplicationController

    def create
        user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if user
            login_user!(user)
            redirects_to users_url
        else
            flash[:errors] = ['Invalid Credentials!']
            render :new
        end
    end

    def new
        render :new
    end
    
    def destroy
        logout_user!
        redirects_to new_session_url
    end

end
