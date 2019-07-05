class ApplicationController < ActionController::Base 
    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token
    
    # remove once form auth added

    helper_method :current_user, :logged_in?

    private

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end
    # make sure ||= to stop from regernating through multiple requests

    def logged_in?
        !!current_user
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
        # @current_user = user
    end

    def logout!
        # debugger
        current_user.reset_session_token!
        session[:session_token] = nil
        # current_user = nil
    end

    def require_logged_in
        redirect_to new_session_url unless current_user
    end
end
