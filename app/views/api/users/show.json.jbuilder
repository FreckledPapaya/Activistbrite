id = @user.id

json.users do
  json.id do
    json.extract! @user, :id, :fname, :lname, :email, :organizer_title
  end
end