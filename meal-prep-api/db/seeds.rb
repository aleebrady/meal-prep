# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all
Meal.destroy_all

breakfast = Category.create(name: "Breakfast")
lunch = Category.create(name: "Lunch")
dinner = Category.create(name: "Dinner")

Meal.create(name: "Protein Waffles", category: breakfast)
Meal.create(name: "Spinach Omelette", category: breakfast)
Meal.create(name: "Turkey Bacon & Eggs", category: breakfast)
Meal.create(name: "Oatmeal w/ Walnuts", category: breakfast)
Meal.create(name: "Chilaquiles", category: breakfast)
Meal.create(name: "Turkey Sandwich", category: lunch)
Meal.create(name: "Steak and Veggies", category: dinner)

