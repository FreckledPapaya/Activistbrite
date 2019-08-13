class Api::EventsController < ApplicationController
  def index 
    @events = Event.all 
    render 'api/events/index', status: 200

  end

  def show
    @event = Event.find_by(id: params[:id]) 
    debugger
    render 'api/events/show'
  end

  def create
    @event = Event.new(event_params)
    #  deal with start and end date
    # set organizer to current user if needed

    if @event.save
    #  render show page
      
    else
      render json: @event.errors.full_messages
      # create event errors reducer
    end
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
