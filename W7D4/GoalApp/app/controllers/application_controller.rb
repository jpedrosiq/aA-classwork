class ApplicationController < ActionController::Base

    helper_method :login!, :current_user, :logged_in?, :logout!

    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def logout!
        session[:session_token] = nil
        current_user.try(:reset_session_token!)
        @current_user = nil
    end

end
