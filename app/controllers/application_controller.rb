class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    private

    def current_user
        @current_user = User.find_by(session_token: session.session_token)
    end

    def logged_in?
        !!current_user
    end

    def login_user!(user)
        session.session_token = user.reset_session_token!
    end

    def logout!
        session.session_token = nil
        user.session_token = User.generate_session_token
        user.save!
    end

    def require_logged_in
        redirect_to new_session_url unless current_user
    end
end
