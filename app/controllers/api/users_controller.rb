class API::UsersController < ApplicationController
  before action :show, :require_logged_in

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
    @user = User.find_by(id: params[:id])
    render :show
  end

  def index
    @users = User.all
    render :index
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end