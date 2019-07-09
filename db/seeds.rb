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
user_14 = User.create(email: "Jaspurrr", password: "password")

# image seeding:


event_1 = Event.create(title: "Refreshments and Resistance", 
    body: "Meet your neighbors and call your local reps!", 
    start_date: Date.new(2020,1,2,17), image_url: "image_url", organizer_id: user_2.id) 

file = File.open('/Users/appacademy/Desktop/Activistbrite/app/assets/images/eventbrite_logo.png')
event_1.image.attach(io: file, filename: 'test_image.jpg')

# event_2 = Event.create(title: "Pride Riot", 
#     body: "THE FIRST PRIDE WAS A RIOT!!
#     Come one, come all to an all-weekend queer extravaganza! Tickets are an all-access pass to panels, workshops, and lecture through out the day. In the evenings, unwind with friends in our sober space or show some skin at our burlesque and drag shows!", 
#     start_date: Date.new(2019,10,5,9), end_date: Date.new(2019,10,6,11), image_url: , organizer_id: user_5.id)

# event_3 = Event.create(title: "The Queeries", 
#     body: "A new LGBT2QI+ arts & music festival
#         Honouring those who started the fight for queer liberation
#         Uplifting those with something to say in our communities
#         Creating a space of healing & celebration for those doing the work
#         For those with questions / for those with answers

#         A three day immersive arts & music festival for all the queer & trans folks, community members, activists, slacktivists, poets, rebels, musicians, and queermos just doing their best. Let's connect in a beautiful oasis, create a pop-up community together for a weekend of art, music, laughter, and queer magic.

#         This festival was born out of community necessity and striving to bring a wide array of voices and talents from our communities back to those who might need those connections most. That's why we're hosting Queeries in the Grey Bruce county this year, in Grand Valley, near Orangeville. The past two years we've experienced an alarmingly high 2SLGBTQ+ youth suicide rate in the region, we've lost a number of friends, participants, and young community members and I know we've all felt the collective heartbreak with how the current socio-political climate has been shifting here. There's a lot of work to do, but the road is arduous. And though Guelph Pride, the hosting organization for this festival, is putting in the work by revamping the way we do our work, bringing more voices to the table and into leadership positions, and shifting our focus to really support those who need us most, we also recognize that there are other sides to advocacy and activism that are often overlooked.

#         The road is long, and there is much work to do, but pride celebrations specifically have always been a place of simultaneous celebration and backlash, of authenticity and activism, of fighting like hell but being absolutely fabulous while doing it.

#         While we embrace the hard work necessary to make change in our communities, we also need to prioritize time to reconnect to those communities, for rest, for celebration, and for coming together on this land that sustains us.

#         And this was the inspiration and motivation behind Queeries - to bring people together, to foster an intentional community for change, and to create a space of celebration for our cultures and communities outside of the heavily commercialized pride festivals.

#         That's why we're keeping it grassroots this year - we did not and will not be accepting any corporate sponsorship for this festival. We are accountable to none but ourselves and our incredible partners - the Ridge LGBT campground, Make it Wright of Owen Sound, and DIRTYBOOTS creative. Queeries is also being run as an extension of Guelph Pride, which is a not for profit charitable organization run entirely by volunteers.

#         Yes, that's right - none of the organizers of the Queeries festival are being paid. It's run entirely by volunteers. All of the money raised is going towards offsetting costs, paying artists, offering subsidized/free tickets, offering meals to volunteers, and everything left over will be donated back to local, not-for-profit 2SLGBTQ+ serving charities.

#         So, thank you for your interest in helping us make this happen, and we can't wait to see you at the Ridge!", 
#     start_date: Date.new(2020,6,19,17), end_date: Date.new(2020,6,22,2), image_url: , organizer_id: user_14.id)

# event_4 = Event.create(title: "Climate Change Discussion", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_5 = Event.create(title: "Feminist Craft Market", 
#     body: "Join us for the debut of the Feminist Creative Collective. The Feminist Spring Market aims to dismantle the patriarchy by supporting and showcasing women (cis and trans), non-binary folks, queers, BIPOC and folks with disabilities. 
        # This event will bring together artisans, makers, creatives, small businesses, activists and more like-minded people to create a hub of feminism, community and activism!

        # The market will be held at 10C Shared Space, on the 4th floor. This location has accessible doors, washrooms, and elevators, and is supportive of all genders. We are committed to creating a navigable space for people who use mobility devices.
        # If you have any questions about whether you can access this space, please get in touch.", 
#     start_date: Date.new(2020,4,17,16), end_date: Date.new(2020,4,17,21), image_url: , organizer_id: user_9.id)
# event_6 = Event.create(title: "Queer Burlesque Night", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_7 = Event.create(title: "Community Singalong", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_8 = Event.create(title: "Anti-Pipeline Protest", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_9 = Event.create(title: "Sunday in the Park", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_10 = Event.create(title: "Sunday in the Park", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_11 = Event.create(title: "Sunday in the Park", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_12 = Event.create(title: "Buy Nothing Street Fair", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_13 = Event.create(title: "#CloseTheCamps Protest", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_14 = Event.create(title: "Art In the Street", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_15 = Event.create(title: "San Francisco Poetry Slam", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_16 = Event.create(title: "Poetry Slam Queer Edition: SF", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_17 = Event.create(title: "Writer's Open Mic", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_18 = Event.create(title: "STOP ICE", 
#     body: "WHAT DO WE WANT? The camps closed, the families reunited, and immigrants left alone!", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_19 = Event.create(title: "San Francisco Rally in Solidarity with Indigenous Peoples", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_20 = Event.create(title: "Speaking Our Truths: Pride Edition", 
#     body: "Speaking our Truths is a long-standing Pride event, and over the years has seen such a huge array of speakers, stories, victories, triumphs, tragedies, heartbreak, and immense, overwhelming, and radiating love. We're so excited to be bringing it back, especially in partnership with SF Spoken Word, an arts organization that has done so much for the LGBT2QI+ community over the years. 
            # So we invite you to come and share with us! Share part of your story, a specific lesson or learning, yearning or love, or anything in between. We ask that speakers limit their piece to between 5-7 minutes, but check with any of our hosts if you have concerns about this or you have a story that cannot be made any more succinct. We'd love to have you and we're excited about what you might have to say.",
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id: user_14.id)
# event_21 = Event.create(title: "Gender Intersect", 
#     body: "Come out to Gender Intersects' monthly meet-ups! Every 3rd Monday at Out On The Shelf in the 10C building downtown. Chat, snack and meet other Gender Intersect folks!", 
#     start_date: Date.new(2020,3,2,17), end_date: , image_url: , organizer_id: user_14.id)
# event_22 = Event.create(title: "Protest Prep: Buttons and Banners", 
#     body: "Meet us in Ohlone Park for snacks, music, speeches, and crafts! BYO supplies to add to our stock of posters, markers, and of course, GLITTER!!! Brainstorm catchy slogans with friends, and get ready for a year of direct action. We will also have a button maker available for those who want to design their own buttons to advertise their activism 24/7", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_23 = Event.create(title: "Rhythms of Resistance Interest Meeting", 
#     body: "Does getting angry make you want to dance? Does your activism need a little more pink and silver?

    #       Now's your chance for a change of pace! Rhythms of Resistance is a network of anti-hierarchical Samba bands around the country who bring the noise to protest sights. At this meeting we will discuss membership and make plans for a DIY drum-making event", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_24 = Event.create(title: "Coldest Night of the Year", 
#     body: "By walking and fundraising together, we will explore the chill and challenges of living on the streets in winter, while raising much-needed money for many nation-wide charity partners who serve and engage the homeless communities so well.
#           ", 
#     start_date: Date.new(2020,2,22,17), end_date: , image_url: , organizer_id:)
# event_25 = Event.create(title: "Relay for Life", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_26 = Event.create(title: "Spring Charity Market", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_27 = Event.create(title: "Mental health & addiction: Want to Know how to help a friend?", 
#     body: "Join us for a friendly, accessible, and informative conversation about how to help a friend struggling with mental health and addiction. Overdose reversal training included. 

#             Facilitated by: SANGUEN HEALTH CENTRE

#             FREE SNACKS!
#             Physically Accessible space 
#             Gender neutral washroom", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_28 = Event.create(title: "Fat&Fabulous Clothing Swap", 
#     body: "Fat clothes are expensive - and often few and far between - which means it takes a lot of effort and money to update your wardrobe.

            # So imagine a place where there are PILES of clothes - all *free* and in all the sizes - that is what the clothes swaps are. Open to everyone from size 16/L upwards, the swaps have become a regular social event. Usually involving cake, chats, stripping down to your undies and wearing a completely different outfit home to the one you arrived in. Life long friendships have been made in the swap zones. Come along and join the fun! Bring clean good conditioned clothes - if you have any! Find new (to you) clothes. 

            # We look forward to seeing you! xx
            # categories
            # ", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_29 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_30 = Event.create(title: "Stitch n B*tch", 
#     body: "Calling all crafters to a night you won't forget. Meet your community of fiber-artists, woodworkers, and the like while blowing off some steam. After a brief led discussion on current events where we can share our plans for change, let loose and have some fun! Share patterns and creativity, and if you're feeling brave, take the stage at our 9pm open mic. Snacks provided", 
#     start_date: Date.new(2020,4,18,6), end_date: Date.new(2020,4,18,11), image_url: , organizer_id:)
# event_31 = Event.create(title: "Transforming Conflict", 
#     body: "Being able to address and resolve conflict is a critical part of studying, living and working in a healthy campus community with peers, professors and other personnel. And yet, all too often, the effects of conflict are destructive for individuals, groups and interpersonal relationships.

            # It’s possible to move through conflict and transform its effects from destructive to constructive. With the right skills and anti-oppression lens, concerns can be raised in ways that make it more likely to lead to co-operation. Participants in this 2-hour workshop will learn and practice conflict resolution skills and strategies that will equip them to face future conflicts with confidence.
            
            # Workshop participants will be able to:
            # • Define conflict
            # • Understand the challenges and opportunities that arise as a result of conflict situations
            # • Apply anti-oppressive skills for raising a concern in ways that are less likely to cause or escalate conflict
            # • Use assessment strategies to determine how to approach a situation of conflict
            # • Know the resources and avenues available for resolving human rights and non-human rights concerns", 
#     start_date: Date.new(2020,5,3,14), end_date: Date.new(2020,5,3,16), image_url: , organizer_id: user_14.id)
# event_32 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_33 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_34 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)
# event_35 = Event.create(title: "Refreshments and Resistance", 
#     body: "", 
#     start_date: Date.new(2020,1,2,17), end_date: , image_url: , organizer_id:)