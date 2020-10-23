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
@loveA = Affirmation.create(affirmations: "love a", user_id:@user)
@believeA = Affirmation.create(affirmations: "sunshine", user_id:@user)
@careerA = Affirmation.create(affirmations: "stars", user_id:@user)
@healthA = Affirmation.create(affirmations: "flowers", user_id:@user)

# Category.create(name: 'General', affirmation_id: 1)
# Category.create(name: 'Attract Love', affirmation_id: 2)
# Category.create(name: 'Believe In Yourself', affirmation_id: 3)
# Category.create(name: 'Advance In Career', affirmation_id: 4)
# Category.create(name: 'Improve Health', affirmation_id: 5)
