# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all


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