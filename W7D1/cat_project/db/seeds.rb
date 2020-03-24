# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Cat.create!(
    birth_date: '2018-07-30',
    color: 'black',
    name: 'Thundercat',
    sex: 'M',
    description: 'loves to take long walks.'
)

Cat.create!(
    birth_date: '2016-05-20',
    color: 'yellow',
    name: 'Pikachu',
    sex: 'M',
    description: 'ill shock you!'
)

Cat.create!(
    birth_date: '2010-08-10',
    color: 'white',
    name: 'Snowball',
    sex: 'F',
    description: 'loves the snow'
)

Cat.create!(
    birth_date: '2017-05-30',
    color: 'gray',
    name: 'Shaaaady',
    sex: 'F',
    description: 'shes a shady bitch'
)