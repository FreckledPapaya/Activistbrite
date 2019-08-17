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
 
event_1 = Event.create(title: "Refreshments and Resistance", body: "Meet your neighbors and call your local reps!", start_date: DateTime.new(2021, 6, 1, 17), organizer_id: user_2.id)

file = File.open('app/assets/images/youth_strike_climate.jpg')
event_1.image.attach(io: file, filename: 'event_1.jpg')

event_2 = Event.create(title: "Feminist Craft Market", body: "Join us for the debut of the Feminist Creative Collective. The Feminist Spring Market aims to dismantle the patriarchy by supporting and showcasing women (cis and trans), non-binary folks, queers, BIPOC and folks with disabilities. \n This event will bring together artisans, makers, creatives, small businesses, activists and more like-minded people to create a hub of feminism, community and activism! \n The market will be held at 10C Shared Space, on the 4th floor. This location has accessible doors, washrooms, and elevators, and is supportive of all genders. We are committed to creating a navigable space for people who use mobility devices. \n If you have any questions about whether you can access this space, please get in touch.", start_date: DateTime.new(2020,4,17,16), end_date: DateTime.new(2021,4,17,21), image_url: "image_url" , organizer_id: user_9.id)

file = File.open('app/assets/images/feminist.jpg')
event_2.image.attach(io: file, filename: 'event_2.jpg') 

event_3 = Event.create(title: "Anti-Pipeline Protest", body: "Meet us at Union Square to rally and march down Market street to spread our message. We will be led by those indigenous to this land and march in solidarity as settlers to image_ pipelines that threaten oure environment and all people.", start_date: DateTime.new(2021,7,14,12),  organizer_id: user_4.id);

file = File.open('app/assets/images/pipeline_2.jpg')
event_3.image.attach(io: file, filename: 'event_3.jpg') 

event_4 = Event.create(title: "Pride Riot", 
    body: "THE FIRST PRIDE WAS A RIOT!! \n Come one, come all to an all-weekend queer extravaganza! Tickets are an all-access pass to panels, workshops, and lecture through out the day. In the evenings, unwind with friends in our sober space or show some skin at our burlesque and drag shows!", start_date: DateTime.new(2021,10,8,21), end_date: DateTime.new(2021,10,11,1),  organizer_id: user_5.id);

file = File.open('app/assets/images/1stpride.png')
event_4.image.attach(io: file, filename: 'event_4.png') 
  
event_5 = Event.create(title: "The Queeries", 
    body: "A new LGBT2QI+ arts & music festival \n Honouring those who started the fight for queer liberation \n Uplifting those with something to say in our communities \n Creating a space of healing & celebration for those doing the work \n For those with questions / for those with answers \n A three day immersive arts & music festival for all the queer & trans folks, community members, activists, slacktivists, poets, rebels, musicians, and queermos just doing their best. Let's connect in a beautiful oasis, create a pop-up community together for a weekend of art, music, laughter, and queer magic. \n This festival was born out of community necessity and striving to bring a wide array of voices and talents from our communities back to those who might need those connections most. That's why we're hosting Queeries in the Grey Bruce county this year, in Grand Valley, near Orangeville. The past two years we've experienced an alarmingly high 2SLGBTQ+ youth suicide rate in the region, we've lost a number of friends, participants, and young community members and I know we've all felt the collective heartbreak with how the current socio-political climate has been shifting here. There's a lot of work to do, but the road is arduous. And though Guelph Pride, the hosting organization for this festival, is putting in the work by revamping the way we do our work, bringing more voices to the table and into leadership positions, and shifting our focus to really support those who need us most, we also recognize that there are other sides to advocacy and activism that are often overlooked. \n The road is long, and there is much work to do, but pride celebrations specifically have always been a place of simultaneous celebration and backlash, of authenticity and activism, of fighting like hell but being absolutely fabulous while doing it. \n While we embrace the hard work necessary to make change in our communities, we also need to prioritize time to reconnect to those communities, for rest, for celebration, and for coming together on this land that sustains us. \n And this was the inspiration and motivation behind Queeries - to bring people together, to foster an intentional community for change, and to create a space of celebration for our cultures and communities outside of the heavily commercialized pride festivals. \n That's why we're keeping it grassroots this year - we did not and will not be accepting any corporate sponsorship for this festival. We are accountable to none but ourselves and our incredible partners - the Ridge LGBT campground, Make it Wright of Owen Sound, and DIRTYBOOTS creative. Queeries is also being run as an extension of Guelph Pride, which is a not for profit charitable organization run entirely by volunteers. \n Yes, that's right - none of the organizers of the Queeries festival are being paid. It's run entirely by volunteers. All of the money raised is going towards offsetting costs, paying artists, offering subsidized/free tickets, offering meals to volunteers, and everything left over will be donated back to local, not-for-profit 2SLGBTQ+ serving charities. \n So, thank you for your interest in helping us make this happen, and we can't wait to see you at the Ridge!", start_date: DateTime.new(2021,6,18,17), end_date: DateTime.new(2021,6,21,2),  organizer_id: user_14.id);

file = File.open('app/assets/images/queer.png')
event_5.image.attach(io: file, filename: 'event_5.png') 
  
event_6 = Event.create(title: "Climate Change Discussion", body: "The growing momentum in congress behind a highly effective bipartisan solution to climate change, and the really easy way to help make it happen. \n Imagine a group of Republican and Democratic U.S. Representatives working together to craft mutually acceptable solutions to climate change. If this seems unrealistic to you, you’re not alone. But in fact, this has been happening since February of 2016 in the Climate Solutions Caucus. In addition, support for a highly effective bipartisan climate solution known as “Carbon Fee and Dividend” has been building gradually for over a decade (advocated by Citizens’ Climate Lobby and other non-profit organizations), and has accelerated significantly in recent months. One notable milestone has been the introduction of the Energy Innovation and Carbon Dividends Act of 2019 in the House of Representatives. During this presentation we’ll discuss these promising developments, how Carbon Fee and Dividend works, why both progressives and conservatives are getting behind this approach, and how anyone who can spare 10 minutes per month can make a meaningful contribution to help move it closer to becoming law.", start_date: DateTime.new(2021,5,6,18,30),  organizer_id: user_2.id);

file = File.open('app/assets/images/justice_slam.jpg')
event_6.image.attach(io: file, filename: 'event_6.jpg') 

# edit dates for below events
    
event_7 = Event.create(title: "Speaking Our Truths: Pride Edition", body: "Speaking our Truths is a long-standing Pride event, and over the years has seen such a huge array of speakers, stories, victories, triumphs, tragedies, heartbreak, and immense, overwhelming, and radiating love. We're so excited to be bringing it back, especially in partnership with SF Spoken Word, an arts organization that has done so much for the LGBT2QI+ community over the years. \n So we invite you to come and share with us! Share part of your story, a specific lesson or learning, yearning or love, or anything in between. We ask that speakers limit their piece to between 5-7 minutes, but check with any of our hosts if you have concerns about this or you have a story that cannot be made any more succinct. We'd love to have you and we're excited about what you might have to say.", start_date: DateTime.new(2020,1,2,17),  organizer_id: user_14.id);

file = File.open('app/assets/images/poetry_slam.jpg')
event_7.image.attach(io: file, filename: 'event_7.jpg') 
    
    
event_8 = Event.create(title: "Stitch n B*tch", 
    body: "Calling all crafters to a night you won't forget. Meet your community of fiber-artists, woodworkers, and the like while blowing off some steam. After a brief led discussion on current events where we can share our plans for change, let loose and have some fun! Share patterns and creativity, and if you're feeling brave, take the stage at our 9pm open mic. Snacks provided", 
    start_date: DateTime.new(2020,4,18,6), end_date: DateTime.new(2020,4,18,11),  organizer_id: user_14.id) 

file = File.open('app/assets/images/crafty.jpg')
event_8.image.attach(io: file, filename: 'event_8.jpg') 
    
    # REPEATS
# event_9 = Event.create(title: "Pride Riot", 
#                        body: "THE FIRST PRIDE WAS A RIOT!!
#     Come one, come all to an all-weekend queer extravaganza! Tickets are an all-access pass to panels, workshops, and lecture through out the day. In the evenings, unwind with friends in our sober space or show some skin at our burlesque and drag shows!", 
#                        start_date: DateTime.new(2019, 10, 5, 9), end_date: DateTime.new(2019, 10, 6, 11), organizer_id: user_5.id)
# event_10 = Event.create(title: "Pride Riot", 
#                         body: "THE FIRST PRIDE WAS A RIOT!!
#     Come one, come all to an all-weekend queer extravaganza! Tickets are an all-access pass to panels, workshops, and lecture through out the day. In the evenings, unwind with friends in our sober space or show some skin at our burlesque and drag shows!", 
#                         start_date: DateTime.new(2019, 10, 5, 9), end_date: DateTime.new(2019, 10, 6, 11), organizer_id: user_5.id)
# event_11 = Event.create(title: "Pride Riot", 
#                         body: "THE FIRST PRIDE WAS A RIOT!!
#     Come one, come all to an all-weekend queer extravaganza! Tickets are an all-access pass to panels, workshops, and lecture through out the day. In the evenings, unwind with friends in our sober space or show some skin at our burlesque and drag shows!", 
#                         start_date: DateTime.new(2019, 10, 5, 9), end_date: DateTime.new(2019, 10, 6, 11), organizer_id: user_5.id)
# event_12 = Event.create(title: "Pride Riot", 
#                         body: "THE FIRST PRIDE WAS A RIOT!!
#     Come one, come all to an all-weekend queer extravaganza! Tickets are an all-access pass to panels, workshops, and lecture through out the day. In the evenings, unwind with friends in our sober space or show some skin at our burlesque and drag shows!", 
#                         start_date: DateTime.new(2019, 10, 5, 9), end_date: DateTime.new(2019, 10, 6, 11), organizer_id: user_5.id)

  