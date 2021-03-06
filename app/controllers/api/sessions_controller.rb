class Api::SessionsController < ApplicationController

  def create
     @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    ) 

    if @user
      login!(@user)
      render 'api/users/show'
    else  
      # @user = User.find_by(email: params[:user][:email])
      # if @user
      #   flash.now[:errors] = ["Invalid password"]
      #   render json: flash[:errors], status: 400
      # else
        flash.now[:errors] = ["Invalid email/password"]
        render json: flash[:errors], status: 422
      # end
    end 
  end

  def destroy  
    if current_user
      logout!
      render json: {}
    else 
      render json: ['Not found'], status: 404
    end
  end 
end