class SessionsController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
     @user = User.find_by_credentials(
      username: user_params[:username],
      password: user_params[:password]
    )

    if @user
      login!(user)
      redirect_to user_url(@user)
      # change to events index
    else  
      flash.now[:errors] = ["Invalid username/password"]
      render :new
    end 
  end

  def delete
    logout!
    redirect_to new_session_url
    # change to event index
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
