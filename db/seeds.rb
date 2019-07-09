# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo_user = User.create(email: "demouser@demo.com", password: "password")
user_1 = User.create(email: "EnviroNerd", password: "password")
user_2 = User.create(email: "RightsForAll", password: "password")
user_3 = User.create(email: "JanetSnakehole", password: "password")
user_4 = User.create(email: "LightOneCandle", password: "password")
user_5 = User.create(email: "ExpectoPatronum", password: "password")
user_6 = User.create(email: "VigilAuntie", password: "password")
user_7 = User.create(email: "FreeHugs", password: "password")
user_8 = User.create(email: "Education101", password: "password")
user_9 = User.create(email: "FeministGamer", password: "password")
user_10 = User.create(email: "RootDownRiseUp", password: "password")
user_11 = User.create(email: "NoJusticeNoPeace", password: "password")
user_12 = User.create(email: "WaterIsLife", password: "password")
user_13 = User.create(email: "WeAreTheLand", password: "password")

# event_1 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_2 = Event.create(title: "Pride Riot", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_3 = Event.create(title: "The Queeries", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_4 = Event.create(title: "Climate Change Discussion", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_5 = Event.create(title: "Feminist Craft Market", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_6 = Event.create(title: "Queer Burlesque Night", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_7 = Event.create(title: "Community Singalong", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_8 = Event.create(title: "Anti-Pipeline Protest", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_9 = Event.create(title: "Sunday in the Park", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_10 = Event.create(title: "Sunday in the Park", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_11 = Event.create(title: "Sunday in the Park", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_12 = Event.create(title: "Buy Nothing Street Fair", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_13 = Event.create(title: "#CloseTheCamps Protest", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_14 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_15 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_16 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_17 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_18 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_19 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_20 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_21 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_22 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_23 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_24 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_25 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_26 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_27 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_28 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_29 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_30 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_31 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_32 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_33 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_34 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)
# event_35 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: , end_date: , organizer_id:)