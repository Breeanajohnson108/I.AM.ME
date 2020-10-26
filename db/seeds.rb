# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Category.destroy_all
Affirmation.destroy_all
User.destroy_all

@user = User.create(firstname: 'John', lastname: 'Doe', email: 'johndoe21@gmail.com', password: '123456')

@generalA = Affirmation.create(affirmations:"ga", user_id:@user.id)
@loveA = Affirmation.create(affirmations: "love a", user_id:@user.id)
@believeA = Affirmation.create(affirmations: "sunshine", user_id:@user.id)
@careerA = Affirmation.create(affirmations: "stars", user_id:@user.id)
@healthA = Affirmation.create(affirmations: "flowers", user_id:@user.id)

# General Affirmations
Affirmation.create(affirmations:"Every day in every way, I'm getting better and better.", user_id:@user.id)
Affirmation.create(affirmations:"I am very healthy, wealth, intelligent, successful, and happy", user_id:@user.id)
Affirmation.create(affirmations:"I am an amazing and brilliant individual!", user_id:@user.id)
Affirmation.create(affirmations:"I am confident, competent and calm", user_id:@user.id)
Affirmation.create(affirmations:"Here and now I affirm that this moment starts the best year of my life.
IT is more insightful, more joyful and more successful.", user_id:@user.id)

#Attract Love Affirmations
Affirmation.create(affirmations:"I am attracting the perfect person for me.", user_id:@user.id)
Affirmation.create(affirmations:"I am loved more than I ever thought possible.", user_id:@user.id)
Affirmation.create(affirmations:"I deserve to be happy in my relationship", user_id:@user.id)
Affirmation.create(affirmations:"I trust the Universe to bring my true love to me", user_id:@user.id)
Affirmation.create(affirmations:"I only attract healthy relationships", user_id:@user.id)

#Believe In Yourself Affirmations
Affirmation.create(affirmations:"I love and accept myself as I am.", user_id:@user.id)
Affirmation.create(affirmations:"I am using my voice, because my voice has value.", user_id:@user.id)
Affirmation.create(affirmations:"I am open to divine guidance.", user_id:@user.id)
Affirmation.create(affirmations:"I am creative.", user_id:@user.id)
Affirmation.create(affirmations:"I am love, I am light. I am here to shine so bright.", user_id:@user.id)

#Advance In Career
Affirmation.create(affirmations:"I am creating my dream career", user_id:@user.id)
Affirmation.create(affirmations:"My dream job is on its way to me", user_id:@user.id)
Affirmation.create(affirmations:"I have the skills I need to step up in my career", user_id:@user.id)
Affirmation.create(affirmations:"I attract amazing career opportunities", user_id:@user.id)
Affirmation.create(affirmations:"Every interview takes to be closer to my dream job", user_id:@user.id)

#Improve Health
Affirmation.create(affirmations:"I love feeling fit and strong. It is easy for me to eat well and exercise regularly", user_id:@user.id)
Affirmation.create(affirmations:"My sleep is relaxed and refreshing.", user_id:@user.id)
Affirmation.create(affirmations:"My body is healed, restored and filled with energy.", user_id:@user.id)
Affirmation.create(affirmations:"I am filled with energy for all the daily activities in my life.", user_id:@user.id)
Affirmation.create(affirmations:"My mind is at peace.", user_id:@user.id)

Category.create(name: 'General' )
Category.create(name: 'Attract Love')
Category.create(name: 'Believe In Yourself')
Category.create(name: 'Advance In Career')
Category.create(name: 'Improve Health')
