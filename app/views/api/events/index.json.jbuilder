@events.each do |event|
  json.set! event.id do
    json.extract! event, :title, :body, :startDate, :endDate, :imageUrl, :categoryId
  end
end

# not tested