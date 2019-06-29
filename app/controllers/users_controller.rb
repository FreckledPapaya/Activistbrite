class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(
      email: user_params[:email],
      password: user_params[:password]
    )

    if @user.save
      login!(@user)
      redirect_to user_url(@user)
      # change to events index
    else  
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end 
  end

  def show
    render json: "show page"
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
