json.set! @user.id do
  json.extract! @user, :id, :fname, :lname, :email, :organizerTitle
end

# how to get liked event ids, org events, bought tix?