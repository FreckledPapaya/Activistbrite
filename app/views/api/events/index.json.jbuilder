@events.each do |event| 
  json.set! event.id do
    json.extract! event, :id, :title, :start_date, :image_url, :organizer_id, :organizer_title 
    
    if event.end_date.present?
      json.extract! event, :end_date 
    end
     

  end
end 