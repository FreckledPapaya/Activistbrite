# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all

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
user_14 = User.create(email: "Jaspurrr", password: "password")
 
event_1 = Event.create(title: "Refreshments and Resistance", 
    body: "Meet your neighbors and call your local reps!", 
    start_date: Date.new(2020,1,2,17), image_url: "image_url" "image_url", organizer_id: user_2.id) 

file = File.open('/Users/appacademy/Desktop/Activistbrite/app/assets/images/eventbrite_logo.png')
event_1.image.attach(io: file, filename: 'test_image.jpg')

event_2 = Event.create(title: "Pride Riot", 
    body: "THE FIRST PRIDE WAS A RIOT!!
    Come one, come all to an all-weekend queer extravaganza! Tickets are an all-access pass to panels, workshops, and lecture through out the day. In the evenings, unwind with friends in our sober space or show some skin at our burlesque and drag shows!", 
    start_date: Date.new(2019,10,5,9), end_date: Date.new(2019,10,6,11), image_url: "image_url" , organizer_id: user_5.id)