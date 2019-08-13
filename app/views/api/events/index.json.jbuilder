@events.each do |event| 
  json.set! event.id do
    json.extract! event, :id, :title, :image_url, :organizer_id, :organizer_title
  
    if event.end_date.present?
      json.end_day event.weekday(event.end_date)
      json.end_date event.date(event.end_date)
      json.end_month event.month(event.end_date)
      json.end_year event.year(event.end_date)
      json.end_time event.time(event.end_date)
    end
       
    json.start_day event.weekday(event.start_date)
    json.start_date event.date(event.start_date)
    json.start_month event.month(event.start_date)
    json.start_year event.year(event.start_date)
    json.start_time event.time(event.start_date)
  
  end
end 
