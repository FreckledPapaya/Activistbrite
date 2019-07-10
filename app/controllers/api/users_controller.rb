class Api::UsersController < ApplicationController
  # before action :show, :require_logged_in

  def verify
    @user = User.find_by(email: params[:email])
    @user ||= {new_user: true, email: params[:email]} 
    
    render json: @user 
      
  end
  # use to determine which component to render from session (redux)

  def create 
    # @user = User.find_by(email: params[:user][:email]) 
    # if @user
    #   flash.now[:errors] = ["Invalid password"]
    #   return render json: flash[:errors], status: 200
    # else
    #   flash.now[:errors] = ["Invalid email/password"]
    #   return render json: flash[:errors], status: 422
    # end

    @user = User.new(
      email: user_params[:email],
      password: user_params[:password]
    )

    if @user.save
      login!(@user)
      render 'api/users/show'
      # change to events index
    else  
      flash.now[:errors] = @user.errors.full_messages
      render json: flash[:errors]
    end 
  end

  def show
    @user = User.find_by(id: params[:id])
    render 'api/users/show'
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end