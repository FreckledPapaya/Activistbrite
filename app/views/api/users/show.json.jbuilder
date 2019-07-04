# json.set! @user.id do
  json.extract! (@user, :id, :fname, :lname, :email)
# end

# how to get liked event ids, org events, bought tix?