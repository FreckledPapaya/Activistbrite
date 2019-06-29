class ApplicationController < ActionController::Base 
    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token
    
    # remove once form auth added

    helper_method :current_user, :logged_in?

    private

    def current_user
        @current_user = User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        session[:session_token] = nil
        user.session_token = User.generate_session_token
        user.save!
    end

    def require_logged_in
        redirect_to new_session_url unless current_user
    end
end
