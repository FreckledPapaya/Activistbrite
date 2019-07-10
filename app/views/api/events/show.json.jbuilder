json.set! @event.id do
  json.extract! @event, :id, :title, :body, :start_date,
    if @event.end_date
      :end_date,
    end
  :image_url, :organizer_id
end 

