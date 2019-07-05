class Api::SessionsController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
     @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render json: @user
    else  
      flash.now[:errors] = ["Invalid email/password"]
      render json: flash[:errors]
    end 
  end

  def delete
    logout!
    redirect_to new_session_url
    # change to event index
  end 
end