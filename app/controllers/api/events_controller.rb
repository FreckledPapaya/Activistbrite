class Api::EventsController < ApplicationController
  def index
    @events = Events.all
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def event_params
    params.require(:event).permit(:title, :body, :image_url, :start_date, :end_date, :organizer_id)
  end
end
