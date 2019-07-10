json.set! @user.id do
  json.extract! @user, :id, :fname, :lname, :email, :organizer_title  
end 

# how to get liked event ids, org events, bought tix?