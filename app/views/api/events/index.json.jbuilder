@events.each do |event|
  json.set! event.id do
     json.extract! event, :id, :title, :body, :start_date, :image_url, :organizer_id
  end
end 